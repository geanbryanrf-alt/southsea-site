export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://southseainvestments.com.br";

export const navigation = [
  { label: "Início", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Como atuamos", href: "/como-atuamos" },
  { label: "Curso", href: "/curso" },
  { label: "Sobre", href: "/sobre" },
  { label: "Cases", href: "/cases" },
  { label: "Insights", href: "/insights" },
  { label: "Contato", href: "/contato" },
] as const;

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  /** Nome do ícone lucide-react usado nos cards de solução. */
  icon: "TrendingUp" | "ShieldCheck" | "RefreshCw" | "Network" | "Tractor" | "LineChart" | "Globe";
  description: string;
  introduction: string;
  scope: string[];
  considerations: string[];
};

export const solutions: Solution[] = [
  {
    slug: "expansao-empresarial",
    title: "Expansão empresarial",
    shortTitle: "Expansão",
    icon: "TrendingUp",
    description: "Estruturamos a estratégia de capital para projetos de crescimento, aumento de capacidade operacional e novos mercados.",
    introduction: "A expansão exige uma leitura integrada de estratégia, capacidade operacional, cronograma, fontes de recursos e riscos de execução.",
    scope: [
      "Diagnóstico da tese de crescimento e do enquadramento financeiro.",
      "Modelagem de necessidades de capital, cronograma e cenários.",
      "Avaliação de alternativas de estrutura e fontes de recursos.",
      "Apoio à preparação para negociação e execução da operação.",
    ],
    considerations: ["Premissas de demanda", "Capacidade operacional", "Capital de giro", "Garantias e covenants"],
  },
  {
    slug: "credito-estruturado",
    title: "Crédito estruturado",
    shortTitle: "Crédito estruturado",
    icon: "ShieldCheck",
    description: "Modelagem de operações de crédito corporativo alinhadas à estratégia financeira, fluxo de caixa e às garantias disponíveis.",
    introduction: "Cada operação demanda compatibilidade entre prazo, amortização, garantias, recebíveis e a dinâmica real do negócio.",
    scope: [
      "Mapeamento de necessidades e critérios de enquadramento.",
      "Organização de informações financeiras e operacionais relevantes.",
      "Estruturação de cenários de prazo, garantias e fluxo de pagamento.",
      "Apoio na interlocução técnica durante a negociação.",
    ],
    considerations: ["Fluxo de caixa", "Garantias", "Recebíveis", "Prazo e amortização"],
  },
  {
    slug: "reestruturacao-de-passivos",
    title: "Reestruturação financeira e de passivos",
    shortTitle: "Reestruturação de passivos",
    icon: "RefreshCw",
    description: "Negociação e redesenho de obrigações para restabelecer liquidez, equilíbrio financeiro e capacidade de crescimento.",
    introduction: "A análise começa pela compreensão das obrigações, vencimentos, custos, garantias e impactos na operação — sem fórmulas genéricas.",
    scope: [
      "Leitura consolidada do passivo financeiro e dos contratos disponíveis.",
      "Análise de vencimentos, obrigações e impactos de caixa.",
      "Desenho de alternativas para reorganização financeira e jurídica.",
      "Suporte técnico à preparação das tratativas com credores.",
    ],
    considerations: ["Perfil de vencimento", "Obrigações contratuais", "Liquidez", "Capacidade de pagamento"],
  },
  {
    slug: "estruturacao-societaria",
    title: "Estruturação societária",
    shortTitle: "Estruturação societária",
    icon: "Network",
    description: "Definição da arquitetura societária para expansão, reorganizações, sucessão e novos investimentos.",
    introduction: "Movimentos societários pedem clareza sobre participações, governança, sucessão e os efeitos sobre a operação e o capital da companhia.",
    scope: [
      "Leitura da estrutura societária atual e dos objetivos corporativos.",
      "Mapeamento de participações, governança e pontos de atenção.",
      "Desenho de alternativas de reorganização e sucessão.",
      "Coordenação com assessores jurídicos, tributários e contábeis.",
    ],
    considerations: ["Participações", "Governança", "Sucessão", "Efeitos tributários"],
  },
  {
    slug: "bndes-e-credito-rural",
    title: "BNDES e crédito rural",
    shortTitle: "BNDES e crédito rural",
    icon: "Tractor",
    description: "Análise de enquadramento e preparação de operações voltadas a investimento produtivo e cadeia do agronegócio.",
    introduction: "Linhas de fomento e crédito rural requerem aderência entre projeto, documentação, finalidade, garantias e regras aplicáveis.",
    scope: [
      "Avaliação inicial de aderência do projeto e da finalidade.",
      "Estruturação de informações para análise de viabilidade.",
      "Organização da narrativa econômico-financeira da operação.",
      "Acompanhamento técnico das etapas de estruturação e execução.",
    ],
    considerations: ["Finalidade do investimento", "Documentação", "Cronograma", "Enquadramento"],
  },
  {
    slug: "mercado-de-capitais",
    title: "Mercado de capitais",
    shortTitle: "Mercado de capitais",
    icon: "LineChart",
    description: "Preparação estratégica para captação de recursos por meio de instrumentos do mercado de capitais, alinhada ao estágio e aos objetivos da empresa.",
    introduction: "O acesso ao mercado de capitais depende de governança, consistência de informações, estrutura da operação e coordenação especializada.",
    scope: [
      "Diagnóstico de prontidão e objetivos de captação.",
      "Análise de alternativas e premissas da estrutura.",
      "Preparação de informações para interlocução com participantes habilitados.",
      "Coordenação estratégica com assessores jurídicos, financeiros e demais partes.",
    ],
    considerations: ["Governança", "Informações financeiras", "Estrutura societária", "Riscos da operação"],
  },
  {
    slug: "operacoes-internacionais",
    title: "Operações internacionais",
    shortTitle: "Operações internacionais",
    icon: "Globe",
    description: "Estruturação de operações internacionais, investimentos, captação e expansão empresarial com coordenação jurídica, financeira e tributária.",
    introduction: "Projetos internacionais envolvem fluxos financeiros, moedas, contrapartes, documentação e aspectos societários ou regulatórios que precisam ser avaliados caso a caso.",
    scope: [
      "Diagnóstico do objetivo corporativo e da estrutura da operação.",
      "Mapeamento de pontos de atenção financeiros, societários e de execução.",
      "Modelagem inicial de fluxos e cenários de recursos.",
      "Coordenação com assessores jurídicos, tributários e parceiros habilitados.",
    ],
    considerations: ["Moeda e fluxo", "Contrapartes", "Documentação", "Coordenação multidisciplinar"],
  },
];

