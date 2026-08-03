"use client";

import { useEffect, useState } from "react";
import { Logo } from "./brand";
import { nav } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[88px] max-w-wide items-center justify-between px-5 lg:px-10">
        <a href="#top" aria-label="SPHERA" className="shrink-0">
          <Logo className="h-14 w-auto lg:h-[3.9rem]" />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item, i) => {
            const orange = i % 2 === 0;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-[12px] font-bold uppercase tracking-[0.14em] ${
                  orange ? "link-line-white text-accent" : "link-line text-fg"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a href="/onboarding" className="btn-accent hidden md:inline-flex">
          Solicitar Diagnóstico
          <span aria-hidden>→</span>
        </a>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span className={`h-0.5 w-6 bg-fg transition-transform ${open ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-fg transition-transform ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-bg/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-wide flex-col px-5 py-3">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-4 text-base font-bold last:border-0 ${
                  i % 2 === 0 ? "text-accent" : "text-fg"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a href="/onboarding" onClick={() => setOpen(false)} className="btn-accent mt-4 justify-center">
              Solicitar Diagnóstico →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
