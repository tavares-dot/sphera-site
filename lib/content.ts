// ============================================================
// SPHERA — Fonte de verdade de todo o conteúdo (copy) do site.
// Edite apenas este arquivo para alterar textos. Nenhuma copy
// deve ficar hardcoded nos componentes.
// ============================================================

// Assets da marca. Hoje servidos pelo domínio atual; ao montar o GitHub,
// mover para /public e trocar por caminhos locais (ex.: "/brand/...").
const ASSET_BASE = "https://spheralab.com.br/__l5e/assets-v1";
export const assets = {
  logoDark: `${ASSET_BASE}/95a5e821-5601-4021-8a27-a3ffec5d5fa2/sphera-logo.png`,
  logoLight: `${ASSET_BASE}/d8aed56d-703f-44af-9a06-23214a08b20b/sphera-logo-light.png`,
  symbolBlack: `${ASSET_BASE}/1c80190c-5933-43f9-9401-e7eda3140bdb/sphera-symbol-black.png`,
  symbolWhite: `${ASSET_BASE}/526bda53-cbdc-457d-bdd4-fe69281d55e7/sphera-symbol-white.png`,
  symbolOrange: `${ASSET_BASE}/3f8d7663-367d-42b9-a5f1-86fed5745357/sphera-symbol-orange.png`,
  rafael: `${ASSET_BASE}/bb947fb0-0533-4947-9ab9-ef555246ef64/rafael-tavares.jpg`,
};

export const site = {
  brand: "SPHERA",
  domain: "spheralab.com.br",
  email: "contato@spheralab.com.br",
  whatsappNumber: "5548996924159",
  whatsapp: "https://wa.me/5548996924159",
  whatsappCta:
    "https://wa.me/5548996924159?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20SPHERA%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico.",
  linkedin: "https://www.linkedin.com/in/rafaeltavaress",
  instagram: "https://www.instagram.com/lab.sphera/",
  // Formulário: destino dos leads. Ver contact.tsx.
  formEmail: "tavares@spheralab.com.br",
  // Chave gratuita do Web3Forms (envia o form por e-mail). Vazio = fallback WhatsApp.
  formAccessKey: "",
  tagline: "Processos claros. Indicadores confiáveis. Crescimento sustentável.",
  seo: {
    title: "SPHERA — Estruturação Comercial e Empresarial",
    description:
      "A SPHERA estrutura operações empresariais e comerciais para organizações que precisam crescer com previsibilidade, organização e capacidade de execução.",
  },
};

export const marquee = [
  "Estrutura",
  "Previsibilidade",
  "Governança",
  "Indicadores",
  "Processos",
  "Execução",
  "Escala",
];

export const nav = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Estruturação Comercial e Empresarial",
  title: "Estrutura comercial e empresarial para crescer com previsibilidade.",
  // Título quebrado para tratamento editorial (ênfase serifada no fim).
  titleLead: "Estrutura comercial e empresarial para crescer com ",
  titleEmphasis: "previsibilidade.",
  description:
    "A SPHERA é uma empresa especializada em estruturar operações empresariais e comerciais para organizações que precisam crescer com previsibilidade, organização e capacidade de execução.",
  primaryCta: "Agendar diagnóstico",
  secondaryCta: "Conhecer a metodologia",
  // Estabelece em segundos: quem, o que, para quem, como.
  meta: [
    "Estruturação comercial e empresarial",
    "Governança e indicadores",
    "+15 anos de operação",
  ],
};

export const manifesto = {
  kicker: "Manifesto",
  lead: "A maioria dos problemas de crescimento não está nas vendas.",
  emphasis: "Está na operação.",
  body: "Empresas maduras não crescem por esforço. Crescem por estrutura. Quando o processo é claro, o indicador é confiável e a execução tem método, o resultado deixa de depender do mês, do herói ou da sorte. Passa a ser consequência.",
  signature: "SPHERA",
};

export const problems = {
  eyebrow: "Diagnóstico",
  title: "Sua empresa está crescendo ou apenas trabalhando mais?",
  intro:
    "Empresas não deixam de crescer por falta de oportunidades. Elas deixam de crescer por falta de estrutura. Processos frágeis geram crescimento instável.",
  items: [
    {
      title: "CRM sem utilização",
      description:
        "Ferramenta cara, adoção baixa e dados que ninguém usa para decidir.",
    },
    {
      title: "Vendas sem previsibilidade",
      description: "Resultado depende do mês, do herói da equipe e da sorte.",
    },
    {
      title: "Falta de indicadores",
      description:
        "Decisões tomadas no achismo, sem métricas que orientem o caminho.",
    },
    {
      title: "Dependência de pessoas-chave",
      description:
        "Se alguém sai, a operação trava. O conhecimento não está no processo.",
    },
    {
      title: "Marketing desconectado do comercial",
      description:
        "Geração de demanda e vendas correndo em trilhos separados.",
    },
    {
      title: "Processos desorganizados",
      description: "Cada um vende do seu jeito. Sem padrão, não há escala.",
    },
  ],
  closing:
    "A maioria dos problemas de crescimento não está nas vendas. Está na operação.",
};

