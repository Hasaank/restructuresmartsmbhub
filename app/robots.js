import { SITE_URL } from "./lib/site";
export default function robots() {
  const preview =
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_NOINDEX === "true";
  return {
    rules: preview
      ? { userAgent: "*", disallow: "/" }
      : {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/dashboard", "/onboarding", "/auth/"],
        },
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
