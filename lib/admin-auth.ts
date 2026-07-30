// Autenticação simples do /admin: senha única em variável de ambiente.
import { createHash } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "sph_admin";

/** Token esperado no cookie = sha256(ADMIN_PASSWORD). Null se não configurada. */
export function expectedToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return null;
  return createHash("sha256").update(pw).digest("hex");
}

export function isAuthed(): boolean {
  const token = expectedToken();
  if (!token) return false;
  const current = cookies().get(ADMIN_COOKIE)?.value;
  return !!current && current === token;
}