export const methodology = {
  eyebrow: "Metodologia proprietária",
  title: "A Metodologia SPHERA",
  intro:
    "Crescimento sustentável exige método, indicadores e execução. São seis estágios encadeados que levam a operação do diagnóstico à escala. Com estrutura, não com sorte.",
  stages: [
    {
      n: "01",
      key: "DIAGNÓSTICO",
      title: "Diagnóstico completo da operação",
      description:
        "Mapeamento profundo de processos, pessoas, ferramentas e indicadores atuais.",
      icon: "Search",
    },
    {
      n: "02",
      key: "ARQUITETURA",
      title: "Arquitetura do crescimento",
      description:
        "Desenho do modelo comercial e empresarial ideal para o estágio da empresa.",
      icon: "DraftingCompass",
    },
    {
      n: "03",
      key: "INTEGRAÇÃO",
      title: "Integração entre áreas",
      description:
        "Alinhamento entre geração de demanda, vendas e operação em um único fluxo.",
      icon: "Workflow",
    },
    {
      n: "04",
      key: "IMPLANTAÇÃO",
      title: "Implantação dos processos",
      description:
        "Implementação prática de rotinas, CRM e governança comercial no dia a dia.",
      icon: "Settings2",
    },
    {
      n: "05",
      key: "INDICADORES",
      title: "Previsibilidade e indicadores",
      description:
        "Painel de indicadores que transforma dados em decisão e em receita.",
      icon: "BarChart3",
    },
    {
      n: "06",
      key: "ESCALA",
      title: "Escala e otimização contínua",
      description:
        "Ciclos de melhoria que sustentam o crescimento ao longo do tempo.",
      icon: "TrendingUp",
    },
  ],
};

export const services = {
  eyebrow: "Serviços",
  title: "Como estruturamos o crescimento",
  intro:
    "A SPHERA não vende software. A SPHERA estrutura operações. Cada frente parte de um problema real e entrega uma estrutura concreta que o cliente passa a operar.",
  items: [
    {
      title: "Diagnóstico Estratégico",
      icon: "Search",
      problem:
        "A empresa cresce, mas não enxerga com clareza onde a operação trava nem o que limita o resultado.",
      structure:
        "Mapeamento completo da operação comercial, dos processos, dos indicadores e das prioridades de crescimento.",
      result:
        "Uma leitura precisa da empresa e um plano claro com as alavancas que destravam o próximo ciclo de crescimento.",
    },
    {
      title: "Estruturação Comercial",
      icon: "LayoutGrid",
      problem:
        "Cada pessoa vende de um jeito, sem processo, sem padrão e sem previsibilidade de receita.",
      structure:
        "Processo comercial, funil de vendas, rotinas, governança e CRM organizados de ponta a ponta.",
      result:
        "Uma operação comercial padronizada, previsível e pronta para escalar sem depender de heróis.",
    },
    {
      title: "Gestão Comercial Estratégica",
      icon: "Target",
      problem:
        "A operação precisa de liderança comercial sênior, mas ainda não comporta uma contratação integral.",
      structure:
        "Condução da operação comercial, definição de metas, ritmo de gestão e acompanhamento de indicadores.",
      result:
        "Direção experiente conduzindo o comercial com método, foco em resultado e disciplina de execução.",
    },
    {
      title: "Processos e Indicadores",
      icon: "BarChart3",
      problem:
        "As decisões são tomadas no achismo, sem indicadores confiáveis para orientar o caminho.",
      structure:
        "Padronização das rotinas críticas e definição dos indicadores que realmente importam para o negócio.",
      result:
        "Gestão orientada por dados, com clareza sobre o que medir, o que ajustar e onde investir.",
    },
    {
      title: "Inteligência Artificial Aplicada aos Negócios",
      icon: "Sparkles",
      problem:
        "Tarefas repetitivas consomem o time e há dados que não viram produtividade nem decisão.",
      structure:
        "Aplicação prática de automação e inteligência artificial nos pontos de maior atrito da operação.",
      result:
        "Ganho real de eficiência, com a equipe focada no que gera valor e decisões mais bem fundamentadas.",
    },
  ],
};

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Por que a SPHERA",
  items: [
    {
      title: "Estratégia + Operação",
      description:
        "Pensamento estratégico que vira rotina executável. Não fica na apresentação.",
      icon: "Compass",
    },
    {
      title: "Experiência prática em crescimento",
      description:
        "Atuação real em operações que precisaram escalar com previsibilidade.",
      icon: "Rocket",
    },
    {
      title: "Foco em implementação",
      description:
        "Mais do que recomendar, colocamos a mão na operação até funcionar.",
      icon: "Hammer",
    },
    {
      title: "Metodologia proprietária",
      description:
        "O método SPHERA estrutura cada etapa do diagnóstico à escala.",
      icon: "Boxes",
    },
    {
      title: "Pessoas, processos e tecnologia",
      description:
        "Integração dos três pilares que sustentam crescimento de verdade.",
      icon: "Users",
    },
    {
      title: "Visão orientada a dados",
      description:
        "Indicadores no centro de cada decisão, do board ao time comercial.",
      icon: "LineChart",
    },
  ],
};

