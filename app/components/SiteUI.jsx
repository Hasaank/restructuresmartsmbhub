import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Monitor,
  Phone,
  MessagesSquare,
  MessageSquare,
  Send,
  CalendarDays,
  Workflow,
  ScanSearch,
  MousePointer2,
  ShieldCheck,
  Plus,
  CornerDownRight,
} from "lucide-react";
import { projects, services, faqs, SITE_URL } from "../lib/site";
export const iconMap = {
  Phone,
  MessagesSquare,
  MessageSquare,
  Send,
  CalendarDays,
  Workflow,
};
export function Button({
  href = "/contact",
  children = "Get my free website audit",
  secondary = false,
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : ""}`}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Label({ children }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function SectionHead({ kicker, title, text }) {
  return (
    <div className="section-head">
      <div>
        <Label>{kicker}</Label>
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}
export function PageIntro({ kicker, title, text, children }) {
  return (
    <section className="wrap page-intro">
      <Label>{kicker}</Label>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
      {children && <div className="actions">{children}</div>}
    </section>
  );
}
export function CTA({
  title = (
    <>
      Your next chapter
      <br />
      starts with a better website.
    </>
  ),
  text = "Let’s look at what is working, what is getting in the way, and where a smarter system could help.",
}) {
  return (
    <section className="wrap cta-block">
      <div>
        <Label>LESS FRICTION. MORE POSSIBILITY.</Label>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div>
        <Button />
        <p className="small">Free audit. Clear scope. No obligation.</p>
      </div>
    </section>
  );
}
export function FAQ({ items = faqs }) {
  return (
    <section className="wrap section faq">
      <div>
        <Label>BEFORE YOU ASK</Label>
        <h2>
          Good questions.
          <br />
          Straight answers.
        </h2>
        <p>Not seeing your question?</p>
        <Link className="text-link" href="/contact">
          Let’s talk it through <ArrowUpRight size={17} />
        </Link>
      </div>
      <div className="faq-list">
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <Plus size={19} aria-hidden="true" />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function Checklist({ items }) {
  return (
    <ul className="check-list">
      {items.map((x) => (
        <li key={x}>
          <Check size={17} aria-hidden="true" />
          {x}
        </li>
      ))}
    </ul>
  );
}
export function Process() {
  return (
    <section className="wrap section" id="process">
      <SectionHead
        kicker="NO MYSTERY. JUST A CLEAR PLAN."
        title={
          <>
            From “we should fix this”
            <br />
            to ready for business.
          </>
        }
        text="We agree the scope first, then work through the details together. No surprise tools or unnecessary complexity."
      />
      <div className="process-grid">
        {[
          [
            "01",
            "Find the friction",
            "Review your current website, customer journey, and the inquiries you want more of.",
          ],
          [
            "02",
            "Build the foundation",
            "Design and build around your services, your customers, and one clear next step.",
          ],
          [
            "03",
            "Connect what helps",
            "Add the right call, chat, or follow-up tools only where they solve a real problem.",
          ],
          [
            "04",
            "Test. Launch. Improve.",
            "Test mobile layouts, forms, handoffs, and tracking. Agree who owns ongoing care.",
          ],
        ].map(([n, title, text]) => (
          <article key={n}>
            <span className="step-number">
              {n}
              <ArrowRight size={18} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Mockup({ project = projects[0], large = false }) {
  return (
    <div className={`browser-mockup ${project.theme} ${large ? "large" : ""}`}>
      <div className="browser-bar">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span>{project.name} · concept preview</span>
        <ArrowUpRight size={14} />
      </div>
      <div className="mock-page">
        <div className="mock-nav">
          <span>
            {project.theme === "ridgeway"
              ? "↗ RIDGEWAY"
              : project.theme === "fieldwork"
                ? "fieldwork."
                : "haven / wellness"}
          </span>
          <span className="mock-nav-right">
            {project.theme === "haven"
              ? "Find your moment"
              : "Built for the way you live"}
          </span>
        </div>
        <div className="mock-hero">
          <img
            src={`/images/${project.image}.jpg`}
            alt={
              project.theme === "ridgeway"
                ? "Contemporary house with a landscaped garden"
                : project.theme === "fieldwork"
                  ? "Plants and tools in a garden workspace"
                  : "A calm spa and wellness space"
            }
            width="1200"
            height="800"
            loading={large ? "eager" : "lazy"}
          />
          <div className="mock-shade" />
          <div className="mock-copy">
            <span>{project.category.toUpperCase()} / ILLUSTRATIVE DESIGN</span>
            <h3>{project.headline}</h3>
            <span className="mock-cta">
              {project.theme === "haven"
                ? "Explore treatments"
                : "Let’s plan your project"}{" "}
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
        <div className="mock-bottom">
          <span>Thoughtful service.</span>
          <span>
            A clear next step. <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </div>
  );
}
export function WorkGrid({ limit = 3 }) {
  return (
    <div className="work-grid">
      {projects.slice(0, limit).map((project) => (
        <article className="work-card" key={project.slug}>
          <Link
            href={`/work/${project.slug}`}
            aria-label={`View ${project.name} illustrative concept`}
            className="work-image"
          >
            <Mockup project={project} />
          </Link>
          <div className="work-card-meta">
            <span>{project.category}</span>
            <span className="concept-tag">Illustrative concept</span>
          </div>
          <Link href={`/work/${project.slug}`} className="work-title">
            <h3>{project.name}</h3>
            <ArrowUpRight size={21} />
          </Link>
          <p>{project.short}</p>
        </article>
      ))}
    </div>
  );
}
export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map(({ slug, icon, name, desc, tag }, i) => {
        const Icon = iconMap[icon];
        return (
          <Link className="service-card" key={slug} href={`/services/${slug}`}>
            <div className="service-top">
              <span className="icon-tile">
                <Icon size={24} />
              </span>
              <span>
                {String(i + 1).padStart(2, "0")} / {tag}
              </span>
            </div>
            <h3>{name}</h3>
            <p>{desc}</p>
            <span className="text-link">
              Explore the service <ArrowUpRight size={17} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function Flow({ compact = false }) {
  return (
    <div className={`flow-demo ${compact ? "compact" : ""}`}>
      <div className="flow-header">
        <span className="status-dot" /> A connected lead journey{" "}
        <span className="demo-label">EXAMPLE</span>
      </div>
      {[
        [Phone, "Customer reaches out", "A call, chat, or website inquiry"],
        [MessageSquare, "A useful response", "Answers and a clear next step"],
        [
          CalendarDays,
          "Your team takes it forward",
          "Booking, context, and human handoff",
        ],
      ].map(([Icon, title, text], i) => (
        <div className="flow-step" key={title}>
          <span className="flow-icon">
            <Icon size={20} />
          </span>
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
          <Check size={17} />
        </div>
      ))}
      <p className="flow-note">
        Illustrative workflow. Not live customer activity.
      </p>
    </div>
  );
}
export function ServiceDetail({ service }) {
  const Icon = iconMap[service.icon];
  return (
    <>
      <section className="wrap service-intro">
        <div>
          <Label>{service.name.toUpperCase()}</Label>
          <h1>{service.intro}</h1>
          <p className="lead">{service.desc}</p>
          <div className="actions">
            <Button
              href={`/contact?plan=${service.slug === "ai-receptionist" || service.slug === "missed-call-text-back" ? "Basic" : "Pro"}`}
            >
              Find the right setup
            </Button>
            <Button href="/pricing" secondary>
              Compare plans
            </Button>
          </div>
        </div>
        <Flow />
      </section>
      <section className="wrap section two-col">
        <div>
          <Label>BUILT AROUND YOUR PROCESS</Label>
          <h2>
            Useful automation.
            <br />
            Clear boundaries.
          </h2>
          <p>{service.plan}</p>
          <p className="small">
            Website redesign is separate. Setup scope, usage allowances,
            provider fees, and supported connections are confirmed before
            purchase.
          </p>
        </div>
        <div className="panel">
          <span className="icon-tile">
            <Icon size={26} />
          </span>
          <h3>What we scope with you</h3>
          <Checklist items={service.includes} />
        </div>
      </section>
      <section className="wrap section">
        <SectionHead
          kicker="HOW IT FITS TOGETHER"
          title="A practical path to launch."
        />
        <div className="process-grid three">
          {service.steps.map((step, i) => (
            <article key={step}>
              <span className="step-number">
                0{i + 1}
                <CornerDownRight size={18} />
              </span>
              <h3>{["Configure", "Connect", "Test & hand off"][i]}</h3>
              <p>{step}</p>
            </article>
          ))}
        </div>
        <div className="notice">
          <ShieldCheck size={24} />
          <div>
            <h3>Keep people in the loop.</h3>
            <p>{service.boundary}</p>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <SectionHead
          kicker="PART OF THE SAME SYSTEM"
          title="Connect only what you need."
        />
        <div className="related-links">
          {services
            .filter((x) => x.slug !== service.slug)
            .slice(0, 3)
            .map((x) => (
              <Link key={x.slug} href={`/services/${x.slug}`}>
                {x.name}
                <ArrowUpRight size={18} />
              </Link>
            ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
export function ServiceSchema({ name, path, description }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: SITE_URL + path,
        provider: {
          "@type": "Organization",
          name: "SmartSMBHub",
          url: SITE_URL,
        },
      }}
    />
  );
}
