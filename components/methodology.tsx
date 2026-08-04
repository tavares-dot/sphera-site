import { Reveal, SectionMark } from "./ui";
import { CicloDiagram } from "./ciclo-diagram";
import { methodology } from "@/lib/content";

/**
 * Ciclo Sphera — seção CLARA (alternância claro/escuro), para o diagrama
 * circular fazer parte do bloco em vez de ser um painel solto no escuro.
 */
export function Methodology() {
  return (
    <section id="metodologia" className="relative bg-fg text-bg">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <SectionMark index="02" label={methodology.eyebrow} />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="d-1 display mt-8 text-bg">
              Ciclo Sphera
              <span
                aria-hidden
                className="ml-2 inline-block h-[0.42em] w-[0.42em] translate-y-[-0.08em] rounded-full bg-accent align-baseline"
              />
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-bg/60">
              {methodology.intro}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 text-sm leading-relaxed text-bg/45">
              {methodology.cycleSupport}
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="mt-12 hidden lg:mt-16 lg:block">
            <CicloDiagram className="mx-auto block h-auto w-full max-w-2xl" />
          </div>
        </Reveal>

        <div className="mt-16 lg:mt-20">
          {methodology.stages.map((stage) => (
            <Reveal key={stage.n}>
              <div className="group grid grid-cols-1 items-baseline gap-y-3 border-t border-bg/10 py-8 transition-colors hover:border-accent/50 md:grid-cols-12 md:gap-x-8 md:py-9">
                <div className="md:col-span-2">
                  <span className="font-display text-4xl font-extrabold tabular-nums text-bg/20 transition-colors group-hover:text-accent">
                    {stage.n}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <span className="kicker">{stage.key}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-bg">
                    {stage.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="max-w-lg text-[15px] leading-relaxed text-bg/60">
                    {stage.description}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-[13px] font-medium text-accent">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                    {stage.benefit}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="flex items-center gap-4 border-t border-bg/10 pt-8">
              <svg
                aria-hidden
                className="h-5 w-5 shrink-0 text-accent"
                viewBox="0 0 24 24"
                fill="none"
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
              <p className="text-[15px] leading-relaxed text-bg/70">
                {methodology.cycleNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
