"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`kicker ${className}`}>{children}</span>;
}

export function SectionMark({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="font-display text-sm font-semibold tabular-nums text-accent">
        {index}
      </span>
      <span className="reveal-line h-px w-12 origin-left bg-accent/50" />
      <Kicker>{label}</Kicker>
    </div>
  );
}

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

function initialTransform(from: string) {
  switch (from) {
    case "left":
      return "translateX(-34px)";
    case "right":
      return "translateX(34px)";
    case "fade":
      return "none";
    case "scale":
      return "scale(0.94)";
    default:
      return "translateY(30px)";
  }
}

/**
 * Refined scroll reveal — soft, slow, directional. Elements can enter from
 * up (default), left, right, fade or scale, at staggered delays.
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  from?: "up" | "left" | "right" | "fade" | "scale";
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setReduced(true);
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as any;
  const style: CSSProperties = reduced
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : initialTransform(from),
        transition: `opacity 1s ${EASE}, transform 1.15s ${EASE}`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      };

  return (
    <Component ref={ref} className={className} style={style}>
      {children}
    </Component>
  );
}

/**
 * Extremely discreet parallax. Translates its child vertically as it moves
 * through the viewport. `speed` positive = moves slower than scroll (drifts up).
 */
export function Parallax({
  children,
  speed = 0.08,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const centre = rect.top + rect.height / 2;
      const delta = centre - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-delta * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
