// ============================================================
// SPHERA — Fonte de verdade de todo o conteúdo (copy) do site.
// Edite apenas este arquivo para alterar textos. Nenhuma copy
// deve ficar hardcoded nos componentes.
// ============================================================

export const site = {
  brand: "SPHERA",
  domain: "spheralab.com.br",
  // URL canônica (www é o host principal; o apex faz 308 -> www).
  canonicalUrl: "https://www.spheralab.com.br",
  email: "contato@spheralab.com.br",
  whatsappNumber: "5548996924159",
  whatsapp: "https://wa.me/5548996924159",
  whatsappCta:
    "https://wa.me/5548996924159?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20SPHERA%20e%20gostaria%20de%20conversar%20sobre%20a%20opera%C3%A7%C3%A3o%20da%20minha%20empresa.",
  linkedin: "https://www.linkedin.com/in/rafaeltavaress",
  instagram: "https://www.instagram.com/lab.sphera/",
  // Formulário: destino dos leads. Ver contact.tsx / onboarding.
  formEmail: "tavares@spheralab.com.br",
  formAccessKey: "",
  tagline: "Clareza, previsibilidade e execução para crescer.",
  seo: {
    title: "SPHERA — Estruturação Comercial e Empresarial",
    description:
      "Consultoria boutique de estruturação comercial e empresarial. A SPHERA organiza a operação de empresas que já cresceram e precisam crescer com previsibilidade e método.",
  },
};

export const marquee = [
  "Método",
  "Previsibilidade",
  "Governança",
  "Indicadores",
  "Execução",
  "Organização",
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
  eyebrow: "Consultoria de Estruturação Comercial e Empresarial",
  description:
    "A SPHERA é uma consultoria boutique que organiza a operação comercial e empresarial de quem já cresceu — e agora precisa crescer com previsibilidade, sem depender de heróis.",
  primaryCta: "Solicitar Diagnóstico Estratégico",
  secondaryCta: "Conhecer o método",
  meta: [
    "Consultoria boutique",
    "Método próprio, do diagnóstico à escala",
    "+15 anos em operação",
  ],
};

export const manifesto = {
  lead: "A maioria dos problemas de crescimento não nasce no comercial.",
  emphasis: "Nasce na forma como a empresa opera.",
  body: "Empresas maduras não crescem por esforço — crescem por método. Quando a rotina é clara, o indicador é confiável e a execução tem disciplina, o resultado deixa de depender do mês, do herói ou da sorte. Passa a ser consequência.",
};

export const problems = {
  eyebrow: "Diagnóstico",
  title: "Sua empresa está crescendo — ou apenas trabalhando mais?",
  intro:
    "Se a empresa cresceu mas passou a depender de você para tudo, se o time vive apagando incêndios e cada semana parece mais complexa que a anterior, o problema raramente é falta de esforço. É a falta de um modelo capaz de sustentar o tamanho que você já alcançou.",
  items: [
    {
      title: "CRM que ninguém usa",
      description:
        "Uma ferramenta cara que virou repositório: dados que ninguém abre e decisões que continuam sendo tomadas no achismo.",
    },
    {
      title: "Vendas sem previsibilidade",
      description:
        "O resultado do mês depende do vendedor certo, do cliente certo e de um pouco de sorte — nunca de um sistema.",
    },
    {
      title: "Decisões sem indicadores",
      description:
        "Sem números confiáveis, cada escolha vira aposta. E o gestor costuma descobrir o problema tarde demais.",
    },
    {
      title: "Dependência de pessoas-chave",
      description:
        "Se alguém sai, a operação trava. O conhecimento está nas cabeças, não no modelo de gestão.",
    },
    {
      title: "Marketing e comercial desalinhados",
      description:
        "Geração de demanda e vendas correndo em trilhos paralelos, cada área cobrando a outra pelo resultado.",
    },
    {
      title: "Cada um opera do seu jeito",
      description:
        "Sem um padrão, não há escala: o que funciona com uma pessoa não se repete com dez.",
    },
  ],
};

