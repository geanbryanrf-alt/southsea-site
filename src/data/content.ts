export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://southseainvestments.com.br";

export const navigation = [
  { label: "Início", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Como atuamos", href: "/como-atuamos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Cases", href: "/cases" },
  { label: "Insights", href: "/insights" },
  { label: "Contato", href: "/contato" },
] as const;

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
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
    description: "Estruturação da estratégia de capital para projetos de crescimento, capacidade produtiva e novos mercados.",
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
    description: "Modelagem de operações de crédito alinhadas ao fluxo de caixa, às garantias e ao objetivo corporativo.",
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
    title: "Reestruturação de passivos",
    shortTitle: "Reestruturação de passivos",
    description: "Reorganização de obrigações financeiras para apoiar liquidez, previsibilidade e capacidade operacional.",
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
    slug: "bndes-e-credito-rural",
    title: "BNDES e crédito rural",
    shortTitle: "BNDES e crédito rural",
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
    description: "Preparação estratégica para alternativas de captação e estruturação compatíveis com o estágio da companhia.",
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
    description: "Estratégia financeira para operações transfronteiriças, em coordenação com os especialistas necessários.",
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

export const operatingModel = [
  {
    number: "01",
    title: "Diagnóstico e enquadramento",
    text: "Compreensão do contexto empresarial, objetivo da operação e critérios iniciais de viabilidade.",
  },
  {
    number: "02",
    title: "Viabilidade e modelagem",
    text: "Organização das premissas, cenários, necessidades de capital e elementos decisórios.",
  },
  {
    number: "03",
    title: "Estruturação financeira e jurídica",
    text: "Desenho coordenado da operação com os especialistas e documentos aplicáveis.",
  },
  {
    number: "04",
    title: "Negociação e execução",
    text: "Apoio à preparação, interlocução técnica e condução das etapas de execução.",
  },
  {
    number: "05",
    title: "Monitoramento",
    text: "Acompanhamento dos marcos definidos, obrigações e próximos movimentos da operação.",
  },
] as const;

// TODO: VALIDAR COM O CLIENTE ANTES DA PUBLICAÇÃO. Os canais abaixo vieram do projeto existente.
export const contact = {
  email: "contato@southsea.com.br",
  whatsapp: "+55 (47) 99644-0299",
  whatsappHref: "https://wa.me/5547996440299",
};

// TODO: VALIDAR COM O CLIENTE ANTES DA PUBLICAÇÃO. O preço do produto veio do projeto existente.
export const course = {
  title: "O Código Financeiro Corporativo",
  price: "R$ 97,00",
  description: "Educação executiva para líderes que desejam ampliar sua compreensão sobre capital, passivos, garantias e decisões financeiras corporativas.",
};