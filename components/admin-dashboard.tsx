"use client";

import { useMemo, useState } from "react";
import type { Lead } from "@/lib/leads";
import { Logo } from "@/components/brand";

const LABELS: Record<string, string> = {
  cargo: "Cargo",
  whatsapp: "WhatsApp",
  segmento: "Segmento",
  tempo_operacao: "Tempo de operação",
  colaboradores: "Colaboradores",
  faturamento: "Faturamento",
  vendedores: "Time de vendas",
  usa_crm: "Usa CRM",
  processo_vendas: "Processo de vendas",
  desafios: "Desafios",
  objetivo: "Objetivo",
  inicio: "Quando começar",
  ja_investe: "Já investe",
  contexto: "Contexto",
  melhor_horario: "Melhor horário",
};

function fmtDate(iso: string) {
  try {
    return new Date(iso).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function AdminDashboard({
  leads,
  error,
}: {
  leads: Lead[];
  error: string | null;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return leads;
    return leads.filter((l) =>
      [l.nome, l.empresa, l.email, l.segmento]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [leads, query]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <main className="min-h-screen bg-bg text-fg">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-auto" />
            <span className="text-sm text-fg/40">Leads</span>
          </div>
          <button
            onClick={logout}
            className="link-line text-[13px] text-fg/50"
          >
            Sair
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="display text-3xl font-extrabold">Diagnósticos</h1>
            <p className="mt-1 text-sm text-fg/50">
              {leads.length} {leads.length === 1 ? "lead" : "leads"} no total
            </p>
          </div>
          <input
            placeholder="Buscar por nome, empresa, e-mail…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-xs border-0 border-b border-white/20 bg-transparent pb-2 text-sm text-fg outline-none transition-colors focus:border-accent"
          />
        </div>

        {error ? (
          <p className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-5 text-sm text-fg/70">
            {error}
          </p>
        ) : filtered.length === 0 ? (
          <p className="mt-10 text-sm text-fg/40">
            {leads.length === 0
              ? "Nenhum lead ainda. Assim que alguém preencher o /onboarding, aparece aqui."
              : "Nenhum resultado para a busca."}
          </p>
        ) : (
          <ul className="mt-8 space-y-3">
            {filtered.map((lead) => {
              const isOpen = open === lead.id;
              return (
                <li
                  key={lead.id}
                  className="overflow-hidden rounded-xl border border-white/10 bg-bg2"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : lead.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
                  >
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-fg">
                        {lead.empresa || "—"}
                        <span className="ml-2 font-normal text-fg/50">
                          {lead.nome}
                        </span>
                      </p>
                      <p className="mt-0.5 truncate text-[13px] text-fg/40">
                        {lead.email}
                        {lead.whatsapp ? ` · ${lead.whatsapp}` : ""}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="hidden text-[12px] text-fg/40 sm:block">
                        {fmtDate(lead.created_at)}
                      </span>
                      <span
                        className={`text-fg/40 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      >
                        ▾
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-5 py-5">
                      <div className="mb-4 flex flex-wrap gap-3">
                        <a
                          href={`https://wa.me/${(lead.whatsapp || "").replace(
                            /\D/g,
                            ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost !py-2 !text-[13px]"
                        >
                          WhatsApp
                        </a>
                        <a
                          href={`mailto:${lead.email}`}
                          className="btn-ghost !py-2 !text-[13px]"
                        >
                          E-mail
                        </a>
                      </div>
                      <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                        {Object.entries(LABELS).map(([key, label]) => {
                          const raw = (lead as Record<string, unknown>)[key];
                          const value = Array.isArray(raw)
                            ? raw.join(", ")
                            : raw
                            ? String(raw)
                            : "";
                          if (!value) return null;
                          return (
                            <div
                              key={key}
                              className={
                                key === "objetivo" ||
                                key === "contexto" ||
                                key === "desafios"
                                  ? "sm:col-span-2"
                                  : ""
                              }
                            >
                              <dt className="text-[11px] uppercase tracking-wide text-fg/35">
                                {label}
                              </dt>
                              <dd className="mt-1 text-sm text-fg/80">
                                {value}
                              </dd>
                            </div>
                          );
                        })}
                      </dl>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
