# SmartSMBHub motion website

Editable Figma concept: https://www.figma.com/design/038ZuAC4wcW5yfJk3nZRzQ

## What changed
- CSS floating-card hero, slow moving gradient background and waveform illustration.
- Opposing scroll-linked card columns. Native wheel/touch scrolling is preserved.
- Pause/resume button, reduced-motion support, and mobile static cards.
- Existing SEO, six marketing routes, FAQs and validated contact API retained.
- Workflow cards are clearly labeled examples, not live customer activity.

## Preview before uploading
Open the separately supplied SmartSMBHub-motion-preview.html in your browser. It works offline and makes no network requests. Preview forms explicitly do not send or save data. The Figma file contains editable static designs, not an animated or hosted website.

## Upload to your existing GitHub / Vercel project
1. Extract this ZIP. Open the extracted folder and upload its CONTENTS into your GitHub repository; package.json and app/ must be at the repository root. Do not upload this ZIP itself.
2. Vercel framework: Next.js. Root: repository root. Build: npm run build. Output directory: default.
3. Set production configuration from .env.local.example. Either set a valid native Notion audit-form URL or configure Resend with a verified sender and receiving address. Never commit private secrets.
4. Review a Vercel Preview deployment and test actual submissions, navigation, metadata, and your existing authentication before production.

This update has not been deployed. No Framer connection is available in this session. The reference website could not be loaded, so this is an original direction based on the requested motion—not a verified reproduction. Figma does not host this Next.js application.

## Verified locally
85 JavaScript/JSX syntax checks; six static marketing-page renders; 18 mocked intake/SEO checks; 28 browser checks including drifting transforms, pause/resume, opposing scroll, native wheel direction, reduced motion, 320/390/768/1024/1440px widths, mobile menu, FAQ, route navigation and preview-form handling. No browser errors or external preview requests.

## Still needs live verification
Full Next.js production build (package-registry access unavailable here), Vercel hosting, real email or Notion submissions, authentication, dashboards, billing and actual voice/SMS/chat/CRM/calendar delivery. This is the website frontend—not a newly provisioned AI service backend.
