# SmartSMBHub — Vercel launch and search growth guide

## Delivery status

This is a source-code upgrade, not a live deployment or a certification of the product backend. No GitHub push, Vercel deployment, Google verification, real email delivery, or Notion submission was performed.

The updated marketing site contains a responsive navy-and-gold design, an explicitly illustrative lead-response diagram, reduced-motion support, accessible form labels and keyboard focus, consistent Basic ($97/month), Pro ($197/month), and Custom positioning, new service pages, a useful missed-call guide, and real error handling for the email intake form.

Unverified testimonials, client counts, performance statistics, one-hour deployment promises, free-trial promises, and the incorrect $99 starting price were removed from the active homepage. Old components remain in the repository but are no longer used on the homepage. Do not reintroduce their claims without evidence and permission.

## 1. Deploy safely on Vercel

1. Keep your current production deployment as a rollback point. Create a new Git branch, such as `marketing-seo-upgrade`.
2. Copy the contents of the supplied source directory into the repository root on that branch. Do not commit secrets, `.env.local`, `node_modules`, or `.next`.
3. In a network-enabled development environment, install the locked dependencies and run:
   ```sh
   npm ci
   npm run build
   ```
4. The original dependency versions were retained. Audit and update Next.js and other dependencies to currently supported, security-patched versions before public launch; update the lockfile together with any package changes. This environment could not access the registry, so no current vulnerability assessment was possible.
5. Open a pull request and use Vercel Preview to test the real Next.js build. Configure preview environment variables separately. Keep preview deployments out of search results; check their indexing headers.
6. Test all public pages, sign-in, dashboard, onboarding, forms, mobile navigation, and unknown URLs. Only merge to the production branch after the launch gates below are resolved.
7. In Vercel, confirm `smartsmbhub.com` is the production primary domain, HTTPS works, and alternative hosts such as `www` redirect to the same preferred hostname. The code uses `https://smartsmbhub.com` for canonicals and the sitemap.

### Required launch gates

- Successful production build and route checks on Vercel.
- A real end-to-end intake test using the chosen form mode.
- Agreement on usage allowances, setup fees, integrations, support, cancellation, and refund terms.
- Review of the original Terms and Privacy pages: they still refer to Starter/Agency, a trial, Stripe, vendor lists, and contractual claims that were not verified. Their bodies were not rewritten to invent legal facts.
- Reconcile the retained dashboard pricing/capability model with the public Basic/Pro/Custom offer. Dashboard plan data was intentionally not migrated because that may affect entitlements and existing accounts.
- Security review of the existing account system, API authorization, Google OAuth state handling, and tokens in redirect URLs. The original OAuth redirect code also contains a suspicious brace-wrapped URL. It was not redesigned in this marketing pass.
- Confirm whether `NEXT_PUBLIC_API_BASE_URL` should be `/api`. The original auth helper falls back to an external Render backend when this variable is absent; do not leave that choice accidental.
- Demonstrate real voice, SMS, email follow-up, CRM, and booking delivery. Marketing copy alone does not implement those services.

## 2. Choose your audit intake mode

### Option A — Native Notion form (requested integration)

The contact page is ready to embed a published Notion form, but none was created or connected in this run.

Create a private audit-response database and a form with: name, business name, work email, website (optional), industry, main challenge, plan interest (optional), and required permission to follow up about the request. Add internal-only status and owner properties. Keep sensitive customer information out of the form.

Publish the form for external submissions. Copy the form's embed URL into the server-side Vercel environment variable `NOTION_AUDIT_FORM_URL`, then redeploy. Supported hosts are HTTPS Notion `notion.so` and `notion.site` domains. Use the actual form URL, not a database URL.

The contact page switches from the email form to the Notion embed when this variable is valid. Test submission in a signed-out browser and verify the response appears in the correct database. Keep the response database private; only the intake form should accept public submissions. Configure the form's confirmation message and required fields in Notion. Embedded-form validation and spam controls depend on Notion's settings. Plan selection is not automatically passed into the native form.

### Option B — Email intake through Resend

Set server-only Vercel variables:

- `RESEND_API_KEY`: your real provider key.
- `CONTACT_EMAIL`: the inbox receiving requests.
- `CONTACT_FROM_EMAIL`: a sender identity verified with Resend, for example `SmartSMBHub <audit@smartsmbhub.com>` after domain verification.

Do not use the example sender until its domain is verified. Clear `NOTION_AUDIT_FORM_URL` to use this mode. Redeploy after variable changes.

