"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";
export default function AuditForm({ configured = false }) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [plan, setPlan] = useState("Audit");
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("plan");
    if (["Website", "Basic", "Pro", "Custom", "Audit"].includes(p)) setPlan(p);
  }, []);
  async function submit(e) {
    e.preventDefault();
    if (!configured) return;
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    data.consent = data.consent === "on";
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.message || "Your request could not be sent. Please try again.",
        );
      setStatus("success");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }
  if (status === "success")
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={40} />
        <h3>Your request is on its way.</h3>
        <p>
          Thank you. We’ll review your details and follow up by email. No
          purchase or subscription has been started.
        </p>
        <a className="text-link" href="/">
          Back to the website <ArrowUpRight size={18} />
        </a>
      </div>
    );
  return (
    <form className="audit-form" onSubmit={submit}>
      {!configured && (
        <div className="form-unavailable" role="status">
          <AlertCircle size={18} />
          <p>
            Online requests are not connected yet. This form will be available
            once email delivery is configured. No information will be sent.
          </p>
        </div>
      )}
      <div className="form-row">
        <label htmlFor="audit-name">
          Your name
          <input
            id="audit-name"
            name="name"
            autoComplete="name"
            maxLength={100}
            required
            placeholder="Your full name"
          />
        </label>
        <label htmlFor="audit-business">
          Business name
          <input
            id="audit-business"
            name="businessName"
            autoComplete="organization"
            maxLength={150}
            required
            placeholder="Your business"
          />
        </label>
      </div>
      <label htmlFor="audit-email">
        Work email
        <input
          id="audit-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          placeholder="you@yourbusiness.com"
        />
      </label>
      <label htmlFor="audit-website">
        Website <span>(optional)</span>
        <input
          id="audit-website"
          name="website"
          type="url"
          maxLength={500}
          placeholder="https://yourbusiness.com"
        />
      </label>
      <div className="form-row">
        <label htmlFor="audit-industry">
          Industry
          <select
            id="audit-industry"
            name="businessType"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select your industry
            </option>
            {[
              "Home services",
              "Landscaping",
              "Salon / wellness",
              "Driving school",
              "Real estate",
              "Professional services",
              "Other",
            ].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label htmlFor="audit-interest">
          Interested in
          <select
            id="audit-interest"
            name="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="Audit">Help choosing</option>
            <option value="Website">Website redesign</option>
            <option value="Basic">AI Basic</option>
            <option value="Pro">AI Pro</option>
            <option value="Custom">Custom setup</option>
          </select>
        </label>
      </div>
      <label htmlFor="audit-message">
        What would you like to improve?
        <textarea
          id="audit-message"
          name="message"
          rows={4}
          maxLength={4000}
          placeholder="Your website, missed inquiries, follow-up, booking—or something else?"
          required
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="audit-company-url">
          Leave this empty
          <input
            id="audit-company-url"
            name="companyUrl"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      <label className="consent">
        <input name="consent" type="checkbox" required />
        <span>
          I agree to be contacted about this request and have read the{" "}
          <a href="/privacy">privacy policy</a>. This is not consent to
          automated marketing texts.
        </span>
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <button
        className="button"
        disabled={!configured || status === "sending"}
        type="submit"
      >
        {status === "sending"
          ? "Sending your request…"
          : "Request my free audit"}
        <ArrowUpRight size={18} />
      </button>
      <p className="small">
        Please do not include sensitive customer information.
      </p>
    </form>
  );
}
