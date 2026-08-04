import { Reveal, Kicker } from "./ui";
import { IncompleteCircle } from "./signature";
import { result } from "@/lib/content";

/**
 * Bloco "O resultado" (Ajuste 3) — o título domina; uma única linha de apoio
 * com o círculo incompleto; o texto explicativo fica abaixo, em corpo menor.
 */
export function Result() {
  return (
    <section className="relative border-y border-white/10 bg-bg2">
      <div className="mx-auto max-w-wide px-5 py-32 lg:px-10 lg:py-44">
        <Reveal>
          <Kicker>{result.eyebrow}</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-8 max-w-[14ch] text-balance text-5xl font-extrabold leading-[1.0] tracking-tightest text-fg sm:text-7xl lg:text-[7rem]">
            {result.titleLead}{" "}
            <span className="text-accent">{result.titleEmphasis}</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-12 flex items-center gap-5">
            <IncompleteCircle className="h-10 w-10 shrink-0" />
            <p className="max-w-md text-lg font-semibold leading-snug text-fg sm:text-xl">
              {result.support}
            </p>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-fg/55">
            {result.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
