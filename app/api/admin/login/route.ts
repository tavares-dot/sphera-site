import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { ADMIN_COOKIE } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: "" }));
  const pw = process.env.ADMIN_PASSWORD;

  if (!pw) {
    return NextResponse.json(
      { ok: false, error: "ADMIN_PASSWORD não configurada no servidor." },
      { status: 500 }
    );
  }
  if (!password || password !== pw) {
    return NextResponse.json({ ok: false, error: "Senha incorreta." }, { status: 401 });
  }

  const token = createHash("sha256").update(pw).digest("hex");
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12, // 12h
  });
  return res;
}
