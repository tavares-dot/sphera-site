import { Reveal, Kicker } from "./ui";
import { result } from "@/lib/content";

/**
 * Bloco "O resultado" — dá protagonismo à promessa central da marca
 * ("A empresa andando sem você."), como ponte entre a abertura e o diagnóstico.
 */
export function Result() {
  return (
    <section className="relative border-y border-white/10 bg-bg2">
      <div className="mx-auto max-w-wide px-5 py-28 lg:px-10 lg:py-40">
        <Reveal>
          <Kicker>{result.eyebrow}</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-7 max-w-[15ch] text-balance text-4xl font-extrabold leading-[1.03] tracking-tightest text-fg sm:text-6xl lg:text-8xl">
            {result.titleLead}{" "}
            <span className="text-accent">{result.titleEmphasis}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal delay={140} className="lg:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-fg/60">
              {result.body}
            </p>
          </Reveal>
          <Reveal delay={200} className="lg:col-span-5 lg:col-start-8">
            <p className="border-l-2 border-accent pl-5 text-xl font-semibold leading-snug text-fg">
              {result.support}
            </p>
          </Reveal>
        </div>

        {/* assinatura discreta: caos -> ordem (estática) */}
        <Reveal delay={260}>
          <svg
            aria-hidden
            className="mt-14 h-6 w-44 opacity-70"
            viewBox="0 0 300 40"
            fill="none"
          >
            <path
              d="M2,20 C10,4 22,36 33,20 C44,7 40,34 55,20 C71,9 95,31 120,20 L282,20"
              stroke="#E27217"
              strokeOpacity="0.7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="290" cy="20" r="6" fill="#E27217" />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
