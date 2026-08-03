import { Kicker, Reveal, Parallax } from "./ui";
import { Sphere } from "./brand";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* background glow */}
      <div aria-hidden className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      {/* faint grid */}
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-[0.05]" />
      {/* spinning sphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-14%] top-[14%] -z-10 h-[70vw] w-[70vw] max-h-[820px] max-w-[820px] opacity-90 lg:right-[-4%]"
      >
        <Parallax speed={0.06} className="relative h-full w-full">
          <div className="absolute inset-[16%] rounded-full bg-accent/20 blur-[80px] glow-pulse" />
          <div className="hero-float h-full w-full">
            <Sphere className="h-full w-full" />
          </div>
        </Parallax>
      </div>

      <div className="mx-auto flex min-h-[100svh] max-w-wide flex-col justify-center px-5 pb-24 pt-32 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <Kicker>{hero.eyebrow}</Kicker>
            <span className="h-px w-16 bg-white/20" />
          </div>
        </Reveal>

        <h1 className="d-hero display mt-8 max-w-[16ch] text-balance text-fg">
          <Reveal as="span" delay={60} className="block">
            A gente não só aconselha.
          </Reveal>
          <Reveal as="span" delay={200} className="block text-accent">
            <span className="relative inline-block">
              Executa junto.
              <svg
                aria-hidden
                className="hero-underline pointer-events-none absolute left-0 top-full w-full"
                style={{ height: "0.2em" }}
                viewBox="0 0 300 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  className="draw-path"
                  pathLength={1}
                  d="M3,9 C55,3 110,12 165,6 C215,1 262,11 297,5"
                  stroke="#E27217"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </Reveal>
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal delay={300}>
            <p className="max-w-xl text-lg leading-relaxed text-fg/60">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={site.whatsappCta}
                target="_blank"
                rel="noopener noreferrer"
                data-magnetic
                className="btn-accent justify-center"
              >
                {hero.primaryCta}
                <span aria-hidden>→</span>
              </a>
              <a href="#metodologia" className="btn-ghost justify-center">
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={480}>
          <svg
            aria-hidden
            className="chaos mt-14 h-8 w-52 sm:w-60"
            viewBox="0 0 300 40"
            fill="none"
          >
            <path
              className="draw-path"
              pathLength={1}
              d="M2,20 C10,4 22,36 33,20 C44,7 40,34 55,20 C71,9 95,31 120,20 L282,20"
              stroke="#E27217"
              strokeOpacity="0.85"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle className="pop-dot" cx="290" cy="20" r="7" fill="#E27217" />
          </svg>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            {hero.meta.map((m, i) => (
              <div key={m} className="flex items-center sm:flex-1">
                {i > 0 && <span aria-hidden className="mr-6 hidden h-1.5 w-1.5 rounded-full bg-accent sm:block" />}
                <span className="text-[13px] font-medium tracking-wide text-fg/55">{m}</span>
              </div>
            ))}
            <span className="hidden text-[13px] font-medium tracking-wide text-fg/40 lg:block">
              {site.tagline}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
