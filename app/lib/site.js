export const SITE_URL = "https://smartsmbhub.com";
export const description = "AI lead-response services plus practical digital products: a prompt diary, beginner AI workbook, and Make automation starters. Explore services or learn and build yourself.";
export const plans = [
  {name:"Basic", price:null, summary:"Answer missed and after-hours calls clearly and professionally.", features:["AI answering for missed and after-hours calls", "Automatic text-back", "Calendar booking", "Weekly performance summary"]},
  {name:"Pro", price:null, summary:"Keep the conversation moving across channels.", features:["Everything in Basic", "Website chatbot", "SMS and email lead follow-up", "CRM logging and owner alerts"]},
  {name:"Custom", price:null, summary:"A tailored setup for a more complex operation.", features:["Multi-location and high-call-volume planning", "Dedicated onboarding and custom scripts", "AI search visibility and workflow automation"]}
];
export const faqs = [
  ["What does SmartSMBHub do?", "SmartSMBHub helps businesses respond to inquiries through AI call answering, website chat, and automated follow-up. The system is configured around your business information and workflows."],
  ["What is included in the free AI audit?", "The audit reviews how your business handles calls, website inquiries, follow-up, and booking. It identifies potential gaps and recommends a practical setup plan."],
  ["How much does it cost?", "Pricing is tailored to your needs. Book a conversation and we’ll recommend the best setup for your workflow."],
  ["Will this replace my team?", "The system is designed to support your team by handling routine inquiries and follow-up. Escalation rules and human handoffs should be agreed during onboarding."],
  ["Can you connect my calendar or CRM?", "Calendar booking and CRM logging are available according to your setup. Compatibility depends on your existing tools; confirm the required connections during onboarding."],
  ["Can you guarantee more leads or Google rankings?", "No. Results depend on demand, your offer, configuration, and follow-through. AI search visibility work can improve how your information is presented online, but outcomes vary."],
];
export function pageMetadata(title, desc, path) {
  return {title, description:desc, alternates:{canonical:path}, openGraph:{title, description:desc, url:path, images:[{url:'/og-image.png',width:1200,height:630,alt:'SmartSMBHub — AI lead response and customer follow-up'}]}, twitter:{card:'summary_large_image',images:['/og-image.png']}};
}
