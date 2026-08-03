import type { Metadata } from "next";
import { AdminLoginForm } from "@/components/admin-login-form";

export const metadata: Metadata = {
  title: "Entrar · Sphera Admin",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return <AdminLoginForm />;
}
