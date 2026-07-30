import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { isAuthed } from "@/lib/admin-auth";
import { listLeads, type Lead } from "@/lib/leads";
import { AdminDashboard } from "@/components/admin-dashboard";

export const metadata: Metadata = {
  title: "Leads · SPHERA Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!isAuthed()) redirect("/admin/login");

  let leads: Lead[] = [];
  let error: string | null = null;
  try {
    leads = await listLeads();
  } catch {
    error =
      "Não foi possível carregar os leads. Verifique se SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY estão configuradas na Vercel.";
  }

  return <AdminDashboard leads={leads} error={error} />;
}
