"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/brand";

export function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(json.error || "Senha incorreta.");
        setLoading(false);
      }
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-5 text-fg">
      <form onSubmit={submit} className="w-full max-w-sm">
        <Logo className="mx-auto h-9 w-auto" />
        <h1 className="display mt-8 text-center text-2xl font-extrabold">
          Painel Sphera
        </h1>
        <p className="mt-2 text-center text-sm text-fg/50">
          Acesso restrito.
        </p>
        <label className="mt-10 block">
          <span className="text-[13px] font-medium tracking-wide text-fg/50">
            Senha
          </span>
          <input
            type="password"
            value={password}
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
            className="mt-3 w-full border-0 border-b border-white/20 bg-transparent pb-2 text-base text-fg outline-none transition-colors focus:border-accent"
          />
        </label>
        {error && <p className="mt-4 text-sm text-accent-hi">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="btn-accent mt-8 w-full justify-center disabled:opacity-60"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}
