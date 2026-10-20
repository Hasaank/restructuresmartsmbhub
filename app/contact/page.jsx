import AuditForm from "../components/AuditForm";
import { pageMetadata } from "../lib/site";
import { Label, Checklist, Button } from "../components/SiteUI";
import { ArrowUpRight } from "lucide-react";
export const metadata = pageMetadata(
  "Free Website & Lead-Response Audit",
  "Request a free review of your website, inquiry capture, and follow-up process. Get a practical starting point for website redesign and optional AI automation.",
  "/contact",
);
export const dynamic = "force-dynamic";
function safeUrl(value, notionOnly = false) {
  try {
    const u = new URL(value || "");
    if (u.protocol !== "https:" || u.username || u.password) return null;
    if (
      notionOnly &&
      !["notion.so", "notion.site"].some(
        (d) => u.hostname === d || u.hostname.endsWith("." + d),
      )
    )
      return null;
    return u.href;
  } catch {
    return null;
  }
}
export default function Contact() {
  const notionUrl = safeUrl(process.env.NOTION_AUDIT_FORM_URL, true);
  const booking = safeUrl(process.env.BOOKING_URL);
  const configured = Boolean(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_EMAIL &&
    process.env.CONTACT_FROM_EMAIL,
  );
  return (
    <section className="wrap contact-layout">
      <div className="contact-copy">
        <Label>LET’S FIND YOUR NEXT STEP</Label>
        <h1>
          A better website
          <br />
          starts with a<br />
          <span>real conversation.</span>
        </h1>
        <p className="lead">
          Tell us what you do, what is not working, and where you want to go.
          We’ll look at your website and lead-response process—not pitch every
          tool in the toolbox.
        </p>
        <div className="contact-expect">
          <h2>What we’ll look at</h2>
          <Checklist
            items={[
              "Your message & first impression",
              "Mobile experience & inquiry capture",
              "Calls, chat, follow-up & booking gaps",
              "A sensible scope, tools & next step",
            ]}
          />
        </div>
        <p className="small">
          Free audit. No purchase required. No subscription starts here.
        </p>
        {booking && (
          <a
            href={booking}
            className="button button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prefer a call? Choose a time <ArrowUpRight size={18} />
          </a>
        )}
      </div>
      <div className="form-card">
        {notionUrl ? (
          <>
            <h2>Request your free audit</h2>
            <p>Your details are collected through Notion.</p>
            <iframe
              className="notion-form"
              src={notionUrl}
              title="SmartSMBHub website and lead-response audit request"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <a
              href={notionUrl}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the form in a new tab <ArrowUpRight size={16} />
            </a>
          </>
        ) : (
          <>
            <div className="form-heading">
              <span>01 / YOUR NEXT CHAPTER</span>
              <span className="concept-tag">Free audit</span>
            </div>
            <h2>Tell us about your business.</h2>
            <p>A few details help us make the conversation useful.</p>
            <AuditForm configured={configured} />
          </>
        )}
      </div>
    </section>
  );
}
