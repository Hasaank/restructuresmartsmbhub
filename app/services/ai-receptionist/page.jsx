import { services, pageMetadata } from "../../lib/site";
import { ServiceDetail, ServiceSchema } from "../../components/SiteUI";
const service = services.find((x) => x.slug === "ai-receptionist");
export const metadata = pageMetadata(
  `${service.name} for Small Businesses`,
  service.desc,
  "/services/ai-receptionist",
);
export default function Service() {
  return (
    <>
      <ServiceSchema
        name={service.name}
        description={service.desc}
        path="/services/ai-receptionist"
      />
      <ServiceDetail service={service} />
    </>
  );
}
