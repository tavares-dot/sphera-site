"use client";

import { useEffect } from "react";

/**
 * Rolagem suave com inércia (Lenis). Progressive enhancement:
 * se prefers-reduced-motion, não faz nada (scroll nativo).
 * Âncoras (#secao) rolam suave com compensação do header fixo.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: { raf: (t: number) => void; scrollTo: (t: Element, o?: unknown) => void; destroy: () => void } | null =
      null;
    let rafId = 0;
    let cancelled = false;

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const a = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el || !lenis) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -88, duration: 1.2 });
    };

    (async () => {
      try {
        const mod = await import("lenis");
        const Lenis = mod.default;
        if (cancelled) return;
        lenis = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        }) as unknown as typeof lenis;

        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        document.addEventListener("click", onAnchorClick);
      } catch {
        // Se a lib falhar, o site segue com scroll nativo.
      }
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
