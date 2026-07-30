// Notificação por e-mail de novo lead (via Resend).
// Best-effort: se RESEND_API_KEY não estiver configurada, apenas ignora.
import type { LeadInput } from "./leads";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.RESEND_FROM || "SPHERA <onboarding@resend.dev>";
const TO = process.env.LEADS_EMAIL || "tavares@spheralab.com.br";

const LABELS: Record<string, string> = {
  nome: "Nome",
  email: "E-mail",
  whatsapp: "WhatsApp",
  empresa: "Empresa",
  cargo: "Cargo",
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
  ja_investe: "Já investe em consultoria",
  contexto: "Contexto",
  melhor_horario: "Melhor horário",
};

export async function notifyNewLead(lead: LeadInput): Promise<void> {
  if (!RESEND_API_KEY) return; // e-mail desativado até configurar a chave

  const rows = Object.entries(LABELS)
    .map(([key, label]) => {
      const raw = (lead as Record<string, unknown>)[key];
      const value = Array.isArray(raw) ? raw.join(", ") : raw ? String(raw) : "";
      return `<tr><td style="padding:6px 16px 6px 0;color:#888;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#111">${value}</td></tr>`;
    })
    .join("");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px">
      <h2 style="margin:0 0 4px">Novo Diagnóstico solicitado</h2>
      <p style="margin:0 0 16px;color:#666">Via /onboarding no site da SPHERA.</p>
      <table style="border-collapse:collapse;font-size:14px">${rows}</table>
    </div>`;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject: `Novo lead: ${lead.empresa || lead.nome}`,
        html,
        reply_to: lead.email,
      }),
    });
  } catch {
    // best-effort: não bloqueia o fluxo do lead
  }
}
