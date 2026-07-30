"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/content";
import { Logo } from "@/components/brand";

type FieldType =
  | "text"
  | "tel"
  | "email"
  | "textarea"
  | "select"
  | "choice"
  | "multi";

interface Field {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  half?: boolean;
}

interface Step {
  title: string;
  subtitle?: string;
  fields: Field[];
}

const DESAFIOS = [
  "CRM sem utilização",
  "Vendas sem previsibilidade",
  "Falta de indicadores",
  "Dependência de pessoas-chave",
  "Marketing desconectado do comercial",
  "Processos desorganizados",
];

const STEPS: Step[] = [
  {
    title: "Vamos começar pelo básico",
    subtitle: "Para quem preparamos o diagnóstico.",
    fields: [
      { name: "nome", label: "Seu nome", type: "text", required: true, half: true },
      { name: "cargo", label: "Cargo", type: "text", half: true },
      { name: "email", label: "E-mail", type: "email", required: true, half: true },
      { name: "whatsapp", label: "WhatsApp", type: "tel", required: true, half: true },
      { name: "empresa", label: "Empresa", type: "text", required: true },
    ],
  },
  {
    title: "Sobre a empresa",
    fields: [
      {
        name: "segmento",
        label: "Segmento / setor",
        type: "text",
        placeholder: "Ex.: Indústria, SaaS, Serviços…",
      },
      {
        name: "tempo_operacao",
        label: "Tempo de operação",
        type: "choice",
        options: ["Menos de 1 ano", "1 a 3 anos", "3 a 10 anos", "Mais de 10 anos"],
      },
      {
        name: "colaboradores",
        label: "Número de colaboradores",
        type: "select",
        options: ["1 a 5", "6 a 20", "21 a 50", "51 a 100", "Mais de 100"],
      },
    ],
  },
  {
    title: "Porte comercial",
    fields: [
      {
        name: "faturamento",
        label: "Faturamento anual",
        type: "select",
        options: [
          "Até R$ 500 mil",
          "R$ 500 mil a R$ 2 mi",
          "R$ 2 mi a R$ 10 mi",
          "R$ 10 mi a R$ 50 mi",
          "Acima de R$ 50 mi",
          "Prefiro não informar",
        ],
      },
      {
        name: "vendedores",
        label: "Tamanho do time de vendas",
        type: "choice",
        options: ["Nenhum", "1 a 3", "4 a 10", "Mais de 10"],
      },
    ],
  },
  {
    title: "Estrutura comercial atual",
    fields: [
      {
        name: "usa_crm",
        label: "A empresa usa CRM?",
        type: "choice",
        options: ["Sim", "Parcialmente", "Não"],
      },
      {
        name: "processo_vendas",
        label: "Existe um processo de vendas definido?",
        type: "choice",
        options: ["Sim", "Parcialmente", "Não"],
      },
    ],
  },
  {
    title: "Principais desafios",
    subtitle: "Selecione todos que se aplicam.",
    fields: [{ name: "desafios", label: "", type: "multi", options: DESAFIOS }],
  },
  {
    title: "Objetivo de crescimento",
    fields: [
      {
        name: "objetivo",
        label: "Onde você quer que a empresa esteja em 12 meses?",
        type: "textarea",
        required: true,
        placeholder: "Descreva sua meta para o próximo ano.",
      },
    ],
  },
  {
    title: "Urgência",
    fields: [
      {
        name: "inicio",
        label: "Quando pretende começar?",
        type: "choice",
        options: [
          "Imediatamente",
          "Nos próximos 1–3 meses",
          "Em 3–6 meses",
          "Ainda explorando",
        ],
      },
      {
        name: "ja_investe",
        label: "Já investe em consultoria/assessoria?",
        type: "choice",
        options: ["Sim", "Não"],
      },
    ],
  },
  {
    title: "Contexto e agenda",
    fields: [
      {
        name: "contexto",
        label: "Algo mais sobre o momento da empresa?",
        type: "textarea",
        placeholder: "Contexto livre (opcional).",
      },
      {
        name: "melhor_horario",
        label: "Melhor horário para contato",
        type: "text",
        placeholder: "Ex.: manhãs, após as 18h, dias úteis…",
      },
    ],
  },
];

const INPUT =
  "mt-3 w-full border-0 border-b border-white/20 bg-transparent pb-2 text-base text-fg outline-none transition-colors focus:border-accent";

