import MotionHero,{MotionJourney} from "./components/MotionHero";
import {plans,faqs,pageMetadata,SITE_URL,description} from "./lib/site";

export const metadata = pageMetadata(
  "AI Receptionist & Lead Follow-Up for Small Businesses",
  description,
  "/"
);

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "SmartSMBHub",
        url: SITE_URL,
        logo: `${SITE_URL}/brand-icon.svg`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "SmartSMBHub",
        description,
      },
    ],
  };

  return (
    <div className="hub-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\u003c"),
        }}
      />

      <MotionHero />

      <div className="hub-strip">
        <div className="hub-container">
          <span>Built around your business</span>
          <span>Calls + chat + follow-up</span>
          <span>Custom guidance</span>
        </div>
      </div>

      <section id="features" className="hub-section hub-container">
        <div className="hub-section-head">
          <div>
            <p className="hub-eyebrow">ONE CONNECTED CUSTOMER JOURNEY</p>
            <h2>
              From first hello<br />to the next booked job.
            </h2>
          </div>
        </div>

        <div className="hub-solutions">
          {[
            [
              "01",
              "AI receptionist",
              "Give callers a next step, not just a voicemail. Handle missed and after-hours calls with answers configured for your business.",
              "/services/ai-receptionist",
              "Calls",
            ],
            [
              "02",
              "Website chatbot",
              "Help visitors get answers while they are on your site. Capture inquiries and guide interested customers toward booking.",
              "/services/website-chatbot",
              "Chat",
            ],
            [
              "03",
              "Automated follow-up",
              "Keep new inquiries from going cold. Use SMS and email follow-up with CRM logging and owner alerts.",
              "/services/lead-follow-up",
              "Follow-up",
            ],
          ].map(([n, title, text, href, tag]) => (
            <article className="hub-solution" key={n}>
              <div className="hub-solution-top">
                <span>{n}</span>
                <span className="hub-tag">{tag}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={href}>Learn more</a>
            </article>
          ))}
        </div>

        <div className="hub-additions">
          <div>
            <strong>Booking + reminders</strong>
            <p>Turn an inquiry into an appointment with reminders, routing, and follow-up flows.</p>
          </div>
          <div>
            <strong>Branded lead-capture pages</strong>
            <p>Capture every inquiry with a clear path to action and your preferred next step.</p>
          </div>
          <div>
            <strong>Owner visibility</strong>
            <p>See what the system handled, what needs attention, and where follow-up is required.</p>
          </div>
        </div>
      </section>

      <MotionJourney />

      <section className="hub-container shop-teaser">
        <div>
          <p className="hub-eyebrow">BUILD IT YOURSELF. OR BUILD IT WITH US.</p>
          <h2>
            AI services +<br />
            <em>practical digital products.</em>
          </h2>
          <p>
            Explore tools, playbooks, and connected systems to help small businesses respond faster and grow with less friction.
          </p>
          <div className="hub-actions">
            <a href="/products" className="hub-button">Explore products</a>
            <a href="/contact" className="hub-secondary">Let&apos;s talk</a>
          </div>
        </div>
      </section>

      <section id="pricing" className="hub-section hub-container">
        <div className="hub-section-head">
          <div>
            <p className="hub-eyebrow">CUSTOM SOLUTIONS</p>
            <h2>
              Start focused.<br />
              Grow with a system built for your workflow.
            </h2>
          </div>
        </div>

        <div className="hub-pricing-grid">
          {plans.map((plan) => (
            <article className="hub-plan" key={plan.name}>
              <div className="hub-plan-head">
                <p>{plan.name}</p>
              </div>
              <h3>{plan.summary}</h3>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="/contact" className="hub-button hub-button-full">Let&apos;s talk</a>
            </article>
          ))}
        </div>
      </section>

      <section className="hub-resource hub-container">
        <div>
          <p className="hub-eyebrow">THE MISSED-CALL PLAYBOOK</p>
          <h2>
            Before you automate,<br />
            know where leads get lost.
          </h2>
          <p>
            A practical guide to call handling, website conversion, and follow-up so your next inquiry has a clearer path.
          </p>
          <a href="/resources/missed-call-follow-up" className="hub-secondary">Read the guide</a>
        </div>
      </section>

      <section className="hub-section hub-container hub-faq">
        <div>
          <p className="hub-eyebrow">A FEW THINGS TO KNOW</p>
          <h2>
            Good questions.<br />
            Clear answers.
          </h2>
          <a className="hub-secondary" href="/contact">Let&apos;s talk</a>
        </div>

        <div className="hub-faq-list">
          {faqs.map(([question, answer]) => (
            <div className="hub-faq-item" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hub-closing">
        <div className="hub-container">
          <p className="hub-eyebrow">MAKE THE NEXT CONVERSATION COUNT</p>
          <h2>
            Let&apos;s find your<br />
            <em>missed opportunities.</em>
          </h2>
          <p>Start with a practical conversation about your current workflow and where AI can help.</p>
          <a href="/contact" className="hub-button">Let&apos;s talk</a>
        </div>
      </section>
    </div>
  );
}
