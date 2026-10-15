import {SITE_URL} from "./lib/site";
export default function sitemap(){return ['','/products','/contact','/services/ai-receptionist','/services/website-chatbot','/services/lead-follow-up','/resources/missed-call-follow-up','/privacy','/terms'].map(path=>({url:`${SITE_URL}${path}`}));}
