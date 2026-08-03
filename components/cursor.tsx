"use client";

import { useEffect } from "react";

/**
 * Cursor personalizado discreto (ponto laranja) + botões magnéticos.
 * Somente desktop com ponteiro fino; desligado no toque e no reduced-motion.
 * Nunca remove o cursor real (acessibilidade) — é uma camada decorativa.
 */
export function Cursor() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    const dot = document.createElement("div");
    dot.className = "sph-cursor";
    document.body.appendChild(dot);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let hovering = false;
    let raf = 0;

    const magnets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]")
    );
    const state = new Map<HTMLElement, { x: number; y: number }>();

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target as HTMLElement;
      hovering = !!t.closest(
        "a, button, [data-magnetic], input, textarea, select, label"
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      const s = hovering ? 1.9 : 1;
      dot.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(
        1
      )}px, 0) translate(-50%, -50%) scale(${s})`;

      for (const m of magnets) {
        const r = m.getBoundingClientRect();
        const bx = r.left + r.width / 2;
        const by = r.top + r.height / 2;
        const dist = Math.hypot(mx - bx, my - by);
        const st = state.get(m) || { x: 0, y: 0 };
        let tx = 0;
        let ty = 0;
        if (dist < Math.max(r.width, r.height) * 0.9 + 40) {
          tx = (mx - bx) * 0.25;
          ty = (my - by) * 0.25;
        }
        st.x += (tx - st.x) * 0.15;
        st.y += (ty - st.y) * 0.15;
        state.set(m, st);
        if (Math.abs(st.x) < 0.1 && Math.abs(st.y) < 0.1) {
          m.style.transform = "";
        } else {
          m.style.transform = `translate(${st.x.toFixed(2)}px, ${st.y.toFixed(
            2
          )}px)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      dot.remove();
      for (const m of magnets) m.style.transform = "";
    };
  }, []);

  return null;
}
