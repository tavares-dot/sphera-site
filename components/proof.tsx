import { Reveal, Kicker } from "./ui";
import { proof } from "@/lib/content";

/** Faixa de prova / credenciais — o lastro (banda escura, estilo slide "LASTRO"). */
export function Proof() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-bg">
      <div className="mx-auto max-w-wide px-5 py-20 lg:px-10 lg:py-24">
        <Reveal>
          <Kicker>{proof.eyebrow}</Kicker>
        </Reveal>

        <div className="mt-9 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal delay={60}>
              <p className="display text-7xl font-bold leading-none tracking-tightest text-accent lg:text-8xl">
                {proof.number}
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-fg/50">
                {proof.numberLabel}
              </p>
              <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-fg/70">
                {proof.lead}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul>
              {proof.items.map((item, i) => (
                <Reveal as="li" key={i} delay={i * 70}>
                  <div className="flex gap-4 border-t border-white/10 py-5 first:border-t-0 first:pt-0">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-[15px] leading-relaxed text-fg/70">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
