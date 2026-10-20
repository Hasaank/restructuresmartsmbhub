# SmartSMBHub — Website-first redesign

A complete **Next.js 15 / React 18** marketing-site rebuild based on the supplied GitHub repository. Fixed dark olive theme, lime accents, responsive layouts, server-rendered SEO metadata, and a website-audit inquiry funnel.

**Delivery status:** built and tested locally. Nothing was pushed to GitHub, no Vercel project was changed, and no production deployment was made. Use a review branch and Vercel Preview before promoting.

## What is included

- Website-first homepage and `/website-redesign` flagship service page.
- `/ai-automations` plus six focused service pages: AI receptionist, missed-call text-back, website chat, lead follow-up, booking/reminders, and CRM connections.
- `/work` and three illustrative concept detail pages. The businesses are fictional; no client relationships, revenue, testimonials, or results are invented.
- Dedicated `/pricing`, `/about`, `/contact`, `/resources`, and the existing missed-call guide.
- Review-ready `/privacy` and `/terms` drafts, clearly labeled and noindexed until approved.
- Accessible mobile navigation, keyboard focus, reduced-motion support, meaningful image alternatives, readable 14px minimum interface text, and native expandable FAQs.
- A contact form with client/server validation, consent, honeypot, body limits, origin checks, honest errors, and best-effort per-instance rate limiting. Real email delivery requires the configuration below.
- Per-page SEO titles/descriptions, canonical URLs, Open Graph and Twitter cards, Organization/WebSite/Service JSON-LD, sitemap, and robots route. No fake ratings or reviews in structured data.
- Existing account, dashboard, onboarding, models, and other APIs retained. They are not part of this marketing redesign's functional/security audit and still require their own configuration and integration testing.

Digital products are removed from navigation and the homepage. Their existing route and files are retained for backward compatibility, excluded from the sitemap, and noindexed. Do not turn checkout on without separately reviewing it.

## Run locally

Use Node 20.9+ (Node 24 was used for delivery testing).

```bash
npm ci
cp .env.local.example .env.local
npm run dev
```

Or test production:

```bash
npm test
npm run build
npm start
```

Visit `http://localhost:3000`. Marketing pages do not need MongoDB. Do not add real credentials to source control.

## Enable real audit-request delivery

Set these **server-side Vercel environment variables**:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from your Resend account |
| `CONTACT_EMAIL` | Your confirmed receiving inbox |
| `CONTACT_FROM_EMAIL` | A sender address on a domain verified with Resend; optional friendly sender name |

Redeploy after saving the environment variables. The form is deliberately disabled with a visible notice when these three values are missing. It never displays a success state without a confirmed provider response. A set value is not proof of a valid key or a verified domain: **send a real, authorized test inquiry and confirm receipt before launch**.

Optional alternatives:

- `NOTION_AUDIT_FORM_URL`: an HTTPS embed URL on `notion.so` or `notion.site` for a published, publicly submittable form. When valid, it replaces the Resend form. Check public submission access and keep the response database private.
- `BOOKING_URL`: your real HTTPS scheduling URL. Adds a booking link on the contact page only when configured. No pretend calendar is included.
- `GOOGLE_SITE_VERIFICATION`: Search Console verification token.
- `NEXT_PUBLIC_NOINDEX=true`: stops indexing on a non-production review deployment. `VERCEL_ENV=preview` also enables noindex automatically.

The endpoint's in-memory limiter is **not a durable multi-instance anti-abuse service**. Configure Vercel WAF/rate limiting or a properly validated challenge before exposing the form broadly, especially during outbound campaigns.

## Publish safely on GitHub + Vercel

1. Back up the current project and Vercel environment settings.
2. Create a branch, e.g. `website-first-redesign`.
3. Copy this project's files into a fresh checkout of your repository, review the diff, and keep your existing `.env.local` private. This ZIP intentionally omits `.git`, `.next`, and `node_modules`.
4. Run `npm ci`, `npm test`, and `npm run build`.
5. Commit and push the review branch. Your connected Vercel project can create a Preview deployment. This delivery does not push or deploy for you.
6. Add the intended environment values to the appropriate Vercel environments, redeploy, and test actual form receipt and any configured booking link.
7. Complete every launch gate below before merging/promoting to production.

