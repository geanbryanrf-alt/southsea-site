import { NextResponse } from "next/server";
import { strategicFormSchema } from "@/lib/strategicForm";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Dados inválidos." }, { status: 400 }); }
  const parsed = strategicFormSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Revise os campos obrigatórios.", errors: parsed.error.flatten().fieldErrors }, { status: 422 });

  // TODO: VALIDAR COM O CLIENTE ANTES DA PUBLICAÇÃO. Definir CRM, titular do webhook e política de retenção dos dados.
  const webhookUrl = process.env.SOUTHSEA_ANALYSIS_WEBHOOK_URL;
  if (!webhookUrl) return NextResponse.json({ message: "O recebimento de solicitações ainda não está configurado. Use os canais de contato informados pela Southsea." }, { status: 503 });

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Southsea-Source": "analise-estrategica" },
      body: JSON.stringify({ ...parsed.data, submittedAt: new Date().toISOString() }),
      cache: "no-store",
    });
    if (!webhookResponse.ok) throw new Error(`Webhook respondeu ${webhookResponse.status}`);
  } catch {
    return NextResponse.json({ message: "Não foi possível encaminhar a solicitação neste momento. Tente novamente ou utilize um canal de contato." }, { status: 502 });
  }
  return NextResponse.json({ success: true }, { status: 202 });
}