import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, pageMetadata } from "../../lib/site";
import {
  Mockup,
  Label,
  Checklist,
  CTA,
  SectionHead,
} from "../../components/SiteUI";
export function generateStaticParams() {
  return projects.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((x) => x.slug === slug);
  return project
    ? pageMetadata(
        `${project.name}: Illustrative Website Concept`,
        project.short + " Fictional business example, not a client result.",
        `/work/${slug}`,
      )
    : { title: "Concept not found", robots: { index: false } };
}
export default async function Project({ params }) {
  const { slug } = await params;
  const project = projects.find((x) => x.slug === slug);
  if (!project) notFound();
  return (
    <>
      <section className="wrap case-intro">
        <Link href="/work" className="text-link">
          <ArrowLeft size={17} /> Back to the showcase
        </Link>
        <Label>{project.category.toUpperCase()} / DESIGN CONCEPT</Label>
        <h1>{project.name}</h1>
        <p className="lead">{project.short}</p>
        <div className="notice concept-notice">
          <span className="concept-tag">Illustrative concept</span>
          <p>
            Fictional business. Proposed design and workflow only. No client
            relationship, implementation, or measured result is claimed.
          </p>
        </div>
        <Mockup project={project} large />
      </section>
      <section className="wrap section two-col">
        <div>
          <Label>THE SCENARIO</Label>
          <h2>
            A common problem.
            <br />A more useful journey.
          </h2>
          <p>{project.challenge}</p>
        </div>
        <div className="panel">
          <h3>The design approach</h3>
          <Checklist items={project.approach} />
        </div>
      </section>
      <section className="wrap section two-col">
        <div>
          <Label>THE OPTIONAL NEXT LAYER</Label>
          <h2>Connect the response.</h2>
          <p>{project.automation}</p>
          <Link className="text-link" href="/ai-automations">
            Explore the automation options <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="panel">
          <span className="concept-tag">Measurement plan · not results</span>
          <h3>What we would track</h3>
          <Checklist items={project.measure} />
          <p className="small">
            These are proposed measurements. No performance data has been
            collected for this concept.
          </p>
        </div>
      </section>
      <CTA
        title={
          <>
            Like the direction?
            <br />
            Let’s make it yours.
          </>
        }
      />
    </>
  );
}
