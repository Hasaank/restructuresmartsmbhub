import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { plans, pageMetadata } from "../lib/site";
import {
  PageIntro,
  Button,
  Label,
  Checklist,
  FAQ,
  CTA,
} from "../components/SiteUI";
export const metadata = pageMetadata(
  "Website Redesign Pricing & AI Service Plans",
  "Website redesign is scoped and quoted per project. Optional AI Basic starts at $97/month and Pro at $197/month. Compare inclusions and request an audit.",
  "/pricing",
);
export default function Pricing() {
  return (
    <>
      <PageIntro
        kicker="START FOCUSED. BUILD FROM THERE."
        title={
          <>
            The right foundation.
            <br />
            <span>The right amount of smart.</span>
          </>
        }
        text="A website project and an AI service plan are separate decisions. Start with either. Connect them when it makes sense."
      />
      <section className="wrap section no-top">
        <div className="pricing-grid">
          <article className="price-card website-price">
            <Label>YOUR FOUNDATION</Label>
            <h2>Website redesign</h2>
            <p>A clearer online home for your business.</p>
            <div className="price">Project quote</div>
            <p className="price-caption">Scope agreed before work begins</p>
            <Button href="/contact?plan=Website">
              Get my website estimate
            </Button>
            <Checklist
              items={[
                "Agreed page structure & design",
                "Mobile-first customer journey",
                "Service content & inquiry forms",
                "On-page SEO essentials",
                "Launch checks & handoff",
              ]}
            />
            <p className="small">
              Final price depends on page count, content, integrations,
              migration, and care requirements.
            </p>
          </article>
          {plans.map((plan) => (
            <article
              className={`price-card ${plan.name === "Pro" ? "recommended" : ""}`}
              key={plan.name}
            >
              <Label>
                {plan.name === "Pro"
                  ? "CONNECTED RESPONSE"
                  : "START WITH CALLS"}
              </Label>
              <h2>AI {plan.name}</h2>
              <p>{plan.summary}</p>
              <div className="price">
                <span>$</span>
                {plan.price}
                <small>/month</small>
              </div>
              <p className="price-caption">
                USD · website redesign not included
              </p>
              <Button
                href={`/contact?plan=${plan.name}`}
                secondary={plan.name !== "Pro"}
              >
                Discuss AI {plan.name}
              </Button>
              <Checklist items={plan.features} />
              <p className="small">
                Setup, usage allowances, additional charges, and compatibility
                are confirmed before purchase.
              </p>
            </article>
          ))}
        </div>
        <div className="custom-plan">
          <div>
            <Label>MORE COMPLEX NEEDS?</Label>
            <h3>Custom workflows. A properly scoped plan.</h3>
            <p>
              Multi-location setups, high call volume, or integrations beyond
              the standard scope.
            </p>
          </div>
          <Button href="/contact?plan=Custom" secondary>
            Discuss a custom setup
          </Button>
        </div>
        <div className="pricing-note">
          <p>
            <strong>No automatic checkout.</strong> An audit request does not
            purchase a project or start a subscription. Your written proposal
            confirms payment, cancellation, ownership, hosting, and support
            terms.
          </p>
          <p>
            AI provider fees, phone numbers, messaging registration, usage
            overages, and third-party subscriptions may be additional. Confirm
            all charges in your scope.
          </p>
        </div>
      </section>
      <FAQ />
      <CTA />
    </>
  );
}
