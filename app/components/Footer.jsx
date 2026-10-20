"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  const path = usePathname();
  if (["/dashboard", "/onboarding", "/auth/"].some((x) => path.startsWith(x)))
    return null;
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-intro">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>
              smart<b>SMB</b>hub<span className="brand-dot">.</span>
            </span>
          </Link>
          <p>
            Better websites.
            <br />
            Smarter follow-up.
            <br />
            Built around your business.
          </p>
          <Link href="/contact" className="text-link">
            Start a conversation <ArrowUpRight size={17} />
          </Link>
        </div>
        <div>
          <h2>Build your foundation</h2>
          <Link href="/website-redesign">Website redesign</Link>
          <Link href="/work">Concept showcase</Link>
          <Link href="/pricing">Plans & project pricing</Link>
          <Link href="/contact">Free website audit</Link>
        </div>
        <div>
          <h2>Connect your response</h2>
          <Link href="/services/ai-receptionist">AI receptionist</Link>
          <Link href="/services/website-chatbot">Website chat</Link>
          <Link href="/services/lead-follow-up">Lead follow-up</Link>
          <Link href="/ai-automations">All automations</Link>
        </div>
        <div>
          <h2>Get to know us</h2>
          <Link href="/about">About SmartSMBHub</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of service</Link>
          <Link href="/auth/login">Client sign in</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} SmartSMBHub</span>
        <span>Website first. Automation when it makes sense.</span>
      </div>
    </footer>
  );
}
