"use client";

import { useEffect, useState } from "react";
import { quote } from "@/lib/quote";
import ArchDiagram from "@/components/ArchDiagram";

const STORAGE_KEY = "quote-access-token";

export default function Page() {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY)) {
      setUnlocked(true);
    }
    setReady(true);
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (data?.success) {
        sessionStorage.setItem(STORAGE_KEY, data.token);
        setUnlocked(true);
      } else {
        setError("Incorrect access code. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (!ready) {
    return (
      <div className="center-screen">
        <div className="spinner" />
      </div>
    );
  }

  if (!unlocked) {
    return (
      <div className="gate">
        <div className="gate-card">
          <div className="gate-brand">{quote.meta.company}</div>
          <div className="gate-title">Enter access code to view this quote</div>
          <form className="gate-form" onSubmit={submit}>
            <input
              className="gate-input"
              type="password"
              placeholder="Access code"
              value={code}
              autoFocus
              onChange={(e) => setCode(e.target.value)}
            />
            <button className="gate-btn" type="submit" disabled={busy || !code}>
              {busy ? "Verifying…" : "View quote"}
            </button>
            <div className="gate-error">{error}</div>
          </form>
        </div>
      </div>
    );
  }

  const q = quote;

  return (
    <>
      <nav className="nav">
        <div className="nav-brand">
          Eyevinn<span>.</span>
        </div>
        <div className="nav-links">
          {q.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>
              {n.label}
            </a>
          ))}
        </div>
        <div className="nav-quote">{q.meta.quoteId}</div>
      </nav>

      {/* Hero */}
      <header id="hero" className="hero">
        <div className="eyebrow">{q.hero.eyebrow}</div>
        <h1>{q.hero.title}</h1>
        <p className="hero-sub">{q.hero.subtitle}</p>
        <div className="links" style={{ marginTop: 30, justifyContent: "center" }}>
          {q.hero.facts.map((f, i) => (
            <span className="link-pill" key={i}>
              {f}
            </span>
          ))}
        </div>
        <div className="meta-line" style={{ marginTop: 26 }}>
          Prepared for <strong>{q.meta.client}</strong> · {q.meta.date} · Quote {q.meta.quoteId}
        </div>
        <div className="hero-scroll">Scroll to explore</div>
      </header>

      {/* Background */}
      <section id="background">
        <div className="wrap">
          <div className="eyebrow">Background</div>
          <h2 className="section-title">{q.background.heading}</h2>
          <p className="section-lede">{q.background.lede}</p>
          <div className="prose">
            {q.background.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach">
        <div className="wrap">
          <div className="eyebrow">Approach</div>
          <h2 className="section-title">{q.approach.heading}</h2>
          <p className="section-lede">{q.approach.lede}</p>
          <div className="prose" style={{ marginBottom: 32 }}>
            <p>{q.approach.intro}</p>
          </div>

          <figure className="diagram">
            <div className="diagram-scroll">
              <ArchDiagram />
            </div>
            <figcaption>{q.approach.figcaption}</figcaption>
          </figure>

          <div className="items">
            {q.approach.steps.map((s, i) => (
              <div className="item" key={i}>
                <div className="item-num">{i + 1}</div>
                <div>
                  <div className="item-title">{s.title}</div>
                  <div className="item-body">{s.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section id="scope">
        <div className="wrap">
          <div className="eyebrow">Scope</div>
          <h2 className="section-title">{q.scope.heading}</h2>
          <p className="section-lede">{q.scope.lede}</p>
          <div className="arch-grid">
            <div className="arch-card">
              <div className="arch-card-name">{q.scope.included.title}</div>
              <ul className="scale-points" style={{ marginTop: 12 }}>
                {q.scope.included.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="arch-card">
              <div className="arch-card-name">{q.scope.excluded.title}</div>
              <ul className="scale-points" style={{ marginTop: 12 }}>
                {q.scope.excluded.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="arch-card">
              <div className="arch-card-name">{q.scope.needs.title}</div>
              <ul className="scale-points" style={{ marginTop: 12 }}>
                {q.scope.needs.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="note">{q.scope.note}</div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables">
        <div className="wrap">
          <div className="eyebrow">Deliverables</div>
          <h2 className="section-title">{q.deliverables.heading}</h2>
          <p className="section-lede">{q.deliverables.lede}</p>
          <div className="prose" style={{ marginBottom: 32 }}>
            <p>{q.deliverables.intro}</p>
          </div>
          <div className="items">
            {q.deliverables.items.map((it, i) => (
              <div className="item" key={i}>
                <div className="item-num">✓</div>
                <div>
                  <div className="item-title">{it.title}</div>
                  <div className="item-body">{it.body}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="note">{q.deliverables.timeline}</div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <div className="wrap">
          <div className="eyebrow">Pricing</div>
          <h2 className="section-title">{q.pricing.heading}</h2>
          <p className="section-lede">{q.pricing.lede}</p>
          <div className="pricing-grid">
            {q.pricing.parts.map((p, i) => (
              <div className={`price-card${(p as any).upcoming ? " price-card--upcoming" : ""}`} key={i}>
                {(p as any).badge && <div className="price-badge">{(p as any).badge}</div>}
                <div className="price-tag">{p.tag}</div>
                <div className="price-subtag">{p.subtag}</div>
                <h3>{p.title}</h3>
                <p className="price-body">{p.body}</p>
                <div className="price-amount">{p.price}</div>
                <div className="price-unit">{p.unit}</div>
                <div className="price-rows">
                  {p.rows.map((r, j) => (
                    <div className="price-row" key={j}>
                      <span className="k">{r.label}</span>
                      <span className="v">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="price-footnote">{q.pricing.footnote}</div>
        </div>
      </section>

      {/* About */}
      <section id="assumptions">
        <div className="wrap">
          <div className="eyebrow">About</div>
          <h2 className="section-title">{q.assumptions.heading}</h2>
          <div className="prose" style={{ marginTop: 24 }}>
            {q.assumptions.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="links">
            {q.assumptions.links.map((l, i) => (
              <a className="link-pill" key={i} href={l.href} target="_blank" rel="noreferrer">
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta">
        <div className="wrap">
          <h2 className="section-title">{q.cta.heading}</h2>
          <p className="section-lede" style={{ marginBottom: 0 }}>
            {q.cta.body}
          </p>
          <a className="btn-primary" href={q.cta.primary.href} target="_blank" rel="noreferrer">
            {q.cta.primary.label}
          </a>
          <a
            className="cta-mail"
            href={`mailto:${q.meta.contactEmail}?subject=Quote ${q.meta.quoteId}: ${q.hero.title}`}
          >
            {q.meta.contactName} · {q.meta.contactEmail}
          </a>
        </div>
      </section>

      {/* Terms */}
      <section id="terms" style={{ borderBottom: "none" }}>
        <div className="wrap">
          <div className="eyebrow">Terms</div>
          <h2 className="section-title">{q.terms.heading}</h2>
          <div className="terms-list" style={{ marginTop: 34 }}>
            {q.terms.sections.map((s, i) => (
              <div key={i}>
                <div className="term-title">{s.title}</div>
                <div className="term-body">
                  {s.body.map((b, j) => (
                    <p key={j}>{b}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <strong>{q.terms.footer.company}</strong> ·{" "}
        <a href={`https://${q.terms.footer.site}`} target="_blank" rel="noreferrer">
          {q.terms.footer.site}
        </a>
        <div style={{ marginTop: 8 }}>
          {q.meta.contactName} · {q.meta.contactEmail}
        </div>
      </footer>
    </>
  );
}
