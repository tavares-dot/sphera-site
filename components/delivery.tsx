import { Reveal, Kicker } from "./ui";
import { Checkpoint } from "./signature";
import { delivery } from "@/lib/content";

/**
 * "O que fica rodando na empresa" (Ajuste 7) — reforça o que permanece
 * funcionando, com checkpoints ligados por uma linha de progressão.
 * Não é proposta nem escopo: é o resultado virando rotina.
 */
export function Delivery() {
  return (
    <section className="relative border-y border-white/10 bg-bg2">
      <div className="mx-auto max-w-wide px-5 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Kicker>Entrega</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="d-2 display mt-7 text-fg">{delivery.title}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-md border-l-2 border-accent pl-5 text-lg font-semibold leading-snug text-fg">
                {delivery.note}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="relative">
              <span
                aria-hidden
                className="absolute bottom-6 left-[7px] top-6 w-px bg-accent/25"
              />
              {delivery.items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 70}>
                  <div className="flex items-center gap-5 py-4">
                    <span className="relative z-10 rounded-full bg-bg2">
                      <Checkpoint className="h-4 w-4 shrink-0" />
                    </span>
                    <span className="text-lg text-fg/85">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
