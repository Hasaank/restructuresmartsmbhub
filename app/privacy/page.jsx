import Link from "next/link";
import { pageMetadata } from "../lib/site";
import { Label } from "../components/SiteUI";
export const metadata = {
  ...pageMetadata(
    "Privacy policy",
    "How this website handles inquiry information.",
    "/privacy",
  ),
  robots: { index: false, follow: true },
};
const sections = [
  [
    "Scope of this notice",
    "This draft covers the SmartSMBHub marketing website and its inquiry form. Client software, connected AI tools, and any separately contracted services may require additional privacy information and agreements.",
  ],
  [
    "Information you choose to share",
    "The audit form asks for your name, business name, work email, industry, interest, and message. A website URL is optional. Do not submit sensitive customer information, passwords, health information, or payment details.",
  ],
  [
    "How inquiry information is used",
    "Information submitted through the form is used to respond to the request, assess fit, and discuss a possible project or service. Agreeing to contact about an inquiry is not consent to automated marketing texts.",
  ],
  [
    "Delivery and hosting providers",
    "The site is hosted on Vercel. When email delivery is configured, the inquiry form sends the submitted details through Resend to the business recipient. If a Notion form is configured instead, that form collects the submission under its applicable terms. The final notice must identify the providers actually enabled.",
  ],
  [
    "Storage and retention",
    "Inquiry emails and any records created to manage the request may be retained for the response and subsequent business relationship, subject to applicable legal obligations. The business must confirm its retention and deletion procedures before publishing this notice as final.",
  ],
  [
    "Cookies and analytics",
    "No advertising or analytics tracker has been added as part of this website redesign. Hosting services may process technical request information. Existing client sign-in features may use browser storage for authentication; those account features require their own review. Additional trackers should be disclosed before activation.",
  ],
  [
    "Your choices",
    "Do not submit the form if you do not want the information sent for responding to your request. You may request access, correction, or deletion through the contact page. Applicable privacy rights depend on your location and circumstances.",
  ],
  [
    "Security and third-party links",
    "Reasonable safeguards should be used to protect information, but no internet service is perfectly secure. Other websites and scheduling tools have their own privacy practices. Review their notices before sharing information.",
  ],
  [
    "Questions and changes",
    "Use the contact page for questions about this notice. Before launch, the website owner must confirm the legal business name, a reachable privacy contact, enabled providers, retention rules, and any location-specific requirements.",
  ],
];
export default function Legal() {
  return (
    <article className="wrap legal-page">
      <Label>SMARTSMBHUB / LEGAL</Label>
      <h1>Privacy policy</h1>
      <p className="lead">How this website handles inquiry information.</p>
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
        <Link href="/terms">Terms of service ↗</Link>
      </div>
    </article>
  );
}
