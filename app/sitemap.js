import { SITE_URL, projects, services } from "./lib/site";
export default function sitemap() {
  return [
    "",
    "/website-redesign",
    "/ai-automations",
    "/work",
    ...projects.map((x) => "/work/" + x.slug),
    "/pricing",
    "/about",
    "/contact",
    "/resources",
    "/resources/missed-call-follow-up",
    ...services.map((x) => "/services/" + x.slug),
  ].map((path) => ({ url: SITE_URL + path }));
}
