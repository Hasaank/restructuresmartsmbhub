export const products = [
  {
    "id": "prompt-diary",
    "title": "30-Day AI Prompt Diary",
    "category": "Prompts",
    "price": 19,
    "format": "PDF · DOCX · XLSX · CSV",
    "summary": "Thirty practical business prompts, a daily review habit, and an editable tracker for the work worth keeping.",
    "includes": [
      "30 distinct copy-ready prompts",
      "A quality check for every prompt",
      "Editable diary and rating tracker",
      "Word, Markdown and CSV editions"
    ],
    "audience": "Business owners who want repeatable prompts rather than scattered chat history.",
    "limit": "Not an AI app, subscription, or done-for-you service.",
    "sample": "/samples/prompt-diary-sample.pdf",
    "env": "PAYMENT_LINK_PROMPT_DIARY",
    "cover": "A better prompt. Every day."
  },
  {
    "id": "ai-foundations",
    "title": "AI Foundations for Small Business",
    "category": "Learning",
    "price": 29,
    "format": "PDF · DOCX · XLSX",
    "summary": "Eight self-paced lessons, worked examples, and a practical plan for your first small business AI experiment.",
    "includes": [
      "8 lessons with practice and answer checks",
      "Prompting, verification and privacy basics",
      "Tool-comparison and pilot worksheets",
      "Five-case testing log"
    ],
    "audience": "AI beginners who prefer a useful workbook to hype.",
    "limit": "Not video training, an accredited qualification, or professional advice.",
    "sample": "/samples/ai-foundations-sample.pdf",
    "env": "PAYMENT_LINK_AI_FOUNDATIONS",
    "cover": "Make AI make sense."
  },
  {
    "id": "make-kit",
    "title": "Make Automation Starter Kit",
    "category": "Automation",
    "price": 39,
    "format": "2 JSON BLUEPRINTS · GUIDE · TEST CSV",
    "summary": "Editable lead-reply and content-brief prompt builders, with an import guide, test matrix, and extension recipes.",
    "includes": [
      "Lead-reply prompt-builder blueprint",
      "Content-brief prompt-builder blueprint",
      "Import and troubleshooting guide",
      "Test matrix and delivery-workflow recipe"
    ],
    "audience": "DIY builders who can import and test a Make scenario.",
    "limit": "These templates compose prompts; they do not call AI, send replies, log leads, or fulfill orders. Setup and testing are required.",
    "sample": "/samples/make-kit-sample.pdf",
    "env": "PAYMENT_LINK_MAKE_KIT",
    "cover": "Input. Structure. Review."
  },
  {
    "id": "business-ai-bundle",
    "title": "Business AI Starter Bundle",
    "category": "Bundle",
    "price": 69,
    "format": "ALL THREE PRODUCT PACKS",
    "summary": "Learn the basics, practice with a diary, and adapt Make starters. The same three packs together, not a subscription.",
    "includes": [
      "Complete 30-Day AI Prompt Diary",
      "Complete AI Foundations workbook",
      "Complete Make Automation Starter Kit",
      "Editable source formats included"
    ],
    "audience": "Business owners who want a learning path plus reusable resources.",
    "limit": "No installed automation, API credits, third-party subscriptions or implementation service.",
    "sample": "/samples/ai-foundations-sample.pdf",
    "env": "PAYMENT_LINK_AI_BUNDLE",
    "cover": "Your practical AI toolkit."
  }
];
export function safeCheckoutUrl(value){try{const u=new URL(value||'');const hosts=['buy.stripe.com','checkout.stripe.com','gumroad.com','lemonsqueezy.com','payhip.com'];if(u.protocol!=='https:'||u.username||u.password||!hosts.some(h=>u.hostname===h||u.hostname.endsWith('.'+h)))return null;return u.href;}catch{return null;}}
export function checkoutFor(product){return process.env.DIGITAL_STORE_LIVE==='true'?safeCheckoutUrl(process.env[product.env]):null;}
