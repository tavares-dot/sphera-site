import { Reveal, Kicker } from "./ui";
import { HandUnderline } from "./signature";
import { belief } from "@/lib/content";

/** Banda da crença (Ajuste 4) — mais contraste tipográfico e traço à mão em "organização". */
export function Belief() {
  const [pre, post] = belief.emphasis.split("organização");
  return (
    <section className="relative border-y border-white/10 bg-bg2">
      <div className="mx-auto max-w-wide px-5 py-28 lg:px-10 lg:py-36">
        <Reveal>
          <Kicker>{belief.eyebrow}</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <p className="display mt-8 max-w-4xl text-balance text-4xl font-extrabold leading-[1.04] tracking-tight text-fg sm:text-6xl">
            {belief.lead}{" "}
            <span className="text-accent">
              {pre}
              <span className="relative inline-block">
                organização
                <HandUnderline className="absolute left-0 top-full h-[0.16em] w-full" />
              </span>
              {post}
            </span>
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg/65">
            {belief.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
