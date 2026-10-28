"use client";

import { useEffect } from "react";

export function startMotion() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  let scheduled = false;

  function update() {
    scheduled = false;
    const off =
      reduced.matches ||
      document.body.classList.contains("motion-paused") ||
      window.innerWidth < 900;

    document.querySelectorAll(".mjourney").forEach((section) => {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
      );
      section.style.setProperty("--progress", progress.toFixed(3));
      section.style.setProperty("--tint", off ? "0" : String(progress));
    });

    document.querySelectorAll(".motion-toggle").forEach((button) => {
      button.disabled = reduced.matches;
      button.textContent = reduced.matches
        ? "Reduced motion on"
        : document.body.classList.contains("motion-paused")
          ? "Resume motion"
          : "Pause motion";
    });
  }

  function queue() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  }

  function click(event) {
    if (event.target.closest(".motion-toggle")) {
      document.body.classList.toggle("motion-paused");
      update();
    }
  }

  function pointer(event) {
    if (
      reduced.matches ||
      document.body.classList.contains("motion-paused") ||
      !window.matchMedia("(pointer:fine)").matches
    ) {
      return;
    }

    const hero = document.querySelector(".mhero");
    if (hero) {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty("--mx", `${x * 24}px`);
      hero.style.setProperty("--my", `${y * 24}px`);
    }
  }

  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue);
  document.addEventListener("click", click);
  document.addEventListener("pointermove", pointer, { passive: true });

  update();

  return () => {
    window.removeEventListener("scroll", queue);
    window.removeEventListener("resize", queue);
    document.removeEventListener("click", click);
    document.removeEventListener("pointermove", pointer);
  };
}

const Wave = () => (
  <div className="mwave" aria-hidden="true">
    {Array.from({ length: 28 }, (_, index) => (
      <i
        key={index}
        style={{
          height: 8 + (index % 5) * 5,
          animationDelay: `${index * 0.06}s`,
        }}
      />
    ))}
  </div>
);

export default function MotionHero() {
  useEffect(() => startMotion(), []);

  return (
    <section className="mhero">
      <div className="mambient" aria-hidden="true" />
      <div className="hub-container mhero-grid">
        <div className="mhero-copy">
          <p className="hub-eyebrow">SMARTSMBHUB FOR SMALL BUSINESS GROWTH</p>
          <h1>Never miss another customer inquiry.</h1>
          <p className="hub-lede">
            Answer calls, chat, and follow-up with AI that feels human so your team can stay focused on real sales and service work.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a className="inline-flex items-center justify-center rounded-full bg-[#8ab4ff] px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-[#8ab4ff]/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8ab4ff]/30" href="/contact">
              Book a free AI audit
            </a>
            <a className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/10" href="/#features">
              See how it works
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-left">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <div className="text-lg font-bold text-white">24/7</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-300">coverage</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <div className="text-lg font-bold text-white">Fast</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-300">lead response</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              <div className="text-lg font-bold text-white">Simple</div>
              <div className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-300">setup</div>
            </div>
          </div>
        </div>

        <div className="mscene" aria-label="SmartSMBHub workflow preview">
          <div className="mcard-wrap">
            <article className="mcard">
              <div className="mcard-top">
                <span className="hub-tag">Live workflow</span>
                <button className="motion-toggle" type="button">
                  Pause motion
                </button>
              </div>
              <div className="mcard-body">
                <div className="mstack mstack-primary">
                  <span>Inbound call</span>
                  <strong>New lead</strong>
                </div>
                <div className="mstack mstack-secondary">
                  <span>AI answers</span>
                  <strong>Qualifies + routes</strong>
                </div>
                <div className="mstack mstack-highlight">
                  <span>Follow-up</span>
                  <strong>Text + email + CRM</strong>
                </div>
              </div>
            </article>
          </div>
          <Wave />
        </div>
      </div>
    </section>
  );
}

export function MotionJourney() {
  return (
    <section className="mjourney" id="how">
      <div className="hub-container mjourney-grid">
        <div className="mjourney-copy">
          <p className="hub-eyebrow">ONE CONNECTED CUSTOMER JOURNEY</p>
          <h2>More clarity. Faster action. Fewer missed opportunities.</h2>
          <p>
            SmartSMBHub connects the parts of customer intake most teams lose track of: the first phone call, the website inquiry, and the follow-up that turns interest into a booked job.
          </p>
        </div>

        <div className="mjourney-steps">
          <div className="mstep">
            <b>01</b>
            <div>
              <h3>Capture the inquiry</h3>
              <p>Answer after-hours and missed calls with a clear, business-specific experience.</p>
            </div>
          </div>
          <div className="mstep">
            <b>02</b>
            <div>
              <h3>Guide the next step</h3>
              <p>Offer a booking option, answer FAQs, or route the conversation to the right team.</p>
            </div>
          </div>
          <div className="mstep">
            <b>03</b>
            <div>
              <h3>Follow up automatically</h3>
              <p>Keep momentum alive with text, email, and CRM logging without manual chasing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
