import { notFound } from "next/navigation";
import { services, pageMetadata } from "../../lib/site";
import { ServiceDetail, ServiceSchema } from "../../components/SiteUI";
export function generateStaticParams() {
  return services
    .filter(
      (x) =>
        !["ai-receptionist", "website-chatbot", "lead-follow-up"].includes(
          x.slug,
        ),
    )
    .map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s
    ? pageMetadata(
        `${s.name} for Small Businesses`,
        s.desc,
        `/services/${slug}`,
      )
    : { title: "Service not found", robots: { index: false } };
}
export default async function Service({ params }) {
  const { slug } = await params;
  const service = services.find((x) => x.slug === slug);
  if (!service) notFound();
  return (
    <>
      <ServiceSchema
        name={service.name}
        description={service.desc}
        path={`/services/${slug}`}
      />
      <ServiceDetail service={service} />
    </>
  );
}
