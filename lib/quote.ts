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
    { id: "background", label: "Background" },
    { id: "approach", label: "Approach" },
    { id: "scope", label: "Scope" },
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
    facts: [
      "Principal Open Intercom engineer",
      "Delivered remotely",
      "Time & materials, €159 / hour",
      "Estimated 4–5 working days",
    ],
  },

  background: {
    heading: "Where We Are",
    lede: "From intermittent troubleshooting to a verified working setup",
    paragraphs: [
      "The BBC has been working with Open Intercom for over a year and now runs a self-hosted deployment inside its own environment, on the Business Contribution Network (BCN). Along the way you have hit a series of blockers, most recently a mismatch between Intercom Manager v4.00 and a 2021 build of Symphony Media Bridge. Each one has been investigated thoroughly on your side, but they share a root cause: the stack has never been set up and verified as a whole, in your network, by someone who knows the product from the inside.",
      "As we have discussed and agreed, we therefore propose a focused engagement instead of continued ad-hoc troubleshooting. A principal engineer from the Open Intercom team works directly with your engineers to get the whole stack correctly installed, version-aligned and configured, and then verifies it end-to-end against the way your productions will actually use it.",
      "The goal is independence, not dependence: the engagement ends with your team trained, the setup documented, and you in control of the platform going forward. And because Open Intercom is open source, that control is real: if the product itself ever needs to work differently for you, your team can build it in your own fork, or you can commission Eyevinn to build it for you.",
      "Work starts on a date we agree together once the engagement is confirmed, and is delivered remotely in working sessions with your team.",
    ],
  },

  approach: {
    heading: "How the Engagement Runs",
    lede: "Four steps from today's blocker to a working intercom your team owns",
    intro:
      "The engagement is deliberately short and hands-on. We prepare before we take your engineers' time, fix the stack rather than the symptom, prove it works in your real network, and leave the knowledge with you. One boundary is worth stating up front: this engagement deploys and configures the Open Intercom software as it is. It does not include developing changes to the product itself. If the work uncovers the need for such changes, that becomes an explicit decision we take together, never scope that creeps in unnoticed.",
    figcaption:
      "The engagement in four steps, delivered remotely in your environment. If changes to the Open Intercom product itself turn out to be needed, that is an explicit decision point, not silent scope.",
    steps: [
      {
        title: "Prepare",
        body: "Before any sessions are booked, we review your current setup: versions, configuration, logs and the investigation work you have already done. We prepare a version and configuration plan plus a short checklist of accesses and prerequisites. We also flag as early as possible if anything in your environment looks like it will require changes to Open Intercom itself, so that decision can be taken before it blocks the sessions. Your engineers' time is spent fixing, not explaining.",
      },
      {
        title: "Deploy & align",
        body: "Together with your team we bring the stack to a known-good state: the current Intercom Manager release, Eyevinn's maintained fork of Symphony Media Bridge (replacing the 2021 upstream build behind the current blocker), and a MongoDB configuration verified against those versions. Configuration and environment issues we find along the way, such as container networking or host configuration, are fixed as we go. Should something instead turn out to require development on the Open Intercom software, we stop and decide together how to handle it: your team builds it in a fork, or Eyevinn builds it as a separately agreed addition.",
      },
      {
        title: "Verify end-to-end",
        body: "We prove the deployment works where it matters: in your network. Conference listing, room join and live audio between participants, including the WebRTC media paths (TURN/STUN) through the BCN, verified against your production use cases rather than in isolation.",
      },
      {
        title: "Train & hand over",
        body: "Hands-on training for your engineers in operating, troubleshooting and upgrading the stack, a runbook documenting the as-built setup, and a short written handover with recommendations, including our assessment of how Open Intercom relates to the host operating system. Follow-up assistance in the weeks after is available at the same hourly rate.",
      },
    ],
  },

  scope: {
    heading: "Scope",
    lede: "What the engagement covers, and what we need from you",
    included: {
      title: "In scope",
      points: [
        "Deployment and configuration of the existing Open Intercom software: web client, Intercom Manager, Eyevinn's Symphony Media Bridge fork, MongoDB, TURN/STUN",
        "Your environment: Docker and inter-container networking on the Ubuntu VM in the BCN",
        "Configuration and environment fixes discovered during the work, handled as we go",
        "Configuration matched to your production use cases",
        "Training, runbook and written handover",
        "Follow-up assistance after the engagement, at the same rate",
      ],
    },
    excluded: {
      title: "Not in scope",
      points: [
        "Development of changes or new features in the Open Intercom software itself; if needed, that is an explicit decision (see below)",
        "Guaranteed support for specific host operating systems or versions; the engagement includes an assessment of what such support requires, and any product changes it calls for are a development task",
        "Ongoing operation of the deployment; the engagement ends with your team running it",
      ],
    },
    needs: {
      title: "What we need from you",
      points: [
        "Remote access to the environment, or an engineer driving while we work side by side",
        "Your engineers in the working sessions; the training happens in the work itself",
        "Someone who can carry out network or firewall changes inside the BBC where we cannot",
        "A couple of test participants for the end-to-end verification",
      ],
    },
    note: "Open Intercom is open source, and that is the point of it. If the work uncovers something that requires changes to the product itself, we take an explicit decision together: your team develops it in your own fork, or you commission Eyevinn to develop it with the same engineer, agreed and priced before any hours are spent. Nothing is silently absorbed into this engagement. The engagement itself is charged on time & materials because parts of your environment cannot be scoped from the outside. You pay for the work actually needed, and nothing for risk margins.",
  },

  deliverables: {
    heading: "What You Receive",
    lede: "A working intercom, the knowledge to run it, and a clear path forward",
    intro:
      "The headline deliverable is a verified working Open Intercom deployment in your environment, but the lasting value is that your team leaves the engagement able to operate, troubleshoot and upgrade it without us.",
    items: [
      {
        title: "Verified working deployment",
        body: "The full stack set up and verified end-to-end in your environment on the BCN: conference listing, room join and live audio between participants.",
      },
      {
        title: "Version-aligned stack",
        body: "Current Intercom Manager together with Eyevinn's maintained fork of Symphony Media Bridge, with the versions and compatibility documented.",
      },
      {
        title: "Runbook & documentation",
        body: "The as-built configuration covering containers, networking and environment, plus operating procedures and how to upgrade the stack's components going forward.",
      },
      {
        title: "Trained engineers",
        body: "Hands-on training in operating, troubleshooting and upgrading the stack, so your team can run it and extend it yourselves.",
      },
      {
        title: "OS compatibility assessment",
        body: "A review of how Open Intercom relates to the host operating system: which components touch the OS and how, which dependencies matter, and what is needed to ensure the stack keeps running across OS versions and upgrades over time. Should full support for a particular OS require changes to Open Intercom itself, we describe that as a concrete development task, for your team or for ours.",
      },
      {
        title: "Handover & recommendations",
        body: "A short written handover: what was done, any remaining risks, recommended next steps, and options for ongoing support should you want it.",
      },
    ],
    timeline:
      "On timing: the total effort is estimated at 4–5 working days, delivered remotely. The work does not need to be contiguous: preparation, focused sessions and follow-up are planned together with your team, and work starts on a date we agree once the engagement is confirmed.",
  },

  pricing: {
    heading: "Pricing",
    lede: "Time & materials at a fixed hourly rate. You pay for the hours actually worked.",
    parts: [
      {
        badge: "Covered by this quote",
        tag: "Deployment Engagement",
        subtag: "Time & materials, excl. VAT",
        title: "Open Intercom Deployment & Training",
        body: "A principal Open Intercom engineer sets up, verifies and hands over the stack in your environment, and trains your team. The engagement is charged on time & materials: parts of your environment may need changes or fixes that cannot be scoped in advance, and a fixed price would force us to price that risk in. This way you pay only for the work actually needed.",
        price: "€159",
        unit: "per hour, excl. VAT",
        rows: [
          { label: "Scope", value: "Deployment, configuration and training of the existing software. Development of Open Intercom itself is not included." },
          { label: "Estimated effort", value: "4–5 working days (approx. 32–40 hours)." },
          { label: "Indicative total", value: "Approx. €5,100–€6,400 at the estimated effort." },
          { label: "Delivery", value: "Remote, in working sessions with your engineers." },
          { label: "Travel", value: "Not expected. Should travel be agreed, travel and accommodation costs are added and paid by the client." },
          { label: "Start", value: "By agreement, planned together once the engagement is confirmed." },
          { label: "Invoicing", value: "Monthly, on actual hours worked. 30 calendar days' terms." },
        ],
      },
    ],
    footnote:
      "All prices exclude VAT. The engagement is charged on time & materials at €159 per hour. The 4–5 day figure is an estimate, not a cap; should it become clear that the estimate will be exceeded, we flag it before further hours are incurred. Further assistance in the weeks after the engagement is billed at the same hourly rate. Development of changes to the Open Intercom software itself is not included; should such changes prove necessary, they are agreed and priced separately, or made by your own team in a fork. Delivery is remote. Should travel be required, travel and accommodation costs are added and paid by the client. Payment terms 30 calendar days.",
  },

  assumptions: {
    heading: "About Eyevinn",
    paragraphs: [
      "Eyevinn Technology has been an independent video streaming consultancy since 2013, working with some of Europe's most demanding broadcasters across the full media chain, from camera to screen. We are not affiliated with any platform vendor, which means our advice is based entirely on what is right for your setup.",
      "We created and maintain Open Intercom, and we maintain the Eyevinn fork of Symphony Media Bridge it runs on. The engineer you get is a principal engineer on the product itself, the shortest possible path between a question and an answer.",
    ],
    links: [
      { label: "Open Intercom on GitHub", href: "https://github.com/Eyevinn/intercom-manager" },
      { label: "Eyevinn Technology", href: "https://eyevinn.se" },
    ],
  },

  cta: {
    heading: "Ready to get Open Intercom running?",
    body: "Reply to accept this quote and we'll agree on dates and send over a short preparation checklist.",
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
        body: [
          "This engagement is delivered remotely. Should travel be required and agreed, the client shall bear the cost: Eyevinn shall be reimbursed for reasonable travel expenses, accommodation, travel time and other expenses outside the Stockholm area.",
        ],
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
