# Marketing website — delivery checks

- Production `npm run build`: passed.
- Contact endpoint regression suite: 19 passed, 0 failed. No real email sent.
- 20 marketing routes checked at 1440px desktop and 390px mobile: HTTP 200, exactly one main H1, metadata/canonical present, images loaded, no page overflow or out-of-bounds tested text/controls, no uncaught page errors.
- Additional checks at 320, 768, 1024, and 1920px across nine representative routes: no horizontal page overflow.
- Native FAQ expansion, keyboard Escape on mobile navigation, 404, plan preselection, and offline-preview navigation checked.
- Form invalid/sending/success/error states tested at desktop/mobile against a mocked endpoint. Data survives recoverable failure. This does NOT establish live email delivery.
- Unconfigured delivery leaves the production form visibly disabled. Offline preview never submits.
- Sitemap has 18 public marketing URLs, excluding legal drafts and digital products. Preview deploys are noindexed.
- `npm audit --omit=dev`: zero reported advisories at delivery. This is not a complete application security assessment.

## Still required before launch

Real Resend delivery and sender verification; destination inbox and scheduling URL approval; offer/pricing/scope approval; privacy/terms and business-identity review; domain redirects and Search Console checks; production performance and accessibility testing. Retained authentication, database, dashboard, storefront, and unrelated APIs require separate integration and security review. No deployment was performed.

Full-page browser captures were used for layout review. Reports describe local checks, not a guarantee of SEO rankings, accessibility compliance, or business results.
