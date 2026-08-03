import { Reveal, Kicker } from "./ui";
import { belief } from "@/lib/content";

/** Banda da crença — a tese com dado (Sebrae), momento próprio. */
export function Belief() {
  return (
    <section className="relative border-y border-white/10 bg-bg2">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <Kicker>{belief.eyebrow}</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <p className="display mt-7 max-w-4xl text-3xl font-bold leading-[1.06] tracking-tight text-fg sm:text-5xl">
            {belief.lead} <span className="text-accent">{belief.emphasis}</span>
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fg/60">
            {belief.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
