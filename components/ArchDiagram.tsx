// Open Intercom deployment diagram, drawn to match the quote's dark / amber theme.
// Boxes with an amber border are the parts hosted inside the BBC environment.

type Box = {
  x: number; y: number; w: number; h: number;
  lines: string[];
  variant?: "base" | "upper" | "accent";
};

type Banner = { x: number; w: number; label: string };

const W = 250;
const cols = [20, 310, 600, 890];

const boxes: Box[] = [
  // Row 1 — the main chain from user to media
  { x: cols[0], y: 30, w: W, h: 130, variant: "upper", lines: ["Producers & operators", "browser-based panels,", "no installed software"] },
  { x: cols[1], y: 30, w: W, h: 130, variant: "base", lines: ["Open Intercom", "web client", "rooms & panels"] },
  { x: cols[2], y: 30, w: W, h: 130, variant: "base", lines: ["Intercom Manager", "control plane,", "REST API — current release"] },
  { x: cols[3], y: 30, w: W, h: 130, variant: "base", lines: ["Symphony Media Bridge", "Eyevinn fork — WebRTC SFU,", "version-aligned"] },

  // Row 2 — supporting services
  { x: cols[2], y: 190, w: W, h: 110, variant: "base", lines: ["MongoDB", "conference & state"] },
  { x: cols[3], y: 190, w: W, h: 110, variant: "base", lines: ["TURN / STUN", "media path through", "your network"] },

  // Environment box spanning the hosted components
  { x: cols[1], y: 330, w: cols[3] + W - cols[1], h: 96, variant: "accent", lines: ["BBC environment", "Docker on Ubuntu VM · Business Contribution Network (BCN)"] },
];

const banners: Banner[] = [
  { x: cols[0], w: W, label: "Users" },
  { x: cols[1], w: W, label: "Client" },
  { x: cols[2], w: W, label: "Control plane" },
  { x: cols[3], w: W, label: "Media plane" },
];

const FILL: Record<string, string> = {
  base: "#565b73",
  upper: "#7f84a3",
  accent: "#565b73",
};

function BoxText({ b }: { b: Box }) {
  const cx = b.x + b.w / 2;
  const lh = 17;
  const startY = b.y + b.h / 2 - ((b.lines.length - 1) * lh) / 2 + 5;
  return (
    <>
      {b.lines.map((ln, i) => (
        <text
          key={i}
          x={cx}
          y={startY + i * lh}
          textAnchor="middle"
          fontSize={i === 0 ? 14.5 : 12.5}
          fontWeight={i === 0 ? 600 : 400}
          fill="#ffffff"
          fillOpacity={i === 0 ? 1 : 0.8}
        >
          {ln}
        </text>
      ))}
    </>
  );
}

export default function ArchDiagram() {
  return (
    <svg viewBox="0 0 1160 540" role="img" aria-label="Open Intercom deployment architecture" style={{ width: "100%", height: "auto", display: "block" }}>
      {/* boxes */}
      {boxes.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={b.y}
            width={b.w}
            height={b.h}
            rx={9}
            fill={FILL[b.variant || "base"]}
            stroke={b.variant === "accent" ? "rgba(245,158,11,0.55)" : "rgba(255,255,255,0.08)"}
            strokeWidth={b.variant === "accent" ? 1.5 : 1}
          />
          <BoxText b={b} />
        </g>
      ))}

      {/* stage banners (arrows) */}
      {banners.map((bn, i) => {
        const y = 460;
        const h = 64;
        const tip = 18;
        const pts = `${bn.x},${y} ${bn.x + bn.w - tip},${y} ${bn.x + bn.w},${y + h / 2} ${bn.x + bn.w - tip},${y + h} ${bn.x},${y + h}`;
        return (
          <g key={i}>
            <polygon points={pts} fill="#17171c" />
            <rect x={bn.x} y={y} width={4} height={h} fill="#f59e0b" />
            <text
              x={bn.x + (bn.w - tip) / 2 + 4}
              y={y + h / 2 + 5}
              textAnchor="middle"
              fontSize={15}
              fontWeight={600}
              fill="#ffffff"
              letterSpacing="0.02em"
            >
              {bn.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
