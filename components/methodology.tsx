import { Reveal, SectionMark } from "./ui";
import { LogoInline } from "./brand";
import { CicloDiagram } from "./ciclo-diagram";
import { methodology } from "@/lib/content";

export function Methodology() {
  return (
    <section id="metodologia" className="relative bg-bg2">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-36">
        <div className="max-w-3xl">
          <Reveal><SectionMark index="02" label={methodology.eyebrow} /></Reveal>
          <Reveal delay={80}>
            <h2 className="d-1 display mt-8 text-fg">
              Ciclo <LogoInline className="ml-1" />
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fg/55">
              {methodology.intro}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 text-sm leading-relaxed text-fg/45">
              {methodology.cycleSupport}
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="mt-10 hidden lg:mt-14 lg:block">
            <CicloDiagram className="mx-auto h-auto w-full max-w-2xl" />
          </div>
        </Reveal>

        <div className="mt-16 lg:mt-20">
          {methodology.stages.map((stage) => (
            <Reveal key={stage.n}>
              <div className="group grid grid-cols-1 items-baseline gap-y-3 border-t border-white/10 py-8 transition-colors hover:border-accent/40 md:grid-cols-12 md:gap-x-8 md:py-9">
                <div className="md:col-span-2">
                  <span className="font-display text-4xl font-extrabold tabular-nums text-white/15 transition-colors group-hover:text-accent">
                    {stage.n}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <span className="kicker text-fg/40">{stage.key}</span>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-fg">
                    {stage.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="max-w-lg text-[15px] leading-relaxed text-fg/55">
                    {stage.description}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-[13px] font-medium text-accent/85">
                    <span aria-hidden className="h-1 w-1 rounded-full bg-accent/70" />
                    {stage.benefit}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
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
              <p className="text-[15px] leading-relaxed text-fg/60">
                {methodology.cycleNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
