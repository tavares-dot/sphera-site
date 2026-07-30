import { Reveal, SectionMark } from "./ui";
import { Brand } from "./brand";
import { services } from "@/lib/content";

const cols = [
  { key: "problem" as const, label: "Problema" },
  { key: "structure" as const, label: "O que estruturamos" },
  { key: "result" as const, label: "Resultado" },
];

export function Services() {
  return (
    <section id="servicos" className="relative">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-36">
        <div className="max-w-3xl">
          <Reveal><SectionMark index="04" label={services.eyebrow} /></Reveal>
          <Reveal delay={80}>
            <h2 className="d-1 display mt-8 text-fg">{services.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-fg/55">
              <Brand>{services.intro}</Brand>
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:mt-20">
          {services.items.map((service, i) => (
            <Reveal key={service.title} from="scale" delay={i * 80}>
              <article className="group rounded-3xl border border-white/10 bg-bg2 p-7 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-bg3 lg:p-9">
                <div className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-10">
                  <div className="lg:col-span-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-sm font-bold tabular-nums text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl font-bold tracking-tight text-fg">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
                    {cols.map((col) => (
                      <div key={col.key}>
                        <p className="kicker text-fg/40">{col.label}</p>
                        <p className="mt-3 text-[15px] leading-relaxed text-fg/60">
                          {service[col.key]}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
