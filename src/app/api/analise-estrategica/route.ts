import { NextResponse } from "next/server";
import { Resend } from "resend";
import { strategicFormSchema, type StrategicFormData } from "@/lib/strategicForm";

const fieldLabels: Record<keyof StrategicFormData, string> = {
  nome: "Nome",
  empresa: "Empresa",
  cargo: "Cargo",
  email: "E-mail corporativo",
  whatsapp: "WhatsApp",
  segmento: "Segmento",
  faturamento: "Faturamento aproximado",
  objetivo: "Objetivo da operação",
  valorOperacao: "Valor aproximado",
  prazo: "Prazo",
  garantias: "Garantias ou recebíveis",
  contexto: "Contexto",
  lgpd: "Autorização LGPD",
};

function renderSubmissionHtml(data: StrategicFormData): string {
  const rows = (Object.keys(fieldLabels) as (keyof StrategicFormData)[])
    .map((key) => `<tr><td style="padding:8px 12px;color:#8a8a8a;white-space:nowrap;vertical-align:top;">${fieldLabels[key]}</td><td style="padding:8px 12px;color:#111;">${String(data[key] ?? "—")}</td></tr>`)
    .join("");
  return `<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">${rows}</table>`;
}

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Dados inválidos." }, { status: 400 }); }
  const parsed = strategicFormSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Revise os campos obrigatórios.", errors: parsed.error.flatten().fieldErrors }, { status: 422 });

  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationTo = process.env.SOUTHSEA_NOTIFICATION_EMAIL;
  const notificationFrom = process.env.SOUTHSEA_NOTIFICATION_FROM || "Southsea Investments <onboarding@resend.dev>";

  if (!resendApiKey || !notificationTo) {
    return NextResponse.json({ message: "O recebimento de solicitações por e-mail ainda não está configurado. Use os canais de contato informados pela Southsea." }, { status: 503 });
  }

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: notificationFrom,
      to: notificationTo,
      replyTo: parsed.data.email,
      subject: `Nova solicitação de análise estratégica — ${parsed.data.empresa}`,
      html: renderSubmissionHtml(parsed.data),
    });
    if (error) throw new Error(error.message);
  } catch {
    return NextResponse.json({ message: "Não foi possível encaminhar a solicitação neste momento. Tente novamente ou utilize um canal de contato." }, { status: 502 });
  }
  return NextResponse.json({ success: true }, { status: 202 });
}