export const methodology = {
  eyebrow: "Metodologia proprietária",
  title: "A Metodologia SPHERA",
  intro:
    "Crescer com previsibilidade não é sorte — é método. Seis estágios encadeados que levam a operação do diagnóstico à escala, transformando esforço disperso em capacidade de execução.",
  stages: [
    {
      n: "01",
      key: "DIAGNÓSTICO",
      title: "Diagnóstico completo da operação",
      description:
        "Leitura profunda de pessoas, rotina, ferramentas e indicadores — separando o que trava o crescimento do que apenas incomoda.",
      benefit: "Você enxerga, com clareza, onde a operação realmente trava.",
      icon: "Search",
    },
    {
      n: "02",
      key: "ARQUITETURA",
      title: "Arquitetura do crescimento",
      description:
        "Desenho do modelo comercial e empresarial ideal para o estágio atual da empresa — e para onde ela quer chegar.",
      benefit: "Um modelo pensado para o tamanho que a empresa quer alcançar.",
      icon: "DraftingCompass",
    },
    {
      n: "03",
      key: "INTEGRAÇÃO",
      title: "Integração entre áreas",
      description:
        "Geração de demanda, vendas e entrega alinhadas em um único fluxo, com responsabilidades claras entre as áreas.",
      benefit: "Marketing, vendas e entrega puxando na mesma direção.",
      icon: "Workflow",
    },
    {
      n: "04",
      key: "IMPLANTAÇÃO",
      title: "Implantação no dia a dia",
      description:
        "Rotinas, governança e CRM colocados para funcionar de verdade — não no slide, mas na operação real.",
      benefit: "Método que vira rotina e acontece no dia a dia.",
      icon: "Settings2",
    },
    {
      n: "05",
      key: "INDICADORES",
      title: "Previsibilidade e indicadores",
      description:
        "Um painel que transforma dados em decisão: o que medir, o que ajustar e o que isso significa em receita.",
      benefit: "Decisões baseadas em números, não em impressão.",
      icon: "BarChart3",
    },
    {
      n: "06",
      key: "ESCALA",
      title: "Escala e melhoria contínua",
      description:
        "Ciclos de refinamento que sustentam o crescimento sem deixar a complexidade crescer junto.",
      benefit: "Crescimento que se sustenta sem aumentar o caos.",
      icon: "TrendingUp",
    },
  ],
};

export const services = {
  eyebrow: "Serviços",
  title: "Como organizamos o crescimento",
  intro:
    "A SPHERA não vende software nem entrega relatório para engavetar. Cada frente parte de um problema real e devolve uma capacidade que a empresa passa a operar por conta própria.",
  items: [
    {
      title: "Diagnóstico Estratégico",
      icon: "Search",
      problem:
        "A empresa cresce, mas ninguém enxerga com clareza onde a operação trava nem o que limita o próximo salto.",
      structure:
        "Mapeamento completo da operação comercial, das rotinas, dos indicadores e das prioridades de crescimento.",
      result:
        "Uma leitura precisa da empresa e um plano com as poucas alavancas que realmente destravam o próximo ciclo.",
    },
    {
      title: "Estruturação Comercial",
      icon: "LayoutGrid",
      problem:
        "Cada pessoa vende de um jeito, sem padrão e sem previsibilidade de receita.",
      structure:
        "Funil de vendas, rotina comercial, governança e CRM desenhados e integrados de ponta a ponta.",
      result:
        "Uma operação comercial que funciona sem depender de heróis — previsível o bastante para escalar.",
    },
    {
      title: "Gestão Comercial Estratégica",
      icon: "Target",
      problem:
        "A operação precisa de liderança comercial sênior, mas ainda não comporta uma contratação integral.",
      structure:
        "Condução da operação comercial, definição de metas, ritmo de gestão e acompanhamento de indicadores.",
      result:
        "Direção experiente conduzindo o comercial com método — sem o custo de um executivo em tempo integral.",
    },
    {
      title: "Gestão por Indicadores",
      icon: "BarChart3",
      problem:
        "As decisões são tomadas no achismo, sem números confiáveis para orientar o caminho.",
      structure:
        "Padronização das rotinas críticas e definição dos indicadores que de fato movem o negócio.",
      result:
        "Os gestores passam a saber exatamente onde investir tempo, pessoas e dinheiro.",
    },
    {
      title: "Inteligência Artificial Aplicada aos Negócios",
      icon: "Sparkles",
      problem:
        "Tarefas repetitivas consomem o time e há dados que nunca viram produtividade nem decisão.",
      structure:
        "Automação e inteligência artificial aplicadas, com critério, nos pontos de maior atrito da operação.",
      result:
        "Menos tempo em tarefa repetitiva, mais tempo no que gera receita — e decisões mais bem embasadas.",
    },
  ],
};

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Por que a SPHERA",
  items: [
    {
      title: "Estratégia que vira rotina",
      description:
        "Plano que não acontece não muda resultado. Aqui, cada decisão estratégica desce até a rotina de quem executa.",
      icon: "Compass",
    },
    {
      title: "Método forjado na prática",
      description:
        "Construído dentro de operações reais que precisaram escalar — não em teoria de apresentação.",
      icon: "Rocket",
    },
    {
      title: "Mão na operação, até funcionar",
      description:
        "Não paramos na recomendação. Ficamos até a mudança acontecer e passar a se sustentar sozinha.",
      icon: "Hammer",
    },
    {
      title: "Um método próprio",
      description:
        "Um caminho testado do diagnóstico à escala: menos improviso e mais previsibilidade em cada etapa.",
      icon: "Boxes",
    },
    {
      title: "Pessoas, processos e tecnologia",
      description:
        "Crescimento não se sustenta em um pilar só. Integramos os três para que um não derrube o outro.",
      icon: "Users",
    },
    {
      title: "Decisão orientada a números",
      description:
        "Indicadores no centro de cada escolha — do board ao comercial — para investir onde há retorno real.",
      icon: "LineChart",
    },
  ],
};

