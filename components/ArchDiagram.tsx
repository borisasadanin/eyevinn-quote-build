// Engagement flow diagram, drawn to match the quote's dark / amber theme:
// four steps from preparation to handover, on top of the BBC-hosted environment.

type Step = { label: string; lines: string[] };

const steps: Step[] = [
  {
    label: "1 · Prepare",
    lines: ["Review of your setup,", "logs & configuration.", "Version plan and", "preparation checklist."],
  },
  {
    label: "2 · Deploy & align",
    lines: ["Current Intercom Manager,", "Eyevinn's SMB fork,", "MongoDB — versions aligned,", "config & environment fixed."],
  },
  {
    label: "3 · Verify",
    lines: ["Conference listing, room join,", "live audio between participants.", "Media paths (TURN/STUN)", "proven in the real BCN."],
  },
  {
    label: "4 · Train & hand over",
    lines: ["Hands-on training,", "runbook & documentation,", "written handover,", "follow-up as needed."],
  },
];

const W = 250;
const GAP = 40;
const X0 = 20;

export default function ArchDiagram() {
  return (
    <svg
      viewBox="0 0 1180 530"
      role="img"
      aria-label="Engagement flow: prepare, deploy and align, verify, train and hand over"
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      {steps.map((s, i) => {
        const x = X0 + i * (W + GAP);
        const bannerY = 20;
        const bannerH = 56;
        const tip = 18;
        const pts = `${x},${bannerY} ${x + W - tip},${bannerY} ${x + W},${bannerY + bannerH / 2} ${x + W - tip},${bannerY + bannerH} ${x},${bannerY + bannerH}`;
        const boxY = 100;
        const boxH = 190;
        const lh = 21;
        const startY = boxY + boxH / 2 - ((s.lines.length - 1) * lh) / 2 + 5;
        return (
          <g key={i}>
            {/* step banner */}
            <polygon points={pts} fill="#17171c" />
            <rect x={x} y={bannerY} width={4} height={bannerH} fill="#f59e0b" />
            <text
              x={x + (W - tip) / 2 + 4}
              y={bannerY + bannerH / 2 + 5}
              textAnchor="middle"
              fontSize={15}
              fontWeight={600}
              fill="#ffffff"
              letterSpacing="0.02em"
            >
              {s.label}
            </text>

            {/* connector to next step */}
            {i < steps.length - 1 && (
              <path
                d={`M ${x + W + 8} ${bannerY + bannerH / 2} L ${x + W + GAP - 8} ${bannerY + bannerH / 2}`}
                stroke="rgba(245,158,11,0.5)"
                strokeWidth={2}
                strokeDasharray="3 5"
              />
            )}

            {/* detail box */}
            <rect x={x} y={boxY} width={W} height={boxH} rx={9} fill="#565b73" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
            {s.lines.map((ln, j) => (
              <text key={j} x={x + W / 2} y={startY + j * lh} textAnchor="middle" fontSize={13} fill="#ffffff" fillOpacity={0.85}>
                {ln}
              </text>
            ))}
          </g>
        );
      })}

      {/* decision-point strip */}
      <rect
        x={X0}
        y={322}
        width={X0 + 3 * (W + GAP) + W - X0}
        height={68}
        rx={9}
        fill="none"
        stroke="rgba(245,158,11,0.55)"
        strokeWidth={1.5}
        strokeDasharray="6 5"
      />
      <text x={X0 + (3 * (W + GAP) + W) / 2} y={350} textAnchor="middle" fontSize={13.5} fontWeight={600} fill="#f59e0b">
        Decision point — if changes to Open Intercom itself are needed
      </text>
      <text x={X0 + (3 * (W + GAP) + W) / 2} y={372} textAnchor="middle" fontSize={12.5} fill="#ffffff" fillOpacity={0.8}>
        Your team develops it in your own fork · or Eyevinn develops it as a separately agreed addition
      </text>

      {/* environment strip */}
      <rect
        x={X0}
        y={420}
        width={X0 + 3 * (W + GAP) + W - X0}
        height={72}
        rx={9}
        fill="#565b73"
        stroke="rgba(245,158,11,0.55)"
        strokeWidth={1.5}
      />
      <text x={X0 + (3 * (W + GAP) + W) / 2} y={450} textAnchor="middle" fontSize={14.5} fontWeight={600} fill="#ffffff">
        Delivered remotely, in your environment
      </text>
      <text x={X0 + (3 * (W + GAP) + W) / 2} y={472} textAnchor="middle" fontSize={12.5} fill="#ffffff" fillOpacity={0.8}>
        The full Open Intercom stack — Docker on Ubuntu VM · BBC Business Contribution Network (BCN)
      </text>
    </svg>
  );
}
