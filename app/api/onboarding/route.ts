import { NextResponse } from "next/server";
import { insertLead, debugInfo, type LeadInput } from "@/lib/leads";
import { notifyNewLead } from "@/lib/email";

export const dynamic = "force-dynamic";

function str(v: unknown): string {
  if (typeof v === "string") return v.trim();
  return v == null ? "" : String(v);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  if (!body?.nome || !body?.email) {
    return NextResponse.json(
      { ok: false, error: "Nome e e-mail são obrigatórios." },
      { status: 400 }
    );
  }

  const lead: LeadInput = {
    nome: str(body.nome),
    email: str(body.email),
    whatsapp: str(body.whatsapp),
    empresa: str(body.empresa),
    cargo: str(body.cargo),
    segmento: str(body.segmento),
    tempo_operacao: str(body.tempo_operacao),
    colaboradores: str(body.colaboradores),
    faturamento: str(body.faturamento),
    vendedores: str(body.vendedores),
    usa_crm: str(body.usa_crm),
    processo_vendas: str(body.processo_vendas),
    desafios: Array.isArray(body.desafios) ? body.desafios.map(String) : [],
    objetivo: str(body.objetivo),
    inicio: str(body.inicio),
    ja_investe: str(body.ja_investe),
    contexto: str(body.contexto),
    melhor_horario: str(body.melhor_horario),
  };

  try {
    await insertLead(lead);
  } catch (e) {
    console.error("onboarding insert failed:", e);
    return NextResponse.json(
      {
        ok: false,
        error: "Não foi possível salvar. Tente novamente em instantes.",
        // TEMPORÁRIO (preview): detalhe do erro para diagnóstico. Remover antes da produção.
        detail: e instanceof Error ? e.message : String(e),
        debug: debugInfo(),
      },
      { status: 500 }
    );
  }

  // Notificação por e-mail (best-effort, não bloqueia a resposta ao lead).
  await notifyNewLead(lead);

  return NextResponse.json({ ok: true });
}
