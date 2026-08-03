import { Reveal, SectionMark } from "./ui";
import { Brand } from "./brand";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="sobre" className="relative">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal><SectionMark index="03" label={about.eyebrow} /></Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-8 text-6xl font-extrabold tracking-tightest text-fg lg:text-7xl">
                  {about.name}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 kicker text-fg/40">{about.role}</p>
              </Reveal>
              <Reveal delay={160}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/rafael-bw.jpg"
                  alt="Rafael Tavares, fundador da Sphera"
                  width={520}
                  height={650}
                  className="mt-9 w-44 rounded-2xl border border-white/10 object-cover grayscale sm:w-52"
                  draggable={false}
                />
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 max-w-sm text-2xl font-semibold leading-snug text-fg">
                  “{about.quote}”
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 40}>
                  <p
                    className={
                      i === 0
                        ? "text-xl leading-relaxed text-fg"
                        : "text-[15px] leading-relaxed text-fg/55"
                    }
                  >
                    <Brand>{p}</Brand>
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={80}>
              <div className="mt-12 border-t border-white/10 pt-8">
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {about.tags.map((tag) => (
                    <li key={tag} className="text-[13px] font-medium tracking-wide text-fg/50">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
