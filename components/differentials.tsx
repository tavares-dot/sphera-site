import { Reveal, SectionMark } from "./ui";
import { LogoInline } from "./brand";
import { differentials } from "@/lib/content";

export function Differentials() {
  return (
    <section className="relative bg-bg2">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal><SectionMark index="05" label={differentials.eyebrow} /></Reveal>
            <Reveal delay={80}>
              <h2 className="d-1 display mt-8 text-fg">
                Por que a <LogoInline className="ml-1" />
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid gap-x-12 sm:grid-cols-2">
              {differentials.items.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 60}>
                  <div className="group border-t border-white/10 py-7 transition-colors hover:border-accent/40">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-150" />
                      <h3 className="font-display text-lg font-bold text-fg">{item.title}</h3>
                    </div>
                    <p className="mt-2 pl-5 text-[15px] leading-relaxed text-fg/55">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
