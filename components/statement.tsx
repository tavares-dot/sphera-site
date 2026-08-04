import { Reveal, Parallax } from "./ui";
import { Sphere } from "./brand";
import { manifesto, contrast } from "@/lib/content";

export function Statement() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-bg2">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-1/2 h-[40vw] w-[40vw] -translate-y-1/2 opacity-40"
      >
        <Parallax speed={0.05} className="h-full w-full">
          <Sphere className="h-full w-full" />
        </Parallax>
      </div>
      <div className="mx-auto max-w-wide px-5 py-28 lg:px-10 lg:py-40">
        <div className="ml-auto max-w-4xl">
          <Reveal>
            <p className="display text-3xl font-extrabold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
              {manifesto.lead}{" "}
              <span className="text-accent">{manifesto.emphasis}</span>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg/55">
              {manifesto.body}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-12 max-w-xl border-t border-white/10 pt-8">
              <p className="text-lg font-semibold text-fg">{contrast.line}</p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="kicker text-fg/40">{contrast.traditional.label}</p>
                  <p className="mt-2 text-[15px] text-fg/45">
                    {contrast.traditional.steps.join("  →  ")}{" "}
                    <span aria-hidden className="ml-1 text-fg/30">
                      ✕
                    </span>
                  </p>
                </div>
                <div>
                  <p className="kicker text-accent">{contrast.sphera.label}</p>
                  <p className="mt-2 text-[15px] text-fg/80">
                    {contrast.sphera.steps.join("  →  ")}
                    <span
                      aria-hidden
                      className="ml-2 inline-block h-2 w-2 rounded-full bg-accent align-middle"
                    />
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
