import Link from "next/link";
import {
  ArrowUpRight,
  Monitor,
  Workflow,
  Check,
  MousePointer2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { pageMetadata, description, SITE_URL } from "./lib/site";
import {
  Button,
  Label,
  SectionHead,
  Mockup,
  Flow,
  WorkGrid,
  Process,
  FAQ,
  CTA,
  Checklist,
  JsonLd,
} from "./components/SiteUI";
export const metadata = pageMetadata(
  "Website Redesign & AI Automation | SmartSMBHub",
  description,
  "/",
);
export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": SITE_URL + "/#organization",
              name: "SmartSMBHub",
              url: SITE_URL,
              logo: SITE_URL + "/brand-icon.svg",
            },
            {
              "@type": "WebSite",
              "@id": SITE_URL + "/#website",
              name: "SmartSMBHub",
              url: SITE_URL,
              publisher: { "@id": SITE_URL + "/#organization" },
            },
          ],
        }}
      />
      <section className="wrap hero">
        <div className="hero-copy">
          <Label>WEBSITE DESIGN + AI AUTOMATION</Label>
          <h1>
            A better website.
            <br />A smarter way
            <br />
            <span>to grow.</span>
          </h1>
          <p className="lead">
            Turn a tired website into a clear first impression. Then connect
            calls, chat, and follow-up—so your next inquiry has somewhere to go.
          </p>
          <div className="actions">
            <Button />
            <Link className="text-link" href="/work">
              Explore the work <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="hero-note">
            <ShieldCheck size={16} /> Built for local service businesses. No
            tech overwhelm.
          </p>
        </div>
        <div className="hero-art">
          <div className="hero-art-label">
            <span className="status-dot" /> YOUR DIGITAL FRONT DOOR, REIMAGINED{" "}
            <span>01 / 02</span>
          </div>
          <Mockup large />
          <div className="lead-notification">
            <span className="notification-icon">
              <Check size={21} />
            </span>
            <div>
              <strong>A clearer path to the next conversation.</strong>
              <p>
                Website inquiry <ArrowUpRight size={13} /> useful context{" "}
                <ArrowUpRight size={13} /> your team
              </p>
            </div>
            <span className="demo-label">CONCEPT</span>
          </div>
          <p className="art-caption">
            Fictional business · illustrative design, not a client result
          </p>
        </div>
      </section>
      <div className="foundation-strip">
        <div className="wrap">
          <span>
            <Monitor size={19} /> A website that earns trust
          </span>
          <span>
            <MousePointer2 size={19} /> An obvious next step
          </span>
          <span>
            <Workflow size={19} /> Follow-up that fits your team
          </span>
        </div>
      </div>
      <section className="wrap section">
        <SectionHead
          kicker="ONE FOUNDATION. ROOM TO GROW."
          title={
            <>
              Start with the website.
              <br />
              Add the smart stuff when you’re ready.
            </>
          }
          text="You don’t need every tool. You need a credible online home and a simple way to turn interest into a conversation."
        />
        <div className="offer-grid">
          <article className="offer-card featured-offer">
            <div className="card-top">
              <span className="icon-tile">
                <Monitor size={27} />
              </span>
              <span className="eyebrow plain">01 / YOUR FOUNDATION</span>
            </div>
            <h3>Website redesign</h3>
            <p>
              A modern, mobile-first website that explains what you do, builds
              confidence, and makes getting in touch easy.
            </p>
            <Checklist
              items={[
                "Clear service pages & persuasive content",
                "Mobile-first design & lead-capture forms",
                "On-page SEO & a thoughtful launch handoff",
              ]}
            />
            <Button href="/website-redesign" secondary>
              Explore website redesign
            </Button>
            <span className="offer-watermark" aria-hidden="true">
              ↗
            </span>
          </article>
          <article className="offer-card">
            <div className="card-top">
              <span className="icon-tile">
                <Workflow size={27} />
              </span>
              <span className="eyebrow plain">02 / YOUR NEXT LAYER</span>
            </div>
            <h3>AI & connected follow-up</h3>
            <p>
              Help new inquiries move forward while your team is on a job,
              helping a customer, or off the clock.
            </p>
            <div className="mini-flow">
              <span>
                <Phone size={17} /> Calls & chat
              </span>
              <ArrowUpRight size={18} />
              <span>
                <Workflow size={17} /> Follow-up
              </span>
            </div>
            <Checklist
              items={[
                "AI receptionist & missed-call text-back",
                "Website chat & booking connections",
                "SMS, email & compatible CRM workflows",
              ]}
            />
            <Link className="text-link" href="/ai-automations">
              Explore AI automations <ArrowUpRight size={18} />
            </Link>
          </article>
        </div>
      </section>
      <section className="work-section">
        <div className="wrap section">
          <SectionHead
            kicker="A LOOK AT THE POSSIBILITIES"
            title={
              <>
                Different businesses.
                <br />
                The same clear next step.
              </>
            }
            text="Explore three illustrative concepts. These are fictional business examples—not client projects, testimonials, or measured results."
          />
          <WorkGrid />
          <div className="section-footer">
            <p>Designed to show the thinking, not to invent the proof.</p>
            <Link className="text-link" href="/work">
              Explore the concepts <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="wrap section two-col response-section">
        <div>
          <Label>DON’T STOP AT A BETTER FIRST IMPRESSION</Label>
          <h2>
            Your website opens the door.
            <br />
            <span className="muted">Your response keeps it open.</span>
          </h2>
          <p>
            A great-looking site is only the beginning. Optional automations
            help acknowledge inquiries, capture the right details, and bring
            your team into the conversation.
          </p>
          <Button href="/ai-automations" secondary>
            See how it connects
          </Button>
        </div>
        <Flow />
      </section>
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
