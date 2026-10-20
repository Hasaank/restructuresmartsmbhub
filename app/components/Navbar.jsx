"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, []);
  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/onboarding") ||
    pathname.startsWith("/auth/")
  )
    return null;
  const links = [
    ["Website redesign", "/website-redesign"],
    ["AI automations", "/ai-automations"],
    ["Our work", "/work"],
    ["Pricing", "/pricing"],
  ];
  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Main navigation">
        <Link href="/" className="brand" aria-label="Smart SMB Hub home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>
            smart<span className="brand-heavy">SMB</span>hub
            <span className="brand-dot">.</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          id="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`} id="main-menu">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname.startsWith(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="button nav-cta"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={17} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
