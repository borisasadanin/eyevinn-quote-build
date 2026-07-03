// ---------------------------------------------------------------------------
// QUOTE CONTENT
// This is the main file you edit to produce a new quote.
// Swap the text/fields below; the layout and styling stay the same.
// ---------------------------------------------------------------------------

export const quote = {
  meta: {
    company: "Eyevinn Technology",
    quoteId: "EYV-2026-BUILD-001",
    date: "3 July 2026",
    client: "[Prospective Client]",
    contactName: "Boris Asadanin",
    contactEmail: "boris.asadanin@eyevinn.se",
  },

  nav: [
    { id: "hero", label: "Overview" },
    { id: "engagement", label: "Engagement" },
    { id: "architecture", label: "Architecture" },
    { id: "deliverables", label: "Deliverables" },
    { id: "pricing", label: "Pricing" },
    { id: "assumptions", label: "About" },
    { id: "cta", label: "Get Started" },
    { id: "terms", label: "Terms" },
  ],

  hero: {
    eyebrow: "Eyevinn Technology",
    title: "Your Streaming Platform, Built on Open Source",
    subtitle:
      "A proposal to design, build and operate your new streaming platform on open-source components — full control, your data, no vendor lock-in.",
  },

  engagement: {
    heading: "Engagement Overview",
    lede: "From discovery to a platform you own",
    paragraphs: [
      "Following the discovery workshop, you have chosen to build your new streaming platform on open-source components — owning the software, workflows, roadmap and data — with Eyevinn as the partner to design, build and operate it.",
      "The first and defining step is a detailed technical architecture: every component your platform needs, how they fit together, and how the whole scales to the audience you are building for. This blueprint turns the chosen direction into an executable plan and a firm cost model.",
      "From there, Eyevinn builds the platform on Open Source Cloud (osaas.io) — a managed platform of the same open-source components — and operates and maintains it. Your launch targets are achievable: a streaming service by Easter 2027 and the linear channel on 1 September 2027. The detailed, validated timeline to reach them is itself one of the deliverables of this engagement — it comes out of the architecture and roadmap work rather than being fixed before that work is done.",
      "Crucially, this path means you own your roadmap. Because every component is open source, any capability can be added by anyone — you are never waiting in line behind the other customers of a platform vendor, and you can bring development or operations in-house if and when you build the organisation for it.",
    ],
  },

  // Grouped architecture: layers, each with its components.
  architecture: {
    heading: "Platform Architecture",
    lede: "Every component your platform needs — built from proven open-source building blocks",
    intro:
      "The architecture below covers the full path from camera and studio to viewer, plus the monetization, data and operations layers your business model depends on. Each component is open source and runs on Open Source Cloud; the detailed blueprint delivered in Phase 1 specifies configuration, data flows and capacity for each.",
    layers: [
      {
        title: "Ingest & Production",
        components: [
          { name: "Live Ingest (SRT / RTMP / RIST)", body: "Secure, resilient ingest of live feeds from studio and field, with error correction for unstable field links." },
          { name: "Live Production (OpenLive)", body: "Browser-based multi-camera vision mixing and audio, sub-500 ms latency — for in-house news, sport and weather." },
        ],
      },
      {
        title: "Processing & Packaging",
        components: [
          { name: "Live & VOD Transcoding", body: "Adaptive bitrate (ABR) ladders generated for every screen and network condition." },
          { name: "Packaging (HLS / DASH, Low-Latency)", body: "Just-in-time packaging including LL-HLS / LL-DASH for low-latency live sport." },
          { name: "Multi-DRM", body: "Widevine, FairPlay and PlayReady integration for premium content — the sport tier and other protected rights." },
        ],
      },
      {
        title: "Origin, Storage & Delivery",
        components: [
          { name: "Origin", body: "Scalable live and VOD origin serving all packaging formats." },
          { name: "Object Storage", body: "VOD catalogue, catch-up / nDVR window and recordings." },
          { name: "CDN & Multi-CDN", body: "Delivery optimised for Sweden with geo-restriction, and multi-CDN routing to absorb sport-sized traffic peaks." },
        ],
      },
      {
        title: "Channels, Playout & Time-shift",
        components: [
          { name: "Channel Engine (Linear & FAST)", body: "Schedules and plays out linear and FAST channels from the VOD library; the foundation for adding more channels over time." },
          { name: "Catch-up / Start-over / nDVR", body: "Time-shifted viewing, start-over and recaps generated from the linear feed." },
        ],
      },
      {
        title: "Commerce & Monetization",
        components: [
          { name: "Flexible business models & campaigns", body: "Subscription tiers, ad-supported, pay-per-view, vouchers, bundles and time-limited campaigns — architected so new models and offers can be added over time, not locked to a single revenue model." },
          { name: "Purchase flows & payment integration", body: "Logged-out and logged-in purchase and checkout journeys, connected to payment providers (e.g. Svea, card, Swish) — the commerce backbone behind every business model." },
          { name: "Subscription, Entitlements & Paywall", body: "Tiered access (basic-with-ads through premium ad-free, sport in the top tier), entitlement management and access control." },
          { name: "Server-Side Ad Insertion (SSAI / DAI)", body: "Server-guided dynamic ad insertion for the ad-supported tiers and TV — your ad server, your impression data, and syndicatable to other services." },
        ],
      },
      {
        title: "Frontend, Apps & Playback",
        components: [
          { name: "Public website & logged-out experience", body: "Marketing site, content browsing, campaign and offer pages, and sign-up / purchase flows for visitors who are not yet logged in." },
          { name: "Client Apps (logged-in)", body: "iOS, Android, Web, Smart TV (Tizen / webOS), Android TV and Apple TV — a TV4 Play-class experience." },
          { name: "Player & SDK", body: "Web player and SDKs across platforms, with playback quality and error handling built in." },
        ],
      },
      {
        title: "Content, Data & Operations",
        components: [
          { name: "Content Management & Metadata / EPG", body: "Catalogue, metadata and electronic program guide driving both on-demand discovery and the linear schedule." },
          { name: "Analytics (EPAS)", body: "Open player analytics — viewer engagement and ad measurement, owned by you and not mediated by a vendor." },
          { name: "Monitoring & Observability", body: "24/7 channel monitoring, alerting and SLA — essential for live sport reliability." },
          { name: "Radio / Audio Streaming", body: "Free online listening for the in-house radio channels." },
        ],
      },
    ],
    scale: {
      title: "Built to scale",
      body: "The architecture is designed to scale elastically to the concurrency your biggest live events demand. Every processing component runs as a stateless, horizontally-scalable workload on Open Source Cloud's Kubernetes platform, so transcoding and packaging capacity expands automatically under load and contracts when idle — you pay for what you use. Delivery is offloaded to a multi-CDN layer that absorbs sport-sized traffic peaks across Sweden, while origin, storage and the monetization layer scale independently. The result is a platform that runs lean day-to-day yet handles a national final or a breaking-news spike without re-architecting.",
      points: [
        "Elastic, consumption-based transcoding and packaging",
        "Multi-CDN delivery to absorb live sport peaks",
        "Stateless, horizontally-scalable components",
        "Origin, storage and monetization scale independently",
        "Dimensioned to broadcaster-grade concurrency",
      ],
    },
  },

  deliverables: {
    heading: "What You Receive",
    lede: "A detailed architecture, a platform built to launch, and ongoing operation",
    intro:
      "The headline deliverable of Phase 1 is a detailed technical architecture blueprint. It is a working engineering document — the basis for the build, the cost model, and your own internal decisions.",
    items: [
      {
        title: "Detailed architecture blueprint",
        body: "Every component specified, with data flows, integration points, a capacity/scaling plan, and the reasoning behind each choice.",
      },
      {
        title: "Implementation roadmap",
        body: "A phased delivery plan to streaming launch (Easter 2027) and the linear channel (1 September 2027), with milestones and decision points.",
      },
      {
        title: "Firm cost model",
        body: "Build, running and maintenance figures tied to your target concurrency and content volume — replacing the indicative ranges in this quote.",
      },
      {
        title: "The built platform",
        body: "Designed, built and deployed on Open Source Cloud across all target devices, then operated and maintained by Eyevinn.",
      },
      {
        title: "Ownership & handover",
        body: "Open-source components plus documentation — you own the roadmap, and can add any capability, take operations in-house or move provider at any time. No lock-in.",
      },
    ],
    timeline:
      "On timing: your launch targets — a streaming service by Easter 2027 and the linear channel on 1 September 2027 — are achievable, and the engagement is planned to honour them. The exact, validated timeline is produced as part of this work (the implementation roadmap deliverable) rather than fixed before the architecture is done.",
  },

  pricing: {
    heading: "Pricing",
    parts: [
      {
        tag: "Phase 1 — Target Architecture",
        subtag: "Fixed price — excl. VAT",
        title: "Target Architecture",
        body: "A fixed-price project delivering the complete target architecture: every component specified, a capacity/scaling plan, and the firm cost basis for Phases 2 and 3.",
        price: "100 000 SEK",
        unit: "fixed price — excl. VAT",
        rows: [
          { label: "Deliverable", value: "Target architecture blueprint, capacity plan and implementation roadmap." },
          { label: "Payment", value: "On delivery. 30 calendar days' terms." },
          { label: "Basis", value: "Defines the scope and price of Phases 2 and 3." },
        ],
      },
      {
        tag: "Phase 2 — Implementation",
        subtag: "Scoped from Phase 1 — excl. VAT",
        title: "Design, Build & Launch",
        body: "Building the platform to your launch milestones. Scope and price are defined by the target architecture delivered in Phase 1.",
        price: "Set by Phase 1",
        unit: "fixed scope after Phase 1",
        rows: [
          { label: "Pricing", value: "Determined by the Phase 1 target architecture." },
          { label: "Delivery", value: "Phased against the roadmap, to your launch milestones." },
          { label: "Scope", value: "Ingest, processing, delivery, apps, commerce and data layers." },
        ],
      },
      {
        tag: "Phase 3 — Operation & Maintenance",
        subtag: "Monthly — excl. VAT",
        title: "Managed Operation & Maintenance",
        body: "Eyevinn operates and maintains the running platform: monitoring, updates, incident response and SLA. The monthly cost is defined by the target architecture delivered in Phase 1.",
        price: "Set by Phase 1",
        unit: "monthly cost — excl. VAT",
        rows: [
          { label: "Monthly cost", value: "Determined by the Phase 1 target architecture." },
          { label: "Infrastructure", value: "OSC consumption billed at cost — no platform margin." },
          { label: "Included", value: "Monitoring, updates, incident response, SLA and a monthly report." },
        ],
      },
    ],
    footnote:
      "All prices exclude VAT. Phase 1 is a fixed price; the price of Phase 2 and the monthly cost of Phase 3 are defined by the target architecture delivered in Phase 1. Infrastructure (Open Source Cloud) is billed at cost with no platform margin. On-site travel outside Stockholm invoiced at cost. Payment terms 30 calendar days.",
  },

  assumptions: {
    heading: "About Eyevinn",
    paragraphs: [
      "Eyevinn Technology has been an independent video streaming consultancy since 2013, working with some of Europe's most demanding broadcasters across the full media chain — from camera to screen. We are not affiliated with any managed streaming platform vendor, which means our advice and our build are based entirely on what is right for your service — not on commercial relationships.",
      "We build the open-source components this platform is made of, and we operate them for you on Open Source Cloud — so you get a managed solution without giving up ownership, insight or the freedom to run it with anyone you choose.",
    ],
    links: [
      { label: "Open Source Cloud (osaas.io)", href: "https://www.osaas.io" },
      { label: "Eyevinn Technology", href: "https://eyevinn.se" },
    ],
  },

  cta: {
    heading: "Ready to build your platform?",
    body: "Let's start with the architecture. Reply to this quote and we'll set up a kickoff.",
    primary: { label: "Explore Open Source Cloud", href: "https://www.osaas.io" },
  },

  terms: {
    heading: "Terms & Conditions",
    sections: [
      {
        title: "Confidentiality Notice",
        body: ["This document is intended only for the receiving party and may not be shared with third parties."],
      },
      {
        title: "Travel and Accommodation",
        body: ["Eyevinn shall be reimbursed for reasonable travel expenses, travel time and other expenses outside the Stockholm area."],
      },
      {
        title: "Limitations of Availability",
        body: [
          "Eyevinn Technology cannot guarantee availability before order is confirmed. Other new assignments and resignation can affect availability.",
          "Eyevinn Technology cannot guarantee availability to consultants that are not bound by contracts to Eyevinn Technology, such as subcontractors or individuals in recruitment process.",
        ],
      },
      {
        title: "Payment Terms",
        body: [
          "VAT is excluded from the prices in this quotation.",
          "Eyevinn Technology will send monthly invoices with 30 calendar days' payment terms. Late payment interest, the Swedish Riksbank's reference interest rate plus 8 percentage units, will apply for any payment delays.",
          "Charges shall be annually increased according to increases in Consumer Price Index CPI issued by Statistics Sweden, SCB (Statistikmyndigheten). Any adjustments shall be made with effect per 1 January each year. Adjustments are to be made in order to reflect index increases during a twelve (12) months period and measured per 1 November the preceding year.",
        ],
      },
      {
        title: "Validity",
        body: ["This quotation is valid for 30 days from the date of issue, subject to the limitations of availability set out above."],
      },
      {
        title: "Term and Termination",
        body: [
          "This Agreement shall have a term commencing on the signing date and will be effective until end of this assignment or terminated by either party by giving 30 days prior written notice to the other Party. Each Party shall have the right to, in writing, immediately terminate this agreement if the other Party is in material breach of any of its obligations under this Agreement.",
        ],
      },
      {
        title: "Confidentiality",
        body: [
          "Eyevinn Technology shall keep confidential all knowledge and information as to processes, know-how, customer lists, trade secrets and other confidential information made known to it by the client or otherwise acquired by it while retained by the client or when rendering the Services in companies now affiliated with the client and they shall not disclose the same or anything relating thereto to any other person, firm or corporation, except as may be required in the course and scope of duties hereunder and except for information that (i) is or becomes public knowledge through no fault of Eyevinn Technology, (ii) is lawfully received from a third party, or (iii) is required to be disclosed by law.",
          "All employees at Eyevinn Technology are bound by a non-disclosure agreement included in the employment contract. All sub-contractors (if any) are bound by a non-disclosure agreement included in the sub-contractor agreement.",
        ],
      },
      {
        title: "Independent Contractor Relationship",
        body: [
          "The cooperation contemplated by this Agreement shall solely be a contractual relationship and shall not be construed as a joint venture, partnership, or any other form of affiliation between the Parties under company, corporation, or similar applicable laws. The client and Eyevinn Technology are independent contracting parties, and nothing in this Agreement shall make either Party the agent or legal representative of the other Party for any purpose whatsoever, nor does it grant either Party any right, power, or authority to assume or to create any obligation, express or implied, on behalf of, or in the name of, the other Party.",
        ],
      },
      {
        title: "Intellectual Property",
        body: [
          "The Consultant hereby assigns to the Client, with full title guarantee, title to and all present and future rights and interest of the Consultant in the Project-Specific IPR (Intellectual Property Rights).",
        ],
      },
      {
        title: "Recruitment",
        body: [
          "In view of the contractual relationship that exists between the parties, the Purchaser undertakes, against a fine (“transfer amount”) of five (5) price base amounts (according to the National Insurance Act 1962:381), that not during ongoing assignments, or within six (6) months after the termination of the assignment, recruit or employ staff who are or have been employed or subcontracted by the Consultant and worked actively within the assignment.",
        ],
      },
      {
        title: "Arbitration and Governing Law",
        body: [
          "This Agreement shall be governed by and construed in accordance with the laws of Sweden. Any dispute, controversy or claim arising out of or in connection with this Agreement shall be finally settled by arbitration administered in Stockholm, Sweden.",
        ],
      },
    ],
    footer: { company: "Eyevinn Technology AB", site: "eyevinn.se" },
  },
};

export type Quote = typeof quote;
