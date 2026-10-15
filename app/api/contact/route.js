import {NextResponse} from "next/server";
import {validateContact} from "@/lib/contact-validation";
export const runtime='nodejs';
// Best-effort per-instance limit only. Configure Vercel WAF/rate limiting before public launch.
const buckets=new Map();
export async function POST(request){
 const origin=request.headers.get('origin');const expected=new URL(request.url).origin;
 if(!origin||![expected,'https://smartsmbhub.com','https://www.smartsmbhub.com'].includes(origin))return NextResponse.json({message:'This request is not allowed.'},{status:403});
 if(!request.headers.get('content-type')?.startsWith('application/json'))return NextResponse.json({message:'Expected a JSON form submission.'},{status:415});
 if(Number(request.headers.get('content-length'))>16384)return NextResponse.json({message:'Your request is too large.'},{status:413});
 try{
 const text=await request.text();if(new TextEncoder().encode(text).length>16384)return NextResponse.json({message:'Your request is too large.'},{status:413});
 let raw;try{raw=JSON.parse(text);}catch{return NextResponse.json({message:'Please send a valid form.'},{status:400});}
 const result=validateContact(raw);if(result.error)return NextResponse.json({message:result.error},{status:400});
 const key=request.headers.get('x-vercel-forwarded-for')||request.headers.get('x-forwarded-for')||'unknown';const now=Date.now();
 if(buckets.size>10000)buckets.clear();let entry=buckets.get(key);if(!entry||now-entry.start>60000)entry={start:now,count:0};entry.count++;buckets.set(key,entry);
 if(entry.count>5)return NextResponse.json({message:'Too many requests. Please wait a minute and try again.'},{status:429,headers:{'Retry-After':'60'}});
 if(!process.env.RESEND_API_KEY||!process.env.CONTACT_EMAIL||!process.env.CONTACT_FROM_EMAIL)return NextResponse.json({message:'The email form is not configured yet. Please try again later.'},{status:503});
 const d=result.data;const content=`Free AI audit request\n\nName: ${d.name}\nBusiness: ${d.businessName}\nIndustry: ${d.businessType}\nEmail: ${d.email}\nWebsite: ${d.website||'Not provided'}\nPlan interest: ${d.plan}\n\n${d.message}\n\nConsent to follow up about this request: yes. No marketing SMS consent collected.`;
 const response=await fetch('https:' + '//api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer ' + process.env.RESEND_API_KEY,'Content-Type':'application/json'},body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL,to:[process.env.CONTACT_EMAIL],reply_to:d.email,subject:`SmartSMBHub audit request (${d.plan})`,text:content}),signal:AbortSignal.timeout(10000)});
 const sent=await response.json();if(!response.ok||!sent.id)return NextResponse.json({message:'Your request could not be sent. Please try again later.'},{status:502});
 return NextResponse.json({message:'Request sent.'},{status:200});
 }catch{return NextResponse.json({message:'Your request could not be sent. Please try again later.'},{status:500});}
}