export function OnboardingForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Record<string, string | string[]>>({
    desafios: [],
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const total = STEPS.length;
  const current = STEPS[step];
  const isLast = step === total - 1;

  function setValue(name: string, value: string | string[]) {
    setData((d) => ({ ...d, [name]: value }));
  }
  function toggleMulti(name: string, option: string) {
    setData((d) => {
      const arr = Array.isArray(d[name]) ? (d[name] as string[]) : [];
      return {
        ...d,
        [name]: arr.includes(option)
          ? arr.filter((o) => o !== option)
          : [...arr, option],
      };
    });
  }

  function stepValid(): boolean {
    for (const f of current.fields) {
      if (!f.required) continue;
      const v = data[f.name];
      if (f.type === "multi") {
        if (!Array.isArray(v) || v.length === 0) return false;
      } else if (!v || (typeof v === "string" && v.trim() === "")) {
        return false;
      }
    }
    return true;
  }

  function next() {
    setError(null);
    if (!stepValid()) {
      setError("Preencha os campos obrigatórios.");
      return;
    }
    if (isLast) {
      submit();
      return;
    }
    setStep((s) => Math.min(s + 1, total - 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }
  function back() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Erro ao enviar.");
      setDone(true);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Não foi possível enviar. Tente novamente."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function whatsappSummary() {
    const desafios = Array.isArray(data.desafios)
      ? (data.desafios as string[]).join(", ")
      : "";
    const lines = [
      "Olá! Preenchi o diagnóstico no site da SPHERA.",
      "",
      `Nome: ${data.nome || ""}`,
      `Empresa: ${data.empresa || ""}`,
      `E-mail: ${data.email || ""}`,
      `Segmento: ${data.segmento || ""}`,
      `Desafios: ${desafios}`,
      `Objetivo: ${data.objetivo || ""}`,
    ];
    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  }

  if (done) {
    const first = String(data.nome || "").split(" ")[0];
    return (
      <main className="min-h-screen bg-bg text-fg">
        <TopBar />
        <div className="mx-auto max-w-2xl px-5 py-24 text-center">
          <p className="kicker">Recebido</p>
          <h1 className="display mt-6 text-5xl font-extrabold">
            Diagnóstico solicitado.
          </h1>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-fg/60">
            Obrigado{first ? `, ${first}` : ""}. Recebemos suas respostas e
            entraremos em contato para agendar o seu Diagnóstico Estratégico.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={whatsappSummary()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent"
            >
              Adiantar pelo WhatsApp <span aria-hidden>→</span>
            </a>
            <Link href="/" className="link-line text-sm text-fg/50">
              Voltar ao site
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg text-fg">
      <TopBar />
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-10">
        <div className="flex items-center justify-between text-[12px] font-medium tracking-wide text-fg/40">
          <span>
            Passo {step + 1} de {total}
          </span>
          <span>{Math.round(((step + 1) / total) * 100)}%</span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500"
            style={{ width: `${((step + 1) / total) * 100}%` }}
          />
        </div>

        <div className="mt-12">
          <h1 className="display text-3xl font-extrabold sm:text-4xl">
            {current.title}
          </h1>
          {current.subtitle && (
            <p className="mt-3 text-fg/50">{current.subtitle}</p>
          )}

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {current.fields.map((f) => (
              <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
                {renderField(f)}
              </div>
            ))}
          </div>

          {error && <p className="mt-6 text-sm text-accent-hi">{error}</p>}

          <div className="mt-12 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="btn-ghost disabled:pointer-events-none disabled:opacity-30"
            >
              <span aria-hidden>←</span> Voltar
            </button>
            <button
              type="button"
              onClick={next}
              disabled={submitting}
              className="btn-accent disabled:opacity-60"
            >
              {submitting ? "Enviando…" : isLast ? "Enviar" : "Continuar"}
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );

  function renderField(f: Field) {
    const value = data[f.name];
    const label = f.label ? (
      <span className="text-[13px] font-medium tracking-wide text-fg/50">
        {f.label}
        {f.required && <span className="ml-1 text-accent">*</span>}
      </span>
    ) : null;

    if (f.type === "textarea") {
      return (
        <label className="block">
          {label}
          <textarea
            rows={3}
            value={(value as string) || ""}
            placeholder={f.placeholder}
            onChange={(e) => setValue(f.name, e.target.value)}
            className={`${INPUT} resize-none`}
          />
        </label>
      );
    }
    if (f.type === "select") {
      return (
        <label className="block">
          {label}
          <select
            value={(value as string) || ""}
            onChange={(e) => setValue(f.name, e.target.value)}
            className={`${INPUT} appearance-none`}
          >
            <option value="" className="bg-bg2 text-fg">
              Selecione…
            </option>
            {f.options!.map((o) => (
              <option key={o} value={o} className="bg-bg2 text-fg">
                {o}
              </option>
            ))}
          </select>
        </label>
      );
    }
    if (f.type === "choice") {
      return (
        <div>
          {label}
          <div className="mt-4 flex flex-wrap gap-2.5">
            {f.options!.map((o) => {
              const on = value === o;
              return (
                <button
                  type="button"
                  key={o}
                  onClick={() => setValue(f.name, o)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    on
                      ? "border-accent bg-accent/10 text-fg"
                      : "border-white/15 text-fg/60 hover:border-white/40"
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    if (f.type === "multi") {
      const arr = Array.isArray(value) ? value : [];
      return (
        <div>
          {label}
          <div className="flex flex-wrap gap-2.5">
            {f.options!.map((o) => {
              const on = arr.includes(o);
              return (
                <button
                  type="button"
                  key={o}
                  onClick={() => toggleMulti(f.name, o)}
                  className={`rounded-full border px-4 py-2.5 text-sm transition-colors ${
                    on
                      ? "border-accent bg-accent/10 text-fg"
                      : "border-white/15 text-fg/60 hover:border-white/40"
                  }`}
                >
                  {on ? "✓ " : ""}
                  {o}
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <label className="block">
        {label}
        <input
          type={f.type}
          value={(value as string) || ""}
          placeholder={f.placeholder}
          onChange={(e) => setValue(f.name, e.target.value)}
          className={INPUT}
        />
      </label>
    );
  }
}

function TopBar() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-5">
        <Link href="/" aria-label="SPHERA">
          <Logo className="h-8 w-auto" />
        </Link>
        <Link href="/" className="link-line text-[13px] text-fg/50">
          Voltar ao site
        </Link>
      </div>
    </header>
  );
}
