// Helpers de servidor para gravar/ler leads do onboarding via Supabase REST.
// Usa apenas a service_role key (secreta) — nunca exponha no cliente.

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
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
