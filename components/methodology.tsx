import { Reveal, SectionMark } from "./ui";
import { LogoInline } from "./brand";
import { methodology } from "@/lib/content";

export function Methodology() {
  return (
    <section id="metodologia" className="relative bg-bg2">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-36">
        <div className="max-w-3xl">
          <Reveal><SectionMark index="02" label={methodology.eyebrow} /></Reveal>
          <Reveal delay={80}>
            <h2 className="d-1 display mt-8 text-fg">
              A Metodologia <LogoInline className="ml-1" />
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fg/55">
              {methodology.intro}
            </p>
          </Reveal>
        </div>

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
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
