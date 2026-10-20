import { services, pageMetadata } from "../../lib/site";
import { ServiceDetail, ServiceSchema } from "../../components/SiteUI";
const service = services.find((x) => x.slug === "website-chatbot");
export const metadata = pageMetadata(
  `${service.name} for Small Businesses`,
  service.desc,
  "/services/website-chatbot",
);
export default function Service() {
  return (
    <>
      <ServiceSchema
        name={service.name}
        description={service.desc}
        path="/services/website-chatbot"
      />
      <ServiceDetail service={service} />
    </>
  );
}
