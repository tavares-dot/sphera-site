import type { Metadata } from "next";
import { OnboardingForm } from "@/components/onboarding-form";

export const metadata: Metadata = {
  title: "Diagnóstico Estratégico — SPHERA",
  description:
    "Responda algumas perguntas rápidas para agendarmos o seu Diagnóstico Estratégico com a SPHERA.",
};

export default function OnboardingPage() {
  return <OnboardingForm />;
}
