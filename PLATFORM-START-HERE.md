# SmartSMBHub: services + digital products

## What is built
A new /products page with four listings: Prompt Diary, AI Foundations, Make Starter Kit, and a bundle of all three. Includes category filters, product details, public sample PDF downloads, service cross-sells, page metadata, CollectionPage/ItemList/BreadcrumbList structured data, navigation links and nine sitemap URLs. Professional dark styling and prior animations are retained.

The separately delivered SmartSMBHub-digital-products.zip is the OWNER product library. It contains three individual customer packs, an all-three bundle and a seller guide. Never upload this owner library or the paid packs into public/ or a public GitHub repository. The website includes only free sample PDFs. Paid checkout is deliberately disabled by default.

## Before you take payment
Suggested launch prices, subject to your approval: $19 diary, $29 foundations, $39 Make kit, $69 bundle. No demand, income or conversion claims are made. Approve final descriptions, support boundaries, license and region-appropriate tax/refund/privacy terms. Review the product files and test both Make blueprints before describing them as production-ready.

Simplest route: create digital products with a storefront provider such as Gumroad or Lemon Squeezy, upload each paid ZIP privately to that provider, configure its delivery and purchase terms, and make test purchases. Stripe Payment Links require a separate secure fulfillment process; a checkout redirect is not proof of payment. The kit explains a verified-order/deduplicated delivery design but does not implement it.

Set PAYMENT_LINK_PROMPT_DIARY, PAYMENT_LINK_AI_FOUNDATIONS, PAYMENT_LINK_MAKE_KIT and PAYMENT_LINK_AI_BUNDLE to public HTTPS product checkout URLs from a supported provider. Keep DIGITAL_STORE_LIVE=false until prices, purchased products, taxes, delivery, refunds and retries are verified. Set true only when the relevant configured checkouts are ready. Do not put secret payment keys into these public URL fields. There is no payment webhook or private download backend in this build.

## Make connection
One inactive on-demand scenario was created in your connected Make account: SmartSMBHub | Lead reply prompt builder | Starter template. Its module identifiers and lead module settings were verified. It has not been activated or executed and sends nothing. The included content-brief blueprint uses the same native modules but has not been imported into Make or executed. Both templates compose text prompts; neither calls AI or sends emails. AI APIs, tracker integrations and messaging extensions are separate work.

## Deployment
Extract this source ZIP and upload its CONTENTS to your GitHub repository root so package.json and app/ are at the root. Do not upload the ZIP itself. Use the existing Vercel Next.js project, default root/output settings and npm run build. Complete the older contact email/Notion configuration independently. Run a full production build and inspect a Preview deployment before production; this environment could only validate local renders and browser behavior.

## Verification and SEO
88 JS/JSX syntax checks, seven marketing-page renders, 18 mocked intake/SEO checks, 29 storefront browser checks, 30 motion browser checks and eight checkout-URL configuration checks passed. Tests cover filters, disabled checkout, three valid sample downloads, desktop/mobile width checks, navigation and preserved motion. No browser errors or external preview requests occurred. Full Next.js production build, deployment, real intake, payment/delivery and real Make runs remain unverified.

After deploying, verify the domain in Google Search Console and submit /sitemap.xml. Keep the page useful and add original examples based on actual customer questions. Metadata and structured data do not guarantee indexing, rich results, rankings or sales. Update this page's checkout copy and final prices before launch.
