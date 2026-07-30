"use client";

import { useState } from "react";
import { Kicker, Parallax } from "./ui";
import { Sphere } from "./brand";
import { WhatsappIcon } from "./icons";
import { contact, site } from "@/lib/content";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nome: String(fd.get("nome") || ""),
      empresa: String(fd.get("empresa") || ""),
      email: String(fd.get("email") || ""),
      telefone: String(fd.get("telefone") || ""),
      mensagem: String(fd.get("mensagem") || ""),
    };
    setSubmitting(true);

    // Envio por e-mail via Web3Forms (quando a chave estiver configurada).
    if (site.formAccessKey) {
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: site.formAccessKey,
            subject: "Novo contato do site SPHERA",
            from_name: "Site SPHERA",
            ...data,
          }),
        });
        const json = await res.json();
        setSubmitting(false);
        if (json.success) {
          setSent(true);
          return;
        }
      } catch {
        setSubmitting(false);
      }
    } else {
      setSubmitting(false);
    }

    // Fallback: abre o WhatsApp já com os dados preenchidos.
    const msg =
      "Olá! Vim pelo site da SPHERA.\n\n" +
      `Nome: ${data.nome}\n` +
      `Empresa: ${data.empresa}\n` +
      `E-mail: ${data.email}\n` +
      `Telefone: ${data.telefone}\n` +
      `Mensagem: ${data.mensagem}`;
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSent(true);
  }

  return (
    <section id="contato" className="relative overflow-hidden border-t border-white/10 bg-bg2">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[-10%] h-[36vw] w-[36vw] opacity-40"
      >
        <Parallax speed={0.07} className="h-full w-full">
          <Sphere className="h-full w-full" speed={16} />
        </Parallax>
      </div>
      <div className="mx-auto max-w-wide px-5 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <Kicker>{contact.eyebrow}</Kicker>
              <span className="h-px w-16 bg-white/20" />
            </div>
            <h2 className="d-1 display mt-8 text-fg">{contact.title}</h2>
            <p className="mt-6 max-w-md text-xl leading-snug text-fg/55">
              {contact.subtitle}
            </p>
            <a
              href={site.whatsappCta}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-10"
            >
              <WhatsappIcon className="h-4 w-4 text-accent" />
              {contact.whatsappCta}
            </a>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {sent ? (
              <div className="border-t border-white/15 pt-10">
                <p className="display text-4xl font-extrabold text-fg">{contact.successTitle}</p>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-fg/55">
                  {contact.successText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-9">
                <Field label="Nome" name="nome" required />
                <Field label="Empresa" name="empresa" />
                <div className="grid gap-9 sm:grid-cols-2">
                  <Field label="E-mail" name="email" type="email" required />
                  <Field label="Telefone" name="telefone" type="tel" />
                </div>
                <Field label="Qual o desafio da sua operação?" name="mensagem" textarea />
                <button type="submit" disabled={submitting} className="btn-accent disabled:opacity-60">
                  {submitting ? "Enviando…" : contact.submitCta}
                  <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "mt-3 w-full border-0 border-b border-white/20 bg-transparent pb-2 text-base text-fg outline-none transition-colors focus:border-accent";
  return (
    <label className="block">
      <span className="text-[13px] font-medium tracking-wide text-fg/50">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={3} required={required} className={`${base} resize-none`} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}
