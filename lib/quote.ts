// ---------------------------------------------------------------------------
// QUOTE CONTENT
// This is the main file you edit to produce a new quote.
// Swap the text/fields below; the layout and styling stay the same.
// ---------------------------------------------------------------------------

export const quote = {
  meta: {
    company: "Eyevinn Technology",
    quoteId: "EYV-2026-INTERCOM-001",
    date: "7 July 2026",
    client: "BBC (British Broadcasting Corporation)",
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
    title: "Open Intercom, Up and Running at the BBC",
    subtitle:
      "A focused deployment engagement: a principal Open Intercom engineer sets up and verifies the full stack in your environment, and trains your team to run it yourselves.",
  },

  engagement: {
    heading: "Engagement Overview",
    lede: "From intermittent troubleshooting to a verified working setup",
    paragraphs: [
      "The BBC has been working with Open Intercom for over a year and now runs a self-hosted deployment inside its own environment, on the Business Contribution Network (BCN). The recent troubleshooting rounds — most recently the mismatch between Intercom Manager v4.00 and a 2021 build of Symphony Media Bridge — show why debugging one symptom at a time is slow and frustrating for both sides.",
      "As we have discussed and agreed, we propose a focused engagement instead. A principal engineer from the Open Intercom team works directly with your engineers to set up the whole stack correctly in your environment — including Eyevinn's maintained fork of Symphony Media Bridge, version-aligned with the Intercom Manager — and verifies it end-to-end against your production use cases.",
      "The engagement includes the training and documentation your team needs to operate, troubleshoot and upgrade the installation independently, including a clear upgrade path as you move your platform forward (for example to Ubuntu 26.04 LTS). The goal is simple: after the engagement, you run Open Intercom yourselves, and Eyevinn is an option — not a dependency.",
      "Proposed timing: focused working sessions with your team on 4–5 August 2026, preceded by preparation on our side and followed by wrap-up and any remaining fixes in the weeks after. The total effort is estimated at 4–5 working days, delivered remotely.",
    ],
  },

  // Grouped architecture: layers, each with its components.
  architecture: {
    heading: "What We Set Up",
    lede: "The full Open Intercom stack, version-aligned and verified in your environment",
    intro:
      "Open Intercom is a small number of components that must agree with each other — and with the network they run in. The engagement covers all of them: correct versions, correct configuration, and verified connectivity inside the BBC environment.",
    layers: [
      {
        title: "Clients & Access",
        components: [
          { name: "Web Client", body: "Browser-based intercom panels for producers and operators — no installed software required." },
          { name: "Rooms & Production Setup", body: "Conference and room configuration matched to how your productions actually communicate." },
        ],
      },
      {
        title: "Control Plane",
        components: [
          { name: "Intercom Manager", body: "The orchestration layer and REST API — upgraded to the current release and configured for your environment." },
          { name: "MongoDB", body: "Conference and state storage, verified against the manager version in use." },
        ],
      },
      {
        title: "Media Plane",
        components: [
          { name: "Symphony Media Bridge (Eyevinn fork)", body: "The WebRTC media bridge that mixes and routes audio. We deploy Eyevinn's maintained fork, version-aligned with the Intercom Manager — replacing the 2021 upstream build at the root of the current blocker." },
          { name: "WebRTC Connectivity (TURN / STUN)", body: "Media path validation inside the BCN — the part that only ever surfaces in a real network, verified in yours." },
        ],
      },
      {
        title: "Environment",
        components: [
          { name: "Docker on Ubuntu", body: "Container configuration and inter-container networking on your VM, as-built and documented." },
          { name: "Upgrade Path", body: "A documented procedure for future upgrades, including the move to Ubuntu 26.04 LTS as 24.04 leaves support." },
        ],
      },
    ],
    scale: {
      title: "Why a focused engagement",
      body: "Every issue you have hit over the past months traces back to the same thing: components that were never verified together, in your network. A few focused days with the engineer who knows the product resolves the class of problem — not just the current symptom. It is faster and cheaper than another six months of intermittent troubleshooting, and it ends with your team in control.",
      points: [
        "Version-aligned stack: Intercom Manager + Eyevinn's maintained SMB fork",
        "End-to-end verification in the real BBC network, not in isolation",
        "Configuration adjusted to your production use cases",
        "Training so day-to-day operation does not depend on Eyevinn",
        "A documented upgrade path, including Ubuntu 26.04 LTS",
      ],
    },
  },

  deliverables: {
    heading: "What You Receive",
    lede: "A working intercom, the knowledge to run it, and a clear path forward",
    intro:
      "The headline deliverable is a verified working Open Intercom deployment in your environment — but the lasting value is that your team leaves the engagement able to operate, troubleshoot and upgrade it without us.",
    items: [
      {
        title: "Verified working deployment",
        body: "The full stack set up and verified end-to-end in your environment on the BCN — conference listing, room join and live audio between participants.",
      },
      {
        title: "Version-aligned stack",
        body: "Current Intercom Manager together with Eyevinn's maintained fork of Symphony Media Bridge, with the versions and compatibility documented.",
      },
      {
        title: "Deployment documentation & runbook",
        body: "The as-built configuration — containers, networking, environment — plus operating procedures and the upgrade procedure, including the Ubuntu 26.04 LTS path.",
      },
      {
        title: "Training for your engineers",
        body: "Hands-on training in operating, troubleshooting and upgrading the stack, so you can run it and extend it yourselves.",
      },
      {
        title: "Handover & recommendations",
        body: "A short written handover: what was done, any remaining risks, recommended next steps, and options for ongoing support should you want it.",
      },
    ],
    timeline:
      "On timing: we propose focused working sessions with your team on 4–5 August 2026, with preparation beforehand and wrap-up plus any remaining fixes in the weeks after. Total estimated effort is 4–5 working days, delivered remotely.",
  },

  pricing: {
    heading: "Pricing",
    lede: "Time & materials at a fixed hourly rate — you pay for the hours actually worked.",
    parts: [
      {
        badge: "Covered by this quote",
        tag: "Deployment Engagement",
        subtag: "Time & materials — excl. VAT",
        title: "Open Intercom Deployment & Training",
        body: "A principal Open Intercom engineer sets up, verifies and hands over the stack in your environment, and trains your team. The engagement is charged on time & materials: parts of your environment may need changes or fixes that cannot be scoped in advance, and a fixed price would force us to price that risk in. This way you pay only for the work actually needed.",
        price: "€159",
        unit: "per hour — excl. VAT",
        rows: [
          { label: "Estimated effort", value: "4–5 working days (approx. 32–40 hours)." },
          { label: "Indicative total", value: "Approx. €5,100–€6,400 at the estimated effort." },
          { label: "Delivery", value: "Remote, in working sessions with your engineers." },
          { label: "Proposed dates", value: "Focused sessions 4–5 August 2026, follow-up in the weeks after as needed." },
          { label: "Invoicing", value: "Monthly, on actual hours worked. 30 calendar days' terms." },
        ],
      },
    ],
    footnote:
      "All prices exclude VAT. The engagement is charged on time & materials at €159 per hour; the 4–5 day figure is an estimate, not a cap — should it become clear that the estimate will be exceeded, we flag it before further hours are incurred. Further assistance in the weeks after the engagement is billed at the same hourly rate. Delivery is remote; any separately agreed on-site work is invoiced with travel at cost. Payment terms 30 calendar days.",
  },

  assumptions: {
    heading: "About Eyevinn",
    paragraphs: [
      "Eyevinn Technology has been an independent video streaming consultancy since 2013, working with some of Europe's most demanding broadcasters across the full media chain — from camera to screen. We are not affiliated with any platform vendor, which means our advice is based entirely on what is right for your setup.",
      "We created and maintain Open Intercom, and we maintain the Eyevinn fork of Symphony Media Bridge it runs on. The engineer you get is a principal engineer on the product itself — the shortest possible path between a question and an answer.",
    ],
    links: [
      { label: "Open Intercom on GitHub", href: "https://github.com/Eyevinn/intercom-manager" },
      { label: "Eyevinn Technology", href: "https://eyevinn.se" },
    ],
  },

  cta: {
    heading: "Ready to get Open Intercom running?",
    body: "Reply to confirm the proposed August dates and we'll book the engineer and send over a short preparation checklist.",
    primary: { label: "Open Intercom on GitHub", href: "https://github.com/Eyevinn/intercom-manager" },
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
