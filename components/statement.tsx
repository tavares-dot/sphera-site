import { Reveal, Parallax } from "./ui";
import { Sphere } from "./brand";
import { manifesto } from "@/lib/content";

export function Statement() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-bg2">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-10%] top-1/2 h-[40vw] w-[40vw] -translate-y-1/2 opacity-40"
      >
        <Parallax speed={0.05} className="h-full w-full">
          <Sphere className="h-full w-full" speed={34} showCore={false} />
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
        </div>
      </div>
    </section>
  );
}
