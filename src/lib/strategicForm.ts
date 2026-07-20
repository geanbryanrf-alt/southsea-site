import * as z from "zod";

export const strategicFormSchema = z.object({
  nome: z.string().trim().min(3, "Informe seu nome completo"),
  empresa: z.string().trim().min(2, "Informe o nome da empresa"),
  cargo: z.string().trim().min(2, "Informe seu cargo"),
  email: z.string().trim().email("Informe um e-mail corporativo válido"),
  whatsapp: z.string().trim().min(10, "Informe um WhatsApp válido"),
  segmento: z.string().trim().min(2, "Informe o segmento da empresa"),
  faturamento: z.string().min(1, "Selecione o faturamento aproximado"),
  objetivo: z.string().min(1, "Selecione o objetivo da operação"),
  valorOperacao: z.string().trim().min(1, "Informe o valor aproximado"),
  prazo: z.string().trim().min(1, "Informe o prazo esperado"),
  garantias: z.string().min(1, "Informe se há garantias ou recebíveis"),
  contexto: z.string().trim().min(10, "Compartilhe um breve contexto da operação"),
  lgpd: z.literal(true, { errorMap: () => ({ message: "É necessário concordar com o tratamento de dados" }) }),
});

export type StrategicFormData = z.infer<typeof strategicFormSchema>;