import { Reveal } from "./ui";
import { ChaosLine } from "./signature";
import { pause } from "@/lib/content";

/** Pausa emocional antes do diagnóstico (Ajuste 2) — só uma frase, muito respiro. */
export function Pause() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-wide px-5 py-28 lg:px-10 lg:py-40">
        <Reveal>
          <ChaosLine className="h-6 w-40 opacity-70" />
        </Reveal>
        <Reveal delay={100}>
          <p className="display mt-8 max-w-[22ch] text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {pause.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
