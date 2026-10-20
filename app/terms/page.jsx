import Link from "next/link";
import { pageMetadata } from "../lib/site";
import { Label } from "../components/SiteUI";
export const metadata = {
  ...pageMetadata(
    "Website & service terms",
    "Information about inquiries, project scope, and optional services.",
    "/terms",
  ),
  robots: { index: false, follow: true },
};
const sections = [
  [
    "Scope and acceptance",
    "These draft terms cover use of the SmartSMBHub marketing website. A separately accepted written proposal or service agreement governs any paid project or ongoing service. The final website operator and applicable jurisdiction must be confirmed before launch.",
  ],
  [
    "Information and inquiries",
    "This website describes website redesign and optional AI lead-response services. Submitting an audit request is an inquiry only: it does not buy a service, create a subscription, confirm a project, or authorize a charge.",
  ],
  [
    "Project scope and pricing",
    "Website redesign is quoted after requirements are reviewed. Listed AI Basic and Pro monthly prices describe starting service offers, not a complete quotation. Setup, usage, phone or messaging fees, third-party costs, integrations, payment timing, and taxes must be confirmed in writing before purchase.",
  ],
  [
    "Ownership, hosting, and support",
    "The written proposal must specify deliverables, access, ownership or licensing, hosting, revisions, content responsibilities, launch criteria, support, and ongoing care. Do not assume these are included simply because a feature appears on the website.",
  ],
  [
    "Cancellation and payment",
    "Payment schedules, renewals, cancellation, refunds, and handover arrangements are determined by the agreement accepted for the relevant service and applicable law. This website does not take payments or automatically start a subscription.",
  ],
  [
    "AI and integration limitations",
    "AI may misunderstand questions or produce inaccurate information. Appropriate human supervision, fallback procedures, and testing are necessary. Supported connections depend on the tools and permissions agreed during scoping. AI services are not emergency services or a substitute for licensed professional advice.",
  ],
  [
    "Messaging and responsible use",
    "Consent, sender identification, opt-outs, call recording, and other communications requirements must be reviewed before any related service is enabled. Do not use website forms or connected tools to send spam, submit unlawful content, or disclose information you are not authorized to share.",
  ],
  [
    "Concept showcase and results",
    "Businesses shown in the concept showcase are fictional. Their names, designs, scenarios, and measurement plans illustrate a proposed approach. They are not client endorsements, completed client work, or measured performance. Search rankings, leads, bookings, and revenue are not guaranteed.",
  ],
  [
    "Website content and links",
    "Website information may change. Third-party links are provided for convenience and are governed by the relevant provider\u2019s terms. Rights in photography, software, and other licensed materials remain subject to their applicable licenses.",
  ],
  [
    "Questions and final review",
    "Contact SmartSMBHub through the contact page with questions. Before paid work begins, obtain the final proposal and terms. The owner must have these draft terms reviewed for the actual business, operating location, consumer rights, and services before publication as final.",
  ],
];
export default function Legal() {
  return (
    <article className="wrap legal-page">
      <Label>SMARTSMBHUB / LEGAL</Label>
      <h1>Website & service terms</h1>
      <p className="lead">
        Information about inquiries, project scope, and optional services.
      </p>
      <div className="notice concept-notice">
        <span className="concept-tag">Owner review required</span>
        <p>
          This is a review-ready draft, not legal advice. Confirm the business
          details and actual practices before publishing it as a final policy.
        </p>
      </div>
      {sections.map(([heading, text]) => (
        <section key={heading}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </section>
      ))}
      <div className="legal-links">
        <Link href="/contact">Contact SmartSMBHub ↗</Link>
        <Link href="/privacy">Privacy policy ↗</Link>
      </div>
    </article>
  );
}
