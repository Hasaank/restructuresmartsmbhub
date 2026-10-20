import { services, pageMetadata } from "../../lib/site";
import { ServiceDetail, ServiceSchema } from "../../components/SiteUI";
const service = services.find((x) => x.slug === "lead-follow-up");
export const metadata = pageMetadata(
  `${service.name} for Small Businesses`,
  service.desc,
  "/services/lead-follow-up",
);
export default function Service() {
  return (
    <>
      <ServiceSchema
        name={service.name}
        description={service.desc}
        path="/services/lead-follow-up"
      />
      <ServiceDetail service={service} />
    </>
  );
}