The handler validates fields, requires inquiry-contact consent, checks request origin and size, rejects a honeypot, and uses plain-text email to avoid HTML injection. It reports missing configuration or provider failure as an error instead of a fake success. Provider acceptance is not a guarantee of inbox delivery; verify receipt and monitor delivery errors.

The in-memory submission limit is best-effort per server instance, not a distributed production defense. Configure Vercel WAF or another persistent rate-limit/spam defense before opening the form to traffic. Neither mode collects automated marketing-SMS consent. Do not treat an audit inquiry as permission to add someone to a marketing text sequence.

## 3. Google indexing

Implemented in source:

- Server-rendered marketing copy using Next.js App Router pages.
- Unique page titles and descriptions; canonical URLs.
- `robots.txt` and an eight-URL `sitemap.xml`.
- Organization, Website, and Service structured data on the homepage, without fake reviews or ratings.
- Open Graph/Twitter sharing metadata and a 1200×630 sharing image.
- Crawlable internal links to service and resource pages.
- Noindex metadata for account/dashboard/onboarding sections. Robots exclusions are not access controls.

After production deployment:

1. Add `smartsmbhub.com` as a Domain property in Google Search Console and follow its DNS TXT verification instructions in your domain's DNS management. Alternatively, use a URL-prefix property and the HTML-tag token through `GOOGLE_SITE_VERIFICATION`, then redeploy. Never paste a whole HTML tag into that variable.
2. Confirm these public endpoints return successfully: `/`, `/contact`, `/services/ai-receptionist`, `/services/website-chatbot`, `/services/lead-follow-up`, `/resources/missed-call-follow-up`, `/robots.txt`, `/sitemap.xml`, and `/og-image.png`.
3. Submit `https://smartsmbhub.com/sitemap.xml` in Search Console.
4. Inspect the homepage and each service page using URL Inspection. Check crawl access, selected canonical, and any noindex signal; use the live test and request indexing where appropriate.
5. Check the rendered source for the correct title, description, canonical, visible text, and structured data. Validate structured data; no special Google rich result is promised by these schema types.
6. Test the live site with PageSpeed Insights and investigate actual Core Web Vitals as field data becomes available. No Lighthouse score or Core Web Vitals result was measured here.

Submitting a sitemap and requesting indexing do not guarantee Google will index, rank, or send traffic to a page.

## 4. Build traffic beyond technical SEO

Treat these as initial topic hypotheses, not measured search-volume findings:

- AI receptionist for small businesses → receptionist service page.
- Small business website chatbot → chatbot service page.
- Automated lead follow-up for small businesses → follow-up service page.
- Missed-call follow-up and missed-call text-back → practical resource guide.

Start with one audience you can serve well, such as home-service businesses or salons. Add a genuinely specific audience page only after confirming its setup, integrations, and examples. Do not mass-produce near-identical city pages or invent service areas.

Publish one useful, experience-based guide each week: call-flow testing, appointment reminders, selecting a CRM connection, or measuring booked appointments. Use real screenshots or customer evidence only with permission. Link each article to the relevant service and the audit form.

Distribute useful guides through your real business profiles, relevant communities, outreach, and partners. Seek legitimate mentions from businesses you work with; avoid paid link spam. If the business is eligible for a Google Business Profile, keep accurate public business details there—do not create a fictitious location.

Set up privacy-appropriate analytics after choosing a provider and updating the privacy disclosure. Analytics tracking was not added in this pass. Track organic landing-page visits, audit submissions, booked consultations, and customers—not just total traffic. Native embedded Notion form conversion tracking requires a separate plan; cross-origin iframe submissions are not directly visible to the parent page.

Review Search Console impressions, clicks, queries, and indexing issues regularly. Improve pages based on real evidence rather than guaranteed-ranking promises.

## 5. What was tested here

- 84 JavaScript/JSX source files passed syntax transformation.
- Six marketing routes were server-rendered with locally available React and visually inspected at desktop and approximately 390px widths.
- 18 focused checks covered field validation, missing configuration, origin rejection, provider failure, provider acceptance, network failure, sitemap URLs, and robots sitemap declaration. Email-provider responses were mocked; no real lead data was sent.
- Interactive previews used a local React bundle with authentication mocked. They are not proof of Next.js production integration.
- Package installation failed with registry DNS errors (`ENOTFOUND`) and an npm exit-handler error. Consequently the full Next.js build, real Vercel deployment, real email delivery, native Notion embed, existing account flows, and production performance remain unverified.

Keep the original LICENSE. See `QA-RESULTS.json` and `CHANGE-MANIFEST.json` for the focused test record and file changes.
