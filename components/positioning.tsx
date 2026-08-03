import { Reveal, SectionMark } from "./ui";
import { positioning } from "@/lib/content";

export function Positioning() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-36">
        <Reveal><SectionMark index="06" label={positioning.eyebrow} /></Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="kicker text-fg/40">{positioning.isNot.label}</p>
              <ul className="mt-6 space-y-3">
                {positioning.isNot.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-2xl font-bold text-fg/30 line-through decoration-accent/40 decoration-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={100}>
              <p className="kicker text-accent">A SPHERA é</p>
              <p className="display mt-6 max-w-[22ch] text-3xl font-extrabold leading-[1.08] tracking-tight text-fg sm:text-4xl lg:text-5xl">
                {positioning.is.text}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
