/* eslint-disable @next/next/no-img-element */
import { Fragment, type ReactNode } from "react";

/** Official Sphera logotype (white wordmark + orange sphere). */
export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <img
      src="/brand/sphera-logo.svg"
      alt="Sphera"
      className={`${className} select-none`}
      draggable={false}
    />
  );
}

/** Logo sized to sit inline inside a heading (replaces the typed brand name). */
export function LogoInline({ className = "" }: { className?: string }) {
  return (
    <img
      src="/brand/sphera-logo.svg"
      alt="Sphera"
      className={`inline-block h-[1.05em] w-auto translate-y-[0.1em] select-none ${className}`}
      draggable={false}
    />
  );
}

/**
 * Renders body text, highlighting every "Sphera" occurrence in orange so the
 * brand name stands out against the dark background.
 */
export function Brand({ children }: { children: string }): ReactNode {
  const parts = children.split("Sphera");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <span className="font-semibold text-accent">Sphera</span>
      )}
    </Fragment>
  ));
}

/**
 * Spinning sphere motif — a wireframe globe with an orange core.
 * The rings rotate continuously (the "Sphera" spin).
 */
export function Sphere({
  className = "",
  speed = 18,
  showCore = true,
}: {
  className?: string;
  /** Rotation duration in seconds (lower = faster). Vary per section. */
  speed?: number;
  showCore?: boolean;
}) {
  const slow = { transformOrigin: "100px 100px", animationDuration: `${speed}s` };
  const rev = { transformOrigin: "100px 100px", animationDuration: `${speed * 1.45}s` };
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="spin-slow" style={slow}>
        <circle cx="100" cy="100" r="82" stroke="rgb(226 114 23 / 0.35)" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="82" ry="30" stroke="rgb(226 114 23 / 0.5)" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="82" ry="58" stroke="rgb(226 114 23 / 0.25)" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="30" ry="82" stroke="rgb(226 114 23 / 0.5)" strokeWidth="1" />
        <ellipse cx="100" cy="100" rx="58" ry="82" stroke="rgb(226 114 23 / 0.25)" strokeWidth="1" />
      </g>
      <g className="spin-rev" style={rev}>
        <ellipse
          cx="100"
          cy="100"
          rx="82"
          ry="44"
          stroke="rgb(255 141 43 / 0.35)"
          strokeWidth="1"
          transform="rotate(45 100 100)"
        />
      </g>
      {showCore && (
        <>
          <circle cx="100" cy="100" r="15" fill="rgb(226 114 23)" />
          <circle cx="100" cy="100" r="15" fill="rgb(255 141 43 / 0.5)" className="glow-pulse" />
        </>
      )}
    </svg>
  );
}