export const about = {
  eyebrow: "Quem conduz",
  name: "Rafael Tavares",
  role: "Fundador",
  quote:
    "Passei anos vendo boas empresas travarem no próprio crescimento. Quase nunca por falta de mercado — quase sempre por falta de método.",
  paragraphs: [
    "Ao longo de mais de 15 anos liderando operações comerciais, Rafael Tavares viu um padrão se repetir: empresas competentes, com bom produto e demanda, que simplesmente paravam de crescer. Não por falta de esforço, mas porque a operação não acompanhava o ritmo do crescimento.",
    "Aprendeu, na prática, que crescer é a parte fácil. O difícil é sustentar — transformar vendas em previsibilidade, pessoas em processo e esforço em método. Foi dessa convicção que nasceu a SPHERA.",
    "Sua leitura sobre crescimento é direta: uma empresa madura não deveria depender de heróis, de planilhas paralelas ou do improviso de cada mês. Deveria depender de um modelo — claro o suficiente para qualquer pessoa executar e sólido o suficiente para escalar.",
    "Nessa trajetória, conduziu diagnósticos, desenhou modelos de gestão, implantou rotinas comerciais e organizou operações em diferentes estágios de maturidade, unindo visão estratégica a uma obsessão por execução.",
    "Hoje, à frente da SPHERA, dedica-se a uma coisa: ajudar empresários a transformar crescimento desorganizado em crescimento com estrutura — do tipo que se sustenta muito depois do primeiro ciclo.",
  ],
  tags: [
    "Estruturação Empresarial",
    "Governança Comercial",
    "Modelo de Gestão",
    "Indicadores e Performance",
    "Crescimento Sustentável",
    "IA Aplicada aos Negócios",
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
    text: "Uma consultoria boutique de estruturação comercial e empresarial, para empresas que já cresceram e agora precisam de organização, previsibilidade e capacidade de execução para sustentar o próximo ciclo.",
  },
};

export const contact = {
  eyebrow: "Vamos conversar",
  title: "Sua empresa tem potencial para crescer.",
  subtitle:
    "A pergunta é se a operação está preparada para sustentar esse crescimento.",
  whatsappCta: "Conversar sobre a operação",
  submitCta: "Solicitar Diagnóstico Estratégico",
  successTitle: "Recebemos o seu contato.",
  successText:
    "Obrigado. Em breve retornamos para agendar o seu Diagnóstico Estratégico.",
};

export const footer = {
  description:
    "Consultoria boutique de estruturação comercial e empresarial. Crescimento com organização, previsibilidade e execução.",
  navTitle: "Navegação",
  contactTitle: "Contato",
  copyright: "Todos os direitos reservados.",
};
