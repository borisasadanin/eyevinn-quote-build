// Media value-chain diagram, redrawn to match the quote's dark / amber theme.
// Boxes with an amber border are the commerce / logged-out additions.

type Box = {
  x: number; y: number; w: number; h: number;
  lines: string[];
  variant?: "base" | "upper" | "accent";
};

type Banner = { x: number; w: number; label: string };

const cols = [20, 184, 348, 512, 676, 840, 1004, 1168];
const W = 150;
const SPAN2 = 314; // two columns + gap

const boxes: Box[] = [
  // Top row — commerce additions (amber border)
  { x: cols[2], y: 20, w: SPAN2, h: 86, variant: "accent", lines: ["Business models & campaigns", "subscription · PPV · vouchers · ads"] },
  { x: cols[4], y: 20, w: W, h: 86, variant: "accent", lines: ["Purchase flows", "& payment", "integration"] },

  // Admin / rights / security
  { x: cols[2], y: 118, w: W, h: 86, variant: "upper", lines: ["Customer &", "product admin"] },
  { x: cols[3], y: 118, w: W, h: 86, variant: "upper", lines: ["Availability", "/ rights"] },
  { x: cols[4], y: 118, w: W, h: 86, variant: "upper", lines: ["Content", "security"] },

  // Frontend (logged-in & logged-out) — spans two rows over consumption
  { x: cols[6], y: 118, w: SPAN2, h: 184, variant: "accent", lines: ["Frontend", "apps & website", "(logged-in & -out)"] },

  // Metadata + ad management
  { x: cols[2], y: 216, w: SPAN2, h: 86, variant: "upper", lines: ["Metadata & content", "management"] },
  { x: cols[4], y: 216, w: W, h: 86, variant: "upper", lines: ["Ad", "management"] },

  // Base row 1 (linear)
  { x: cols[0], y: 314, w: W, h: 150, variant: "base", lines: ["Linear TV", "production"] },
  { x: cols[1], y: 314, w: W, h: 150, variant: "base", lines: ["Live contribution", "for linear", "broadcasts"] },
  { x: cols[2], y: 314, w: W, h: 150, variant: "base", lines: ["Transcoding &", "compression", "(linear)"] },
  { x: cols[3], y: 314, w: W, h: 150, variant: "base", lines: ["Origin & media", "preparation", "(linear)"] },

  // Tall boxes (span both base rows)
  { x: cols[4], y: 314, w: W, h: 312, variant: "base", lines: ["Dynamic", "ad", "insertion"] },
  { x: cols[5], y: 314, w: W, h: 312, variant: "base", lines: ["Media", "distribution"] },
  { x: cols[6], y: 314, w: W, h: 312, variant: "base", lines: ["Video player"] },
  { x: cols[7], y: 314, w: W, h: 312, variant: "base", lines: ["Tracking &", "analytics"] },

  // Base row 2 (VOD)
  { x: cols[0], y: 476, w: W, h: 150, variant: "base", lines: ["VOD", "production"] },
  { x: cols[1], y: 476, w: W, h: 150, variant: "base", lines: ["Batch transfer", "for VOD content"] },
  { x: cols[2], y: 476, w: W, h: 150, variant: "base", lines: ["Transcoding &", "compression", "(VOD)"] },
  { x: cols[3], y: 476, w: W, h: 150, variant: "base", lines: ["Origin & media", "preparation", "(VOD)"] },
];

const banners: Banner[] = [
  { x: cols[0], w: W, label: "Production" },
  { x: cols[1], w: W, label: "Contribution" },
  { x: cols[2], w: 478, label: "Media Preparation" },
  { x: cols[5], w: W, label: "Distribution" },
  { x: cols[6], w: SPAN2, label: "Consumption" },
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
          fontSize={i === 1 && b.variant === "accent" && ln.includes("·") ? 11 : 13.5}
          fill="#ffffff"
          fillOpacity={i === 1 && b.variant === "accent" && ln.includes("·") ? 0.8 : 1}
        >
          {ln}
        </text>
      ))}
    </>
  );
}

export default function ArchDiagram() {
  return (
    <svg viewBox="0 0 1338 738" role="img" aria-label="Media value chain architecture" style={{ width: "100%", height: "auto", display: "block" }}>
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
            stroke={b.variant === "accent" ? "#f59e0b" : "rgba(255,255,255,0.08)"}
            strokeWidth={b.variant === "accent" ? 2 : 1}
          />
          <BoxText b={b} />
        </g>
      ))}

      {/* stage banners (arrows) */}
      {banners.map((bn, i) => {
        const y = 650;
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
