import "./globals.css";
import "./marketing.css";
import ClientLayout from "./ClientLayout";
import { SITE_URL, description } from "./lib/site";
const noindex =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_NOINDEX === "true";
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Website Redesign & AI Automation | SmartSMBHub",
    template: "%s | SmartSMBHub",
  },
  description,
  robots: noindex ? { index: false, follow: false } : undefined,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SmartSMBHub",
    title: "Website Redesign & AI Automation | SmartSMBHub",
    description,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: { icon: "/brand-icon.svg" },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
