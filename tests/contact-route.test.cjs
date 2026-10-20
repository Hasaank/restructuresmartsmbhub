const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const validation = fs
  .readFileSync(path.join(root, "app/lib/contact-validation.js"), "utf8")
  .replace("export function", "function");
const source = fs
  .readFileSync(path.join(root, "app/api/contact/route.js"), "utf8")
  .replace(/^import .*;\s*$/gm, "")
  .replace(/export const runtime\s*=\s*["']nodejs["'];?/, "")
  .replace("export async function POST", "async function POST");
function handler({
  env = {},
  fetch = async () => {
    throw new Error("External delivery forbidden in unit tests");
  },
} = {}) {
  return vm.runInNewContext(validation + "\n" + source + "\nPOST", {
    NextResponse: { json: (body, init) => Response.json(body, init) },
    Response,
    URL,
    TextEncoder,
    AbortSignal,
    process: { env },
    fetch,
    Map,
    Date,
    JSON,
    Number,
    String,
  });
}
const valid = {
  name: "Test Person",
  businessName: "Example Business",
  businessType: "Home services",
  email: "person@example.invalid",
  website: "https://example.invalid",
  message: "Please review the website.",
  plan: "Website",
  consent: true,
};
function req(
  data = valid,
  { origin = "http://localhost:3000", type = "application/json", body } = {},
) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: { ...(origin ? { origin } : {}), "content-type": type },
    body: body ?? JSON.stringify(data),
  });
}
test("unconfigured delivery returns 503 rather than false success", async () =>
  assert.equal((await handler()(req())).status, 503));
test("rejects unexpected origin", async () =>
  assert.equal(
    (await handler()(req(valid, { origin: "https://untrusted.invalid" })))
      .status,
    403,
  ));
test("rejects missing origin", async () =>
  assert.equal((await handler()(req(valid, { origin: "" }))).status, 403));
test("rejects wrong content type", async () =>
  assert.equal(
    (await handler()(req(valid, { type: "text/plain" }))).status,
    415,
  ));
test("rejects malformed JSON", async () =>
  assert.equal((await handler()(req(valid, { body: "{bad" }))).status, 400));
for (const [name, data] of [
  ["missing name", { ...valid, name: "" }],
  ["missing consent", { ...valid, consent: false }],
  ["bad email", { ...valid, email: "invalid" }],
  [
    "header injection",
    { ...valid, email: "a@example.invalid\r\nCc:b@example.invalid" },
  ],
  ["honeypot", { ...valid, companyUrl: "bot" }],
  ["javascript website", { ...valid, website: "javascript:alert(1)" }],
  [
    "credentialed website",
    { ...valid, website: "https://user:pass@example.invalid" },
  ],
  ["long field", { ...valid, message: "x".repeat(4001) }],
  ["wrong field type", { ...valid, name: 4 }],
])
  test("rejects " + name, async () =>
    assert.equal((await handler()(req(data))).status, 400),
  );
test("limits body size", async () =>
  assert.equal(
    (await handler()(req(valid, { body: "x".repeat(17000) }))).status,
    413,
  ));
const env = {
  RESEND_API_KEY: "unit-test-only",
  CONTACT_EMAIL: "owner@example.invalid",
  CONTACT_FROM_EMAIL: "sender@example.invalid",
};
test("confirmed provider response permits success; payload preserves website interest", async () => {
  let payload;
  const response = await handler({
    env,
    fetch: async (url, init) => {
      assert.equal(url, "https://api.resend.com/emails");
      payload = JSON.parse(init.body);
      return Response.json({ id: "test-message-id" });
    },
  })(req());
  assert.equal(response.status, 200);
  assert.match(payload.text, /Plan interest: Website/);
  assert.equal(payload.reply_to, valid.email);
});
test("provider failure is not success", async () =>
  assert.equal(
    (
      await handler({
        env,
        fetch: async () =>
          Response.json({ error: "rejected" }, { status: 400 }),
      })(req())
    ).status,
    502,
  ));
test("provider timeout/network failure is not success", async () =>
  assert.equal((await handler({ env })(req())).status, 500));
test("rate limits repeated valid submissions", async () => {
  const post = handler();
  for (let i = 0; i < 5; i++) assert.equal((await post(req())).status, 503);
  assert.equal((await post(req())).status, 429);
});
