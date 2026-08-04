/**
 * Sistema gráfico reutilizável da marca (assinatura visual).
 * Todos os elementos são decorativos (aria-hidden), em SVG inline,
 * usando o laranja da marca. Usar com moderação — reforço, não decoração.
 */

const ORANGE = "#E27217";

/** Círculo imperfeito, aberto, com ponto laranja fechando. */
export function IncompleteCircle({
  className = "h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <svg aria-hidden viewBox="0 0 44 44" fill="none" className={className}>
      <path
        d="M34 10 A16 16 0 1 0 36 24"
        stroke={ORANGE}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="36" cy="24" r="3.6" fill={ORANGE} />
    </svg>
  );
}

/** Traço à mão (sublinhado orgânico) — para destacar a palavra que importa. */
export function HandUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 14"
      fill="none"
      preserveAspectRatio="none"
      className={className}
    >
      <path
        d="M3,9 C55,3 110,12 165,6 C215,1 262,11 297,5"
        stroke={ORANGE}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Rabisco (caos) que se organiza numa linha reta, terminando em ponto laranja. */
export function ChaosLine({ className = "h-6 w-44" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 300 40" fill="none" className={className}>
      <path
        d="M2,20 C10,4 22,36 33,20 C44,7 40,34 55,20 C71,9 95,31 120,20 L282,20"
        stroke={ORANGE}
        strokeOpacity="0.7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="290" cy="20" r="6" fill={ORANGE} />
    </svg>
  );
}

/** Checkpoint — anel (em andamento) ou ponto cheio (concluído). */
export function Checkpoint({
  done = true,
  className = "h-4 w-4",
}: {
  done?: boolean;
  className?: string;
}) {
  return (
    <svg aria-hidden viewBox="0 0 16 16" fill="none" className={className}>
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke={ORANGE}
        strokeWidth="1.6"
        strokeOpacity={done ? "1" : "0.5"}
        fill={done ? ORANGE : "none"}
      />
    </svg>
  );
}

/** Seta de recomeço (o ciclo volta ao início). */
export function LoopArrow({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color: ORANGE }}
    >
      <path
        d="M20 12a8 8 0 1 1-2.34-5.66"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 3v4h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
