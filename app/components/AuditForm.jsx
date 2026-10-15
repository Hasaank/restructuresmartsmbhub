"use client";
import {useState} from "react";
export default function AuditForm(){
 const [status,setStatus]=useState('idle');const [error,setError]=useState('');
 async function submit(e){e.preventDefault();setStatus('sending');setError('');const form=e.currentTarget;const data=Object.fromEntries(new FormData(form));data.consent=data.consent==='on';data.plan=new URLSearchParams(window.location.search).get('plan')||'Audit';
 try{const response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});const result=await response.json();if(!response.ok)throw new Error(result.message||'Your request could not be sent. Please try again.');setStatus('success');}catch(err){setError(err.message);setStatus('error');}}
 if(status==='success')return <div className="hub-form-success" role="status"><span aria-hidden="true">✓</span><h2>Your request was sent.</h2><p>Thank you. We will review your business details and follow up by email to discuss the audit.</p><a className="hub-secondary" href="/">Back to SmartSMBHub ↗</a></div>;
 return <form className="hub-audit-form" onSubmit={submit}>
 <div className="hub-form-row"><label htmlFor="audit-name">Your name<input id="audit-name" name="name" autoComplete="name" maxLength={100} required/></label><label htmlFor="audit-business">Business name<input id="audit-business" name="businessName" autoComplete="organization" maxLength={150} required/></label></div>
 <label htmlFor="audit-email">Work email<input id="audit-email" name="email" type="email" autoComplete="email" maxLength={254} required/></label>
 <div className="hub-form-row"><label htmlFor="audit-website">Website <span>(optional)</span><input id="audit-website" name="website" type="url" placeholder="https://yourbusiness.com" maxLength={500}/></label><label htmlFor="audit-industry">Industry<select id="audit-industry" name="businessType" required defaultValue=""><option value="" disabled>Select your industry</option>{['Home services','Salon / wellness','Driving school','Real estate','Professional services','Other'].map(x=><option key={x}>{x}</option>)}</select></label></div>
 <label htmlFor="audit-message">Where do inquiries get stuck?<textarea id="audit-message" name="message" rows={4} maxLength={4000} placeholder="Missed calls, slow follow-up, booking, or something else?" required/></label>
 <div className="hub-honeypot" aria-hidden="true"><label htmlFor="audit-company-url">Leave this empty<input id="audit-company-url" name="companyUrl" tabIndex={-1} autoComplete="off"/></label></div>
 <label className="hub-consent"><input name="consent" type="checkbox" required/><span>I agree to be contacted about this request and have read the <a href="/privacy">privacy policy</a>. This is not consent to automated marketing texts.</span></label>
 {error&&<p className="hub-error" role="alert">{error}</p>}
 <button className="hub-button" disabled={status==='sending'} type="submit">{status==='sending'?'Sending your request…':'Request my free AI audit ↗'}</button>
 <p className="hub-micro">No purchase required. Please do not include sensitive customer information.</p>
 </form>;
}
