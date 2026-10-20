import { pageMetadata } from "../lib/site";
import { PageIntro, WorkGrid, CTA } from "../components/SiteUI";
export const metadata = pageMetadata(
  "Website Design Concepts & Workflow Examples",
  "Explore illustrative website redesign and lead-response concepts for home services, landscaping, and wellness. Fictional examples, not client case studies.",
  "/work",
);
export default function Work() {
  return (
    <>
      <PageIntro
        kicker="THE CONCEPT SHOWCASE"
        title={
          <>
            See the direction.
            <br />
            <span>Understand the thinking.</span>
          </>
        }
        text="Three different service businesses. Three clearer paths to inquiry. Explore the design choices and the optional systems that could support them."
      />
      <section className="wrap section no-top">
        <div className="notice concept-notice">
          <span className="concept-tag">Concepts, not client results</span>
          <p>
            Every business in this showcase is fictional. These examples
            demonstrate our proposed approach. They are not completed client
            engagements, endorsements, or evidence of business performance.
          </p>
        </div>
        <WorkGrid />
      </section>
      <CTA />
    </>
  );
}