Do **not** deploy `SmartSMBHub-Preview.html` as the production site. It is an offline visual/navigation preview, not the Next.js app or a working backend. Download it and open it in a browser to explore the marketing pages without installing anything. Client login is not simulated in that preview.

## Launch gates — owner approval required

- Confirm the service audience and geography. This draft targets local service businesses, not a fabricated city or address.
- Approve the exact offer and deliverability. Existing $97 Basic and $197 Pro starting prices are retained; website redesign is quoted separately. Confirm margins, setup fees, allowances, usage charges, and supported integrations.
- Finalize the proposal/agreement: payment, cancellation, ownership/licensing, hosting, care, support, revisions, and delivery responsibilities. None are guessed.
- Review the privacy/terms drafts for your actual entity, reachable contact, jurisdiction, vendors, retention, and account services. They replace inconsistent legacy policy copy as drafts, **not attorney-approved final legal documents**. After approval, remove the draft notice and update robots metadata if desired.
- Confirm Resend sender verification, destination inbox, real delivery, failure handling, and anti-abuse protection.
- If operating the retained client platform, configure and test its authentication, database, access control, and APIs separately. Do not infer that marketing QA validates those systems.
- Confirm the preferred production domain. SEO currently uses `https://www.smartsmbhub.com`. Set the non-www domain to redirect to www in Vercel. If you choose the opposite, change `SITE_URL` and the corresponding domain redirect together.
- Submit `/sitemap.xml` in Search Console. Check indexing, canonical selection, redirects, and performance after launch. SEO foundations do not guarantee rankings or customers.
- Replace illustrative concepts only when you have permission and verified facts. Do not remove the fictional/concept labels while the examples remain fictional.

## Editing map

| Content | File |
| --- | --- |
| Brand, palette, layout, breakpoints | `app/marketing.css` |
| Header / footer | `app/components/Navbar.jsx`, `app/components/Footer.jsx` |
| Home | `app/page.jsx` |
| Pricing, FAQs, service and concept data | `app/lib/site.js` |
| Reusable sections / website mockups | `app/components/SiteUI.jsx` |
| Contact UI / delivery | `app/components/AuditForm.jsx`, `app/contact/page.jsx`, `app/api/contact/route.js` |
| SEO site defaults | `app/layout.jsx`, `app/lib/site.js` |
| Crawl controls | `app/sitemap.js`, `app/robots.js` |

The original three service paths remain supported; their wrappers use the same shared service template as the new dynamic pages. No inbound service URL was intentionally removed. Add verified client projects to the `projects` data and extend the template with evidence as needed.

## Quality checks

See `qa/QA-SUMMARY.md` and included JSON reports. Marketing pages were checked at 1440px and 390px, including open navigation, expanded FAQ, 404, disabled contact, and mocked client-form success/error states. Server contact regression tests do not contact a real email provider. Live integrations, delivery, Search Console indexing, Lighthouse/Core Web Vitals, and retained account APIs still need production checks.

Compatible dependency fixes were applied, the unused `toast` package was removed, Next was patched within version 15, and PostCSS was overridden to a patched compatible version. `npm audit --omit=dev` reported zero advisories at the time of delivery; that is not a guarantee against future vulnerabilities or application-level flaws.

## Assets and licensing

The three concept names are fictional examples and should not be represented as real customers. Stock photos illustrate design only; they are not company premises, staff, or completed projects. See `ASSET-SOURCES.md` for photo source URLs. Existing source/license notices are retained. Review third-party licenses for your intended use.

Earlier platform/storefront/motion documents in this repository describe previous versions. **This README and LAUNCH-AND-SEO.md take precedence for the new marketing website.**
