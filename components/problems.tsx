import { Reveal, SectionMark } from "./ui";
import { problems } from "@/lib/content";

export function Problems() {
  return (
    <section id="diagnostico" className="relative">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal><SectionMark index="01" label={problems.eyebrow} /></Reveal>
              <Reveal delay={80}>
                <h2 className="d-diag display mt-8 text-balance text-fg">
                  {problems.title}
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-8 max-w-md text-base leading-relaxed text-fg/55">
                  {problems.intro}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul>
              {problems.items.map((item, i) => (
                <Reveal as="li" key={item.title} delay={i * 60}>
                  <div className="group grid grid-cols-[auto_1fr] gap-x-6 border-t border-white/10 py-7 transition-colors first:border-t-0 first:pt-0 hover:border-accent/40">
                    <span className="font-mono text-sm font-bold tabular-nums text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-fg">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-fg/55">
                        {item.description}
                      </p>
                    </div>
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
