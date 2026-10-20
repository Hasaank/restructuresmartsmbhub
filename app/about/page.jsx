import { Monitor, ShieldCheck, Workflow } from "lucide-react";
import { pageMetadata } from "../lib/site";
import { PageIntro, Label, CTA, Button } from "../components/SiteUI";
export const metadata = pageMetadata(
  "Our Approach to Websites & AI",
  "SmartSMBHub helps local service businesses build clearer websites and connect practical AI lead-response systems. Website first. Useful automation next.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageIntro
        kicker="SMALL BUSINESS. THOUGHTFUL SYSTEMS."
        title={
          <>
            Your business is personal.
            <br />
            <span>Your website should feel that way.</span>
          </>
        }
        text="SmartSMBHub exists to make the digital side of a service business clearer: what you offer, how people reach you, and what happens after they do."
      />
      <section className="wrap section no-top about-statement">
        <span className="statement-mark" aria-hidden="true">
          ↗
        </span>
        <div>
          <Label>THE WAY WE THINK ABOUT IT</Label>
          <h2>
            You don’t need to look like a giant company.
            <br />
            You need to look like the right choice.
          </h2>
          <p>
            That starts with a website that explains your value without making
            visitors work for it. Then, where it helps, we connect simple ways
            to answer, capture, and follow up.
          </p>
          <p>
            We are building SmartSMBHub around that approach—not around selling
            every tool to every business.
          </p>
        </div>
      </section>
      <section className="wrap section">
        <div className="feature-grid">
          {[
            [
              Monitor,
              "Website first",
              "Start with the services, the message, and the next step. A chatbot cannot fix a confusing offer.",
            ],
            [
              Workflow,
              "Useful over complicated",
              "Recommend the smallest setup that solves a real problem. Confirm compatibility before promising an integration.",
            ],
            [
              ShieldCheck,
              "Honest by design",
              "No invented success stories, guaranteed rankings, or AI that pretends to be a person. Clear expectations from the start.",
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
      <CTA />
    </>
  );
}