export const about = {
  eyebrow: "Quem conduz",
  name: "Rafael Tavares",
  role: "Fundador",
  quote:
    "Estrutura não é burocracia. É o que permite uma empresa crescer sem depender de heróis.",
  paragraphs: [
    "Rafael Tavares é fundador da SPHERA e atua na estruturação de operações empresariais voltadas ao crescimento sustentável, previsibilidade comercial e eficiência organizacional.",
    "Ao longo de mais de 15 anos de experiência profissional, desenvolveu e liderou iniciativas relacionadas à governança comercial, implantação de processos, definição de indicadores de desempenho, desenvolvimento de modelos de gestão e estruturação de operações capazes de sustentar o crescimento de empresas em diferentes momentos de maturidade.",
    "Sua atuação combina visão estratégica, capacidade de execução e forte orientação a resultados, apoiando empresários e gestores na construção de negócios mais organizados, eficientes e preparados para crescer de forma consistente.",
    "Sua formação executiva reúne especializações em estratégia empresarial, liderança, gestão de resultados e inteligência artificial aplicada aos negócios, permitindo integrar pessoas, processos, indicadores e tecnologia em soluções práticas voltadas à realidade de cada organização.",
    "Hoje, através da SPHERA, auxilia empresas a transformar crescimento desorganizado em crescimento estruturado, criando bases sólidas para expansão, tomada de decisão e geração de resultados de longo prazo.",
  ],
  tags: [
    "Estruturação Empresarial",
    "Governança Comercial",
    "Processos e Eficiência",
    "Indicadores e Performance",
    "Crescimento Sustentável",
    "Inteligência Artificial aplicada aos Negócios",
  ],
};

export const authority = {
  eyebrow: "Autoridade",
  title: "Experiência construída na prática.",
  items: [
    "+15 anos de experiência profissional",
    "Projetos de transformação empresarial",
    "Estruturação de operações comerciais",
    "Experiência internacional",
    "Liderança de iniciativas estratégicas",
    "Transformação digital e inteligência de negócios",
  ],
};

export const positioning = {
  eyebrow: "Posicionamento",
  title: "O que a SPHERA é e o que não é.",
  isNot: {
    label: "A SPHERA NÃO É",
    items: [
      "Agência",
      "Software house",
      "Empresa de marketing",
      "Consultoria genérica",
    ],
  },
  is: {
    label: "A SPHERA é",
    text: "Uma empresa especializada em estruturar operações empresariais e comerciais para organizações que precisam crescer com previsibilidade, organização e capacidade de execução.",
  },
};

export const contact = {
  eyebrow: "Vamos conversar",
  title: "Sua empresa possui potencial para crescer.",
  subtitle:
    "A pergunta é: a operação está preparada para sustentar esse crescimento?",
  whatsappCta: "Falar pelo WhatsApp",
  submitCta: "Agendar Diagnóstico Estratégico",
  successTitle: "Recebemos o seu contato.",
  successText:
    "Obrigado. Em breve entraremos em contato para agendar o seu Diagnóstico Estratégico.",
};

export const footer = {
  description:
    "Estruturação de operações comerciais e empresariais para crescer com previsibilidade.",
  navTitle: "Navegação",
  contactTitle: "Contato",
  copyright: "Todos os direitos reservados.",
};
