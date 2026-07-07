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
        <div className="meta-line">
          Prepared for <strong>{q.meta.client}</strong> · {q.meta.date} · Quote {q.meta.quoteId}
        </div>
        <div className="hero-scroll">Scroll to explore</div>
      </header>

      {/* Engagement */}
      <section id="engagement">
        <div className="wrap">
          <div className="eyebrow">Engagement</div>
          <h2 className="section-title">{q.engagement.heading}</h2>
          <p className="section-lede">{q.engagement.lede}</p>
          <div className="prose">
            {q.engagement.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture">
        <div className="wrap">
          <div className="eyebrow">Architecture</div>
          <h2 className="section-title">{q.architecture.heading}</h2>
          <p className="section-lede">{q.architecture.lede}</p>
          <div className="prose" style={{ marginBottom: 32 }}>
            <p>{q.architecture.intro}</p>
          </div>

          <figure className="diagram">
            <div className="diagram-scroll">
              <ArchDiagram />
            </div>
            <figcaption>
              The Open Intercom stack as deployed in your environment — browser clients, control plane and media
              plane, hosted in Docker on your Ubuntu VM inside the BBC Business Contribution Network.
            </figcaption>
          </figure>

          {q.architecture.layers.map((layer, li) => (
            <div className="arch-layer" key={li}>
              <div className="arch-layer-title">
                <span className="arch-layer-num">{li + 1}</span>
                {layer.title}
              </div>
              <div className="arch-grid">
                {layer.components.map((c, ci) => (
                  <div className="arch-card" key={ci}>
                    <div className="arch-card-name">{c.name}</div>
                    <div className="arch-card-body">{c.body}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="scale-block">
            <div className="scale-title">{q.architecture.scale.title}</div>
            <p className="scale-body">{q.architecture.scale.body}</p>
            <ul className="scale-points">
              {q.architecture.scale.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
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
            href={`mailto:${q.meta.contactEmail}?subject=Quote ${q.meta.quoteId} — ${q.hero.title}`}
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
