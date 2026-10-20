import { pageMetadata } from "../lib/site";
import {
  PageIntro,
  Button,
  Flow,
  ServiceGrid,
  SectionHead,
  CTA,
  FAQ,
  Label,
  Checklist,
  ServiceSchema,
} from "../components/SiteUI";
export const metadata = pageMetadata(
  "AI Automation for Local Service Businesses",
  "Connect AI call answering, website chat, missed-call text-back, lead follow-up, booking, and CRM workflows. Start with a practical business audit.",
  "/ai-automations",
);
export default function Automations() {
  return (
    <>
      <ServiceSchema
        name="AI lead-response automation"
        path="/ai-automations"
        description="Configured AI call answering, website chat, lead follow-up, booking, and compatible CRM workflows."
      />
      <PageIntro
        kicker="A SMARTER RESPONSE, NOT MORE BUSYWORK"
        title={
          <>
            You’re busy doing the work.
            <br />
            <span>Keep the conversation moving.</span>
          </>
        }
        text="Add useful automations around your real customer journey. Answer routine questions, capture inquiries, and bring a person in when it matters."
      >
        <Button href="/contact?plan=Audit">Find my starting point</Button>
        <Button href="/pricing" secondary>
          Compare AI plans
        </Button>
      </PageIntro>
      <section className="wrap section no-top">
        <SectionHead
          kicker="CHOOSE THE GAP YOU WANT TO CLOSE"
          title="One connection at a time."
          text="Start focused. Your audit confirms supported tools, permissions, usage, and the human handoff before anything goes live."
        />
        <ServiceGrid />
      </section>
      <section className="wrap section two-col">
        <div>
          <Label>PEOPLE STILL RUN YOUR BUSINESS</Label>
          <h2>
            Automate the routine.
            <br />
            Keep the judgment human.
          </h2>
          <p>
            AI is a useful assistant, not a promise that nothing can go wrong.
            We agree what it may say, what it must not promise, and when your
            team takes over.
          </p>
          <Checklist
            items={[
              "Approved business information",
              "Clear customer consent and opt-outs",
              "Tested escalation and stop conditions",
              "No invented prices, policies, or availability",
            ]}
          />
        </div>
        <Flow />
      </section>
      <FAQ />
      <CTA
        title={
          <>
            Find the friction.
            <br />
            Connect what helps.
          </>
        }
        text="Tell us where inquiries get stuck. We’ll recommend a useful starting point—not a stack of tools you don’t need."
      />
    </>
  );
}
