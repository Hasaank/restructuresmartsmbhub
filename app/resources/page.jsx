import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { pageMetadata } from "../lib/site";
import { PageIntro, CTA, Label } from "../components/SiteUI";
export const metadata = pageMetadata(
  "Small Business Website & Lead-Response Resources",
  "Practical guidance for clearer websites, missed-call response, lead follow-up, and useful automation for small businesses.",
  "/resources",
);
export default function Resources() {
  return (
    <>
      <PageIntro
        kicker="PRACTICAL BEFORE TECHNICAL"
        title={
          <>
            Understand the gap.
            <br />
            <span>Then choose the tool.</span>
          </>
        }
        text="Straightforward guidance for the moments between someone finding your business and your team taking the conversation forward."
      />
      <section className="wrap section no-top">
        <Link
          href="/resources/missed-call-follow-up"
          className="resource-feature"
        >
          <div className="resource-art">
            <BookOpen size={64} />
            <span>
              THE MISSED-CALL
              <br />
              PLAYBOOK
            </span>
          </div>
          <div>
            <Label>GUIDE / LEAD RESPONSE</Label>
            <h2>
              Before you automate,
              <br />
              know where leads get lost.
            </h2>
            <p>
              Map your missed-call journey, write a useful text-back, plan a
              human handoff, and decide what to measure.
            </p>
            <span className="text-link">
              Read the guide <ArrowUpRight size={18} />
            </span>
          </div>
        </Link>
      </section>
      <CTA />
    </>
  );
}
