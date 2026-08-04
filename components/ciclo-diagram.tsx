import { methodology } from "@/lib/content";

/**
 * Ciclo Sphera — diagrama circular (fiel à apresentação institucional):
 * 6 passos ao redor de um círculo, com o rabisco (caos) e a seta entrando.
 * Usado no desktop; no mobile a seção mostra a lista vertical.
 */

const CX = 390;
const CY = 340;
const R = 215;

// Posição de cada passo (12h, 2h, 4h, 6h, 8h, 10h) + ancoragem do rótulo.
const POS = [
  { dx: 390, dy: 125, lx: 390, ly: 62, anchor: "middle" as const },
  { dx: 576, dy: 233, lx: 602, ly: 216, anchor: "start" as const },
  { dx: 576, dy: 448, lx: 602, ly: 431, anchor: "start" as const },
  { dx: 390, dy: 555, lx: 390, ly: 596, anchor: "middle" as const },
  { dx: 204, dy: 448, lx: 178, ly: 431, anchor: "end" as const },
  { dx: 204, dy: 233, lx: 178, ly: 216, anchor: "end" as const },
];

export function CicloDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 780 680"
      fill="none"
      role="img"
      aria-label="Ciclo Sphera: entender, planejar, organizar, executar, acompanhar e crescer, em um ciclo contínuo."
      className={className}
    >
      {/* círculo */}
      <circle cx={CX} cy={CY} r={R} stroke="#E27217" strokeWidth="2" />

      {/* caos (rabisco) que entra no ciclo */}
      <path
        d="M243,150 c-16,-6 -30,10 -20,24 c10,14 34,10 36,-6 c2,-16 -22,-24 -36,-12 c-14,12 -8,34 12,38 c20,4 34,-16 24,-34"
        stroke="#E27217"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M250,196 C242,208 230,216 217,223"
        stroke="#E27217"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M217,223 l12,-2 M217,223 l-2,-12"
        stroke="#E27217"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* pontos e rótulos */}
      {POS.map((p, i) => {
        const st = methodology.stages[i];
        const start = i === 5;
        return (
          <g key={st.n}>
            <circle
              cx={p.dx}
              cy={p.dy}
              r={start ? 9 : 7}
              fill={start ? "#E27217" : "#181614"}
            />
            <text
              x={p.lx}
              y={p.ly}
              textAnchor={p.anchor}
              fill="#E27217"
              fontSize="15"
              fontWeight="700"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em" }}
            >
              {st.n}
            </text>
            <text
              x={p.lx}
              y={p.ly + 25}
              textAnchor={p.anchor}
              fill="#181614"
              fontSize="21"
              fontWeight="800"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
            >
              {st.key}
            </text>
            <text
              x={p.lx}
              y={p.ly + 46}
              textAnchor={p.anchor}
              fill="#181614"
              fillOpacity="0.5"
              fontSize="15"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {st.word}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
