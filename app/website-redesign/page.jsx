import Link from "next/link";
import {
  Monitor,
  MousePointer2,
  ScanSearch,
  ShieldCheck,
  Smartphone,
  FileText,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import { pageMetadata } from "../lib/site";
import {
  PageIntro,
  Button,
  Mockup,
  SectionHead,
  Checklist,
  Process,
  FAQ,
  CTA,
  ServiceSchema,
  Label,
} from "../components/SiteUI";
export const metadata = pageMetadata(
  "Small Business Website Redesign",
  "Mobile-first website redesign for local service businesses. Clear service pages, inquiry forms, on-page SEO, and optional AI follow-up. Request a free audit.",
  "/website-redesign",
);
export default function Redesign() {
  return (
    <>
      <ServiceSchema
        name="Small business website redesign"
        path="/website-redesign"
        description="Website redesign, service-page content, lead capture, and on-page SEO for local service businesses."
      />
      <PageIntro
        kicker="YOUR WEBSITE. WORKING HARDER."
        title={
          <>
            Good at what you do?
            <br />
            <span>Let your website show it.</span>
          </>
        }
        text="Replace confusing pages and outdated design with a clear, credible website built around what your customers need to know—and do next."
      >
        <Button />
        <Button href="/work" secondary>
          See design concepts
        </Button>
      </PageIntro>
      <div className="wrap wide-showcase">
        <Mockup large />
        <div className="showcase-note">
          <span className="concept-tag">Illustrative concept</span>
          <p>
            Ridgeway is a fictional business. This design shows an approach, not
            a completed client engagement.
          </p>
        </div>
      </div>
      <section className="wrap section">
        <SectionHead
          kicker="MORE THAN A FRESH COAT OF PAINT"
          title="A better foundation, page by page."
          text="We agree the exact pages, content responsibilities, and integrations before work starts. Here’s what a redesign can cover."
        />
        <div className="feature-grid">
          {[
            [
              Monitor,
              "A clear first impression",
              "A visual direction that feels like your business—not a generic collection of widgets.",
            ],
            [
              Smartphone,
              "Mobile-first journeys",
              "Readable copy, comfortable touch targets, and inquiry paths that work on a small screen.",
            ],
            [
              FileText,
              "Pages that explain your value",
              "Service-led structure, useful FAQs, and content that helps customers choose their next step.",
            ],
            [
              MousePointer2,
              "Simple inquiry capture",
              "Focused forms and calls to action with confirmed delivery to the right person.",
            ],
            [
              ScanSearch,
              "Search-ready essentials",
              "Page titles, descriptions, headings, internal links, indexability checks, and appropriate structured data.",
            ],
            [
              Workflow,
              "Connections with a purpose",
              "Optional calendar, CRM, chat, or follow-up tools—only after compatibility is confirmed.",
            ],
          ].map(([Icon, title, text]) => (
            <article className="panel" key={title}>
              <span className="icon-tile">
                <Icon size={24} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="wrap section two-col">
        <div>
          <Label>KNOW WHAT YOU’RE GETTING</Label>
          <h2>
            Clear scope.
            <br />
            No mystery package.
          </h2>
          <p>
            Your proposal defines the pages, revisions, content, hosting,
            ongoing care, and ownership or licensing terms. No assumptions
            buried in a feature list.
          </p>
          <Link className="text-link" href="/pricing">
            How pricing works <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="panel">
          <h3>Before we launch, we check:</h3>
          <Checklist
            items={[
              "Desktop and mobile layouts",
              "Forms, confirmations, and delivery errors",
              "Page titles, descriptions, and canonical URLs",
              "Old URLs and redirects where required",
              "Human handoffs for any connected automation",
              "Access, handover, and ongoing responsibilities",
            ]}
          />
        </div>
      </section>
      <Process />
      <FAQ
        items={[
          [
            "Can you redesign my existing website?",
            "Yes, subject to platform access and scope. We first check the current structure, pages, content, and integrations. Any migration or platform change is agreed before work starts.",
          ],
          [
            "Will I lose my existing SEO?",
            "We map important URLs and plan redirects where needed. A redesign can still affect search performance, so we review available Search Console data and monitor after launch; rankings are not guaranteed.",
          ],
          [
            "How long does it take?",
            "Timing depends on page count, content readiness, access, integrations, and review turnaround. Your proposal includes a realistic delivery plan instead of a one-size-fits-all promise.",
          ],
          [
            "Do I have to buy the AI tools?",
            "No. Website redesign is a standalone project. You can add AI services only if they fit your process.",
          ],
          [
            "What happens after launch?",
            "We agree the handoff and any care arrangement in writing, including hosting, updates, access, and support. Ongoing SEO and custom automation are separately scoped.",
          ],
        ]}
      />
      <CTA />
    </>
  );
}
