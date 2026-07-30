// Helpers de servidor para gravar/ler leads do onboarding via Supabase REST.
// Usa apenas a service_role key (secreta) — nunca exponha no cliente.

// Normaliza a URL do Supabase:
//  - garante o esquema https:// (caso tenham colado sem)
//  - remove barra final e um eventual sufixo /rest/v1
//    (caso tenham colado a URL da "API de dados" em vez da URL base).
function normalizeUrl(u?: string): string | undefined {
  if (!u) return u;
  // Pega só o primeiro endereço (caso tenham colado várias vezes/linhas).
  let s = u.trim().split(/\s+/)[0];
  if (!/^https?:\/\//i.test(s)) s = "https://" + s;
  return s.replace(/\/+$/, "").replace(/\/rest\/v1$/i, "");
}

const SUPABASE_URL = normalizeUrl(process.env.SUPABASE_URL);
// Sanitiza a chave (remove espaços/quebras e eventuais colagens repetidas).
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
  ? process.env.SUPABASE_SERVICE_ROLE_KEY.trim().split(/\s+/)[0]
  : undefined;
const TABLE = "onboarding_leads";

export type Lead = {
  id: string;
  created_at: string;
  status: string;
  nome: string;
  email: string;
  whatsapp?: string;
  empresa?: string;
  cargo?: string;
  segmento?: string;
  tempo_operacao?: string;
  colaboradores?: string;
  faturamento?: string;
  vendedores?: string;
  usa_crm?: string;
  processo_vendas?: string;
  desafios?: string[];
  objetivo?: string;
  inicio?: string;
  ja_investe?: string;
  contexto?: string;
  melhor_horario?: string;
};

export type LeadInput = Omit<Lead, "id" | "created_at" | "status">;

function config() {
  if (!SUPABASE_URL || !SERVICE_KEY) {
    throw new Error(
      "Supabase não configurado (defina SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY)."
    );
  }
  return {
    apikey: SERVICE_KEY as string,
    Authorization: `Bearer ${SERVICE_KEY}`,
    "Content-Type": "application/json",
  };
}

export async function insertLead(data: LeadInput): Promise<void> {
  const headers = config();
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
    method: "POST",
    headers: { ...headers, Prefer: "return=minimal" },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Falha ao salvar lead (${res.status}): ${text}`);
  }
}

export async function listLeads(): Promise<Lead[]> {
  const headers = config();
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/${TABLE}?select=*&order=created_at.desc`,
    { headers, cache: "no-store" }
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Falha ao listar leads (${res.status}): ${text}`);
  }
  return res.json();
}