export type OperatingStep = {
  number: string;
  /** Nome do ícone lucide-react usado nos passos do processo. */
  icon: "Search" | "PenTool" | "Layers" | "GitMerge" | "Activity";
  title: string;
  text: string;
};

export const operatingModel: OperatingStep[] = [
  {
    number: "01",
    icon: "Search",
    title: "Diagnóstico estratégico",
    text: "Compreensão do contexto empresarial, do objetivo da operação e dos critérios iniciais de viabilidade.",
  },
  {
    number: "02",
    icon: "PenTool",
    title: "Modelagem da operação",
    text: "Organização das premissas, cenários, necessidades de capital e elementos decisórios.",
  },
  {
    number: "03",
    icon: "Layers",
    title: "Estruturação da operação",
    text: "Desenho coordenado da operação com os especialistas, contratos e documentos aplicáveis.",
  },
  {
    number: "04",
    icon: "GitMerge",
    title: "Coordenação da execução",
    text: "Apoio à preparação, interlocução técnica e condução das etapas de negociação e execução.",
  },
  {
    number: "05",
    icon: "Activity",
    title: "Acompanhamento estratégico",
    text: "Acompanhamento dos marcos definidos, das obrigações e dos próximos movimentos da operação.",
  },
];

// Canal de contato validado com o cliente (jul/2026): apenas WhatsApp.
// E-mail corporativo ainda não existe — não publicar até haver um endereço ativo.
export const contact = {
  email: null as string | null,
  whatsapp: "+55 (47) 99644-0299",
  whatsappHref: "https://wa.me/5547996440299",
};

// Mensagem pré-preenchida para inscrições na lista de espera do programa.
export const courseWaitlistHref = `https://wa.me/5547996440299?text=${encodeURIComponent(
  "Olá! Quero entrar na lista de espera do programa O Código Financeiro Corporativo.",
)}`;

// Programa em produção (jul/2026): lançamento futuro, sem preço fixo divulgado.
export const course = {
  title: "O Código Financeiro Corporativo",
  status: "Em produção",
  description: "Educação executiva para líderes que desejam ampliar sua compreensão sobre capital, passivos, garantias e decisões financeiras corporativas.",
};

