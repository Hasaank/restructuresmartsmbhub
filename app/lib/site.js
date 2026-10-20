export const SITE_URL = "https://www.smartsmbhub.com";
export const description =
  "Website redesign and AI automation for local service businesses. Build a clearer website, capture inquiries, and connect calls, chat, follow-up, and booking.";
export const plans = [
  {
    name: "Basic",
    price: "97",
    summary: "A useful next step for missed callers.",
    features: [
      "AI answering for missed and after-hours calls",
      "Automatic text-back",
      "Compatible calendar booking",
      "Weekly performance summary",
    ],
  },
  {
    name: "Pro",
    price: "197",
    summary: "Connect the conversation across channels.",
    features: [
      "Everything in Basic",
      "Website chatbot",
      "SMS and email lead follow-up",
      "CRM logging and owner alerts",
      "Appointment reminders",
    ],
  },
];
export const faqs = [
  [
    "Can I start with just a website redesign?",
    "Yes. Website redesign is a standalone project. AI answering, chat, and follow-up are optional additions, not requirements for getting a new site.",
  ],
  [
    "What is included in the free audit?",
    "We review your website’s clarity, mobile journey, inquiry capture, and follow-up process. You get a practical recommendation and a scoped estimate before deciding whether to work together. No subscription starts with an audit request.",
  ],
  [
    "How much will my website cost?",
    "Website projects are quoted after we agree page count, content, integrations, and migration needs. AI Basic starts at $97/month and Pro at $197/month, separately from the website project. Setup, allowances, and additional charges are confirmed before you start.",
  ],
  [
    "Can you work with my current tools?",
    "We check your website platform, calendar, phone setup, and CRM before recommending integrations. A connection is only included once compatibility and permissions are confirmed.",
  ],
  [
    "Do you guarantee rankings or more customers?",
    "No. We build a search-ready foundation and a clearer path to inquiry, but traffic, rankings, bookings, and revenue depend on your market, offer, and ongoing work.",
  ],
  [
    "Are the projects shown here real client case studies?",
    "The current showcase contains clearly labeled illustrative concepts for fictional businesses. They demonstrate design and workflow ideas, not completed client projects or measured business results.",
  ],
];
export function pageMetadata(title, desc, path) {
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: desc,
      url: path,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "SmartSMBHub — Website redesign + AI automation",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/og-image.png"],
    },
  };
}
export const projects = [
  {
    slug: "ridgeway-home-services",
    name: "Ridgeway Home Services",
    category: "Home services",
    image: "home",
    theme: "ridgeway",
    headline: "Good work deserves a better website.",
    short:
      "A clearer path from a homeowner’s first visit to a project inquiry.",
    challenge:
      "Imagine a home-service business whose work is strong, but whose website makes visitors hunt for services, service areas, and a way to request an estimate.",
    approach: [
      "Lead with the service and a clear estimate request.",
      "Bring project photography and service details into the first scroll.",
      "Use a short inquiry form that routes useful context to the owner.",
    ],
    automation:
      "An optional missed-call text-back could acknowledge a new inquiry and offer the project-request form, with consent rules and human handoff agreed first.",
    measure: [
      "Estimate-form completion",
      "Qualified inquiry rate",
      "Mobile click-to-call activity",
    ],
  },
  {
    slug: "fieldwork-landscaping",
    name: "Fieldwork Landscaping",
    category: "Landscaping",
    image: "garden",
    theme: "fieldwork",
    headline: "A little more life. A lot more outdoors.",
    short:
      "A photo-led concept that makes seasonal services easier to explore.",
    challenge:
      "Imagine a landscaping company offering design, maintenance, and seasonal work without a clear way for visitors to choose the right service.",
    approach: [
      "Separate ongoing care from one-time projects.",
      "Use photography to show the kind of spaces the company could work on.",
      "Ask about property needs before an estimate conversation.",
    ],
    automation:
      "A website assistant could answer approved service questions and collect property details. The team would handle pricing, availability, and final recommendations.",
    measure: [
      "Service-page engagement",
      "Completed estimate requests",
      "Time to first human response",
    ],
  },
  {
    slug: "haven-wellness",
    name: "Haven Wellness Studio",
    category: "Wellness",
    image: "wellness",
    theme: "haven",
    headline: "Make room for a quieter moment.",
    short: "A calm booking-focused concept with straightforward next steps.",
    challenge:
      "Imagine a wellness studio where new visitors have to move between several pages to understand services and find the booking link.",
    approach: [
      "Introduce the experience and explain each service plainly.",
      "Place booking next to the information visitors need to decide.",
      "Answer practical questions about arrival, rescheduling, and contacting the team.",
    ],
    automation:
      "Optional appointment reminders could help clients remember their visit. Health details should not be collected in a general-purpose website chat.",
    measure: [
      "Booking-link engagement",
      "Completed bookings in the scheduling tool",
      "Rescheduling and reminder delivery",
    ],
  },
];
export const services = [
  {
    slug: "ai-receptionist",
    icon: "Phone",
    name: "AI receptionist",
    tag: "Calls",
    intro: "A helpful first response—even when you cannot pick up.",
    desc: "AI call answering for missed and after-hours inquiries, configured around your services, opening hours, and handoff rules.",
    steps: [
      "Agree the questions your assistant can answer.",
      "Capture the caller’s inquiry and contact details.",
      "Offer a compatible booking step or route to your team.",
    ],
    includes: [
      "Business-specific call flow",
      "Approved questions and answers",
      "Missed-call and after-hours coverage",
      "Human escalation rules",
    ],
    boundary:
      "AI can misunderstand callers. Always keep a human fallback. This is not an emergency service; sensitive health, legal, or financial use requires a separate compliance review.",
    plan: "Included in Basic from $97/month. Pro adds chat and connected follow-up.",
  },
  {
    slug: "missed-call-text-back",
    icon: "MessageSquare",
    name: "Missed-call text-back",
    tag: "Response",
    intro: "Missed the call? Keep the door open.",
    desc: "Give missed callers a useful text acknowledgment and a clear way to continue the conversation when your team is unavailable.",
    steps: [
      "Identify a missed call using the agreed phone setup.",
      "Send an appropriate acknowledgment where permitted.",
      "Give the customer a reply, booking, or human-contact option.",
    ],
    includes: [
      "Business-specific response copy",
      "Compatible phone routing",
      "Clear next-step links",
      "Opt-out and escalation planning",
    ],
    boundary:
      "Availability depends on the phone provider and messaging registration. Consent, opt-outs, message purpose, and local requirements must be reviewed before activation.",
    plan: "Automatic text-back is included in Basic from $97/month. Messaging allowances and setup are confirmed before launch.",
  },
  {
    slug: "website-chatbot",
    icon: "MessagesSquare",
    name: "Website chatbot",
    tag: "Chat",
    intro: "Answer the next question. Capture the right context.",
    desc: "Help visitors understand your services, ask a question, and share the details your team needs to follow up.",
    steps: [
      "Build answers from approved business information.",
      "Collect only the details needed for the inquiry.",
      "Send the conversation to your team or a compatible booking step.",
    ],
    includes: [
      "Business-specific knowledge setup",
      "Inquiry capture",
      "Visible automated-assistant disclosure",
      "Unknown-question handoff",
    ],
    boundary:
      "The assistant should not invent prices, availability, or policies. Keep key service information in normal page content and do not collect sensitive information in an ordinary chat widget.",
    plan: "Included in Pro from $197/month, alongside call answering and lead follow-up.",
  },
  {
    slug: "lead-follow-up",
    icon: "Send",
    name: "Lead follow-up",
    tag: "Follow-up",
    intro: "A new inquiry should not become a forgotten one.",
    desc: "Connect appropriate SMS and email responses so interested customers get a clear next step and your team stays informed.",
    steps: [
      "A form, call, or chat creates a new inquiry.",
      "Send a useful response using the customer’s context.",
      "Stop or hand off the sequence when a person takes over.",
    ],
    includes: [
      "Agreed SMS and email sequences",
      "Owner notifications",
      "CRM activity logging",
      "Stop conditions and human handoff",
    ],
    boundary:
      "Marketing consent is not the same as a request for service. Keep opt-ins separate, honor opt-outs, and agree message frequency before enabling sequences.",
    plan: "Included in Pro from $197/month. Usage, provider costs, and supported connections are confirmed in your scope.",
  },
  {
    slug: "appointment-booking",
    icon: "CalendarDays",
    name: "Booking & reminders",
    tag: "Scheduling",
    intro: "Turn “I’m interested” into a clear next step.",
    desc: "Connect a compatible calendar and make appointment requests, confirmations, and reminders fit the way your business works.",
    steps: [
      "Agree working hours, buffers, and booking rules.",
      "Connect and test your supported scheduling tool.",
      "Configure confirmations and, on Pro, appointment reminders.",
    ],
    includes: [
      "Calendar compatibility review",
      "Booking-link placement",
      "Availability and rescheduling tests",
      "Reminder planning on Pro",
    ],
    boundary:
      "Calendar availability and final bookings depend on your scheduling provider. Test time zones, duplicate events, cancellation, and rescheduling before going live.",
    plan: "Compatible calendar booking is included in Basic. Appointment reminders are included in Pro.",
  },
  {
    slug: "crm-integration",
    icon: "Workflow",
    name: "CRM & workflow connections",
    tag: "Operations",
    intro: "Less copying and pasting. More useful context.",
    desc: "Route new inquiries into a compatible CRM, notify the right person, and keep a simple record of the conversation.",
    steps: [
      "Map the fields your team actually needs.",
      "Connect supported tools with appropriate permissions.",
      "Test duplicate handling, errors, and owner alerts.",
    ],
    includes: [
      "Integration compatibility check",
      "Lead-field mapping",
      "Owner alerts and activity logging",
      "Error and duplicate handling plan",
    ],
    boundary:
      "Compatibility is confirmed before purchase. Custom workflows, third-party subscriptions, and high-volume requirements are scoped separately. No integration is assumed to work without testing.",
    plan: "Supported CRM logging and owner alerts are included in Pro. More complex workflows require a custom quote.",
  },
];
