// ============================================================
// Sphera — Fonte de verdade de todo o conteúdo (copy) do site.
// Edite apenas este arquivo para alterar textos. Nenhuma copy
// deve ficar hardcoded nos componentes.
// ============================================================

export const site = {
  brand: "Sphera",
  domain: "spheralab.com.br",
  // URL canônica (www é o host principal; o apex faz 308 -> www).
  canonicalUrl: "https://www.spheralab.com.br",
  email: "contato@spheralab.com.br",
  whatsappNumber: "5548996924159",
  whatsapp: "https://wa.me/5548996924159",
  whatsappCta:
    "https://wa.me/5548996924159?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Sphera%20e%20gostaria%20de%20conversar%20sobre%20a%20minha%20empresa.",
  linkedin: "https://www.linkedin.com/in/rafaeltavaress",
  instagram: "https://www.instagram.com/lab.sphera/",
  // Formulário: destino dos leads. Ver contact.tsx / onboarding.
  formEmail: "tavares@spheralab.com.br",
  formAccessKey: "",
  tagline: "Organização que sai do papel e vira rotina.",
  seo: {
    title: "Sphera · Organização e Gestão para Pequenas e Médias Empresas",
    description:
      "A Sphera entra junto com pequenas e médias empresas para organizar a gestão e o comercial e colocar tudo pra funcionar na prática. Menos relatório, mais coisa acontecendo.",
  },
};

export const marquee = [
  "Organização",
  "Execução",
  "Rotina",
  "Clareza",
  "Mão na massa",
  "Resultado",
  "Crescimento",
];

export const nav = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Organização e execução para pequenas e médias empresas",
  description:
    "Você não precisa de mais um relatório. A Sphera entra junto com o seu time para organizar a gestão e o comercial e colocar tudo pra funcionar na prática, no dia a dia da sua empresa, até virar rotina.",
  primaryCta: "Falar no WhatsApp",
  secondaryCta: "Ver como funciona",
  meta: [
    "A gente põe a mão junto",
    "Para pequenas e médias empresas",
    "+15 anos ao lado de donos de negócio",
  ],
};

export const manifesto = {
  lead: "Empresa não muda com relatório.",
  emphasis: "Muda quando alguém põe a mão junto.",
  body: "Você já sabe boa parte do que precisa melhorar. O que falta é tempo e gente para fazer acontecer no meio da correria. A Sphera entra junto com o seu time, organiza o que está bagunçado e executa a mudança no dia a dia. Até virar rotina, não mais uma ideia parada na gaveta.",
};

export const belief = {
  eyebrow: "A crença",
  lead: "Sua empresa não tem problema de vendas.",
  emphasis: "Tem problema de organização.",
  body: "Vender mais em cima do caos só acelera o caos. Pesquisas do Sebrae apontam: o que fecha pequena empresa no Brasil é falta de gestão e organização, não falta de venda. Antes de correr atrás de mais cliente, organize o que você já tem.",
};

export const problems = {
  eyebrow: "Diagnóstico",
  title: "Sua empresa está crescendo ou apenas trabalhando mais?",
  intro:
    "Quase todo negócio que cresce rápido chega no mesmo ponto: mais clientes, mais gente, mais tarefas, e a sensação de que tudo depende de você. Não é falta de esforço. É que a empresa cresceu mais rápido do que a forma de organizá-la.",
  items: [
    {
      title: "Tudo depende do dono",
      description:
        "As decisões, os clientes importantes e os problemas do dia acabam todos na sua mesa. A empresa não anda sem você.",
    },
    {
      title: "Cada um trabalha de um jeito",
      description:
        "Sem uma forma combinada de trabalhar, cada pessoa faz do seu jeito, e o que dá certo com um não se repete com o resto.",
    },
    {
      title: "Informação espalhada",
      description:
        "Dados no WhatsApp, na planilha, na cabeça de alguém. Na hora de decidir, ninguém tem a visão completa.",
    },
    {
      title: "Vendas no sobe e desce",
      description:
        "Um mês bom, outro fraco. O resultado depende de quem está inspirado, não de uma rotina que se repete.",
    },
    {
      title: "Decisões na correria",
      description:
        "Falta tempo para pensar à frente. Quase tudo é resolvido no impulso, apagando um incêndio atrás do outro.",
    },
    {
      title: "A empresa cresceu, a organização não",
      description:
        "O time aumentou e o faturamento subiu, mas o jeito de tocar o negócio é o mesmo de quando tudo era menor.",
    },
  ],
};

export const methodology = {
  eyebrow: "Como a gente trabalha",
  title: "A Metodologia Sphera",
  intro:
    "Organizar uma empresa não precisa virar um projeto complicado, e você não faz isso sozinho. São seis passos simples que a gente percorre junto com o seu time, botando a mão, até o negócio rodar sem depender só de você.",
  stages: [
    {
      n: "01",
      key: "ENTENDER",
      title: "Entender como a empresa funciona hoje",
      description:
        "A gente mergulha na rotina real do negócio: como se vende, quem faz o quê e onde as coisas emperram.",
      benefit: "Você enxerga, com clareza, o que está travando o crescimento.",
      icon: "Search",
    },
    {
      n: "02",
      key: "PLANEJAR",
      title: "Desenhar um jeito melhor de trabalhar",
      description:
        "Definimos, junto com você, como a empresa deveria funcionar para o tamanho que ela tem hoje e para onde quer chegar.",
      benefit: "Um plano prático, no tamanho da sua empresa.",
      icon: "DraftingCompass",
    },
    {
      n: "03",
      key: "ORGANIZAR",
      title: "Colocar cada área no lugar",
      description:
        "Marketing, vendas e entrega deixam de trabalhar soltos e passam a seguir um caminho combinado.",
      benefit: "As áreas param de se atropelar e passam a se ajudar.",
      icon: "Workflow",
    },
    {
      n: "04",
      key: "EXECUTAR",
      title: "Colocar pra funcionar",
      description:
        "As combinações saem do papel e viram rotina do dia a dia, com ferramentas simples, do jeito que a sua equipe consegue usar.",
      benefit: "A mudança acontece na prática, não fica no papel.",
      icon: "Settings2",
    },
    {
      n: "05",
      key: "ACOMPANHAR",
      title: "Acompanhar de perto",
      description:
        "Poucos números, só os que importam, para você saber o que está indo bem e o que precisa de atenção.",
      benefit: "Você decide pelo que vê, não pelo achismo.",
      icon: "BarChart3",
    },
    {
      n: "06",
      key: "CRESCER",
      title: "Crescer com melhoria contínua",
      description:
        "Com a casa organizada, pequenos ajustes constantes sustentam o crescimento sem trazer a bagunça de volta.",
      benefit: "Crescer sem voltar a depender de você para tudo.",
      icon: "TrendingUp",
    },
  ],
};

export const services = {
  eyebrow: "Serviços",
  title: "No que a gente entra junto",
  intro:
    "A Sphera não vende sistema nem entrega relatório para engavetar. A gente organiza junto com você, coloca pra funcionar e fica até a empresa conseguir tocar sozinha.",
  items: [
    {
      title: "Diagnóstico da Empresa",
      icon: "Search",
      problem:
        "Você sente que a empresa poderia render mais, mas não sabe dizer exatamente onde ela perde tempo e dinheiro.",
      structure:
        "Olhamos o negócio por dentro (vendas, rotina e equipe) e mostramos onde estão os gargalos e as maiores oportunidades.",
      result:
        "Você passa a saber, com clareza, o que resolver primeiro para destravar o próximo crescimento.",
    },
    {
      title: "Organização Comercial",
      icon: "LayoutGrid",
      problem:
        "Cada um vende do seu jeito e o resultado do mês é sempre uma surpresa.",
      structure:
        "Montamos e implantamos uma forma clara de vender: etapas, rotina e acompanhamento que qualquer pessoa da equipe consegue seguir.",
      result:
        "As vendas ficam mais previsíveis e param de depender só de você ou de um vendedor estrela.",
    },
    {
      title: "Gestão Comercial",
      icon: "Target",
      problem:
        "A empresa precisa de alguém experiente puxando o comercial, mas ainda não comporta contratar um diretor.",
      structure:
        "A gente assume a condução do comercial junto com você: metas, ritmo e acompanhamento da equipe, na linha de frente.",
      result:
        "Você ganha uma cabeça experiente no comercial sem o custo de um executivo em tempo integral.",
    },
    {
      title: "Acompanhamento de Resultados",
      icon: "BarChart3",
      problem:
        "As decisões são tomadas no feeling, sem um jeito simples de saber se o negócio está indo bem.",
      structure:
        "Definimos poucos números que importam e montamos uma rotina leve para acompanhá-los, no ritmo da empresa.",
      result:
        "Você passa a saber onde investir tempo, pessoas e dinheiro, sem virar refém de planilha.",
    },
    {
      title: "Inteligência Artificial no Dia a Dia",
      icon: "Sparkles",
      problem:
        "Sua equipe perde horas em tarefas repetitivas que ninguém gosta de fazer.",
      structure:
        "Colocamos automações e inteligência artificial pra rodar em pontos simples da rotina, sem complicação.",
      result:
        "Sobra mais tempo para o que traz cliente e receita, e menos energia no operacional.",
    },
  ],
};

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Por que a Sphera",
  items: [
    {
      title: "A gente executa, não só aconselha",
      description:
        "Ninguém entrega um relatório e some. Entramos junto e ficamos até a mudança pegar no dia a dia.",
      icon: "Compass",
    },
    {
      title: "Já vivemos esse tipo de empresa",
      description:
        "Sabemos como é tocar um negócio em que tudo passa pelo dono, porque já estivemos desse lado.",
      icon: "Rocket",
    },
    {
      title: "Organiza sem burocratizar",
      description:
        "Nada de manual gigante que ninguém lê. Rotinas simples, no tamanho da sua empresa, que a equipe realmente usa.",
      icon: "Hammer",
    },
    {
      title: "Prático, não teórico",
      description:
        "Menos apresentação bonita, mais coisa acontecendo. O foco é o que muda na sua semana, não o discurso.",
      icon: "Boxes",
    },
    {
      title: "No ritmo da sua empresa",
      description:
        "Colocamos a casa em ordem sem travar o negócio: dá para crescer e arrumar ao mesmo tempo.",
      icon: "Users",
    },
    {
      title: "Perto, de verdade",
      description:
        "Você fala direto com quem executa, não com um gerente de contas. Proximidade é parte do trabalho.",
      icon: "LineChart",
    },
  ],
};

export const about = {
  eyebrow: "Quem conduz",
  name: "Rafael Tavares",
  role: "Fundador",
  quote:
    "Já estive do outro lado do balcão. Sei o que é a empresa crescer e, de repente, tudo depender de você.",
  paragraphs: [
    "Depois de mais de 15 anos trabalhando dentro de operações comerciais, percebi que empresas raramente deixam de crescer por falta de clientes.",
    "Na maioria das vezes, o crescimento acontece. O faturamento aumenta. A equipe cresce. Os desafios também. E, sem perceber, o dono passa a ser o centro de tudo. Cada decisão depende dele, cada problema chega à sua mesa e cada novo cliente aumenta ainda mais a carga de trabalho.",
    "O problema deixa de ser vender. Passa a ser organizar a empresa para sustentar o crescimento.",
    "Foi exatamente nesse cenário que construí minha carreira. Durante mais de uma década, atuei estruturando operações comerciais, liderando projetos estratégicos, implantando processos, indicadores e modelos de gestão que transformavam empresas dependentes de pessoas em empresas capazes de crescer com mais previsibilidade, organização e capacidade de execução.",
    "Ao longo dessa jornada, participei da evolução de empresas em diferentes estágios de crescimento. Vi de perto o impacto que uma operação organizada pode gerar e também o quanto a falta de estrutura limita negócios com enorme potencial.",
    "Mas também percebi outro problema.",
    "Grande parte das consultorias entregava diagnósticos impecáveis, apresentações bonitas e planos estratégicos completos. O empresário entendia o caminho, mas continuava sozinho para executar. O planejamento acabava esquecido em uma gaveta enquanto a rotina voltava a consumir toda a energia da empresa.",
    "Foi para mudar essa realidade que nasceu a Sphera.",
    "A Sphera não foi criada para entregar relatórios. Foi criada para trabalhar ao lado do empresário, organizando a operação, implantando processos, estruturando indicadores, fortalecendo a liderança e transformando planejamento em execução.",
    "Essa forma de atuar nasceu da prática e foi fortalecida por uma formação contínua em gestão e estratégia. Sou graduado em Relações Internacionais pelo Centro Universitário Internacional (Uninter), participei do Programa de Desenvolvimento de Dirigentes (PDD) da Fundação Dom Cabral e sou pós-graduado em Gestão Estratégica e IA aplicada aos Negócios (FIAP + Alura). Acredito que empresas crescem de forma sustentável quando estratégia, gestão e execução caminham juntas.",
    "No fim, minha convicção continua sendo a mesma.",
    "Empresas não precisam depender do dono para funcionar. Precisam de estrutura para crescer.",
    "Se hoje sua empresa depende de você para praticamente tudo, esse não é um problema de dedicação. É um problema de organização. E é exatamente isso que a Sphera existe para resolver.",
  ],
  tags: [
    "Organização",
    "Gestão comercial",
    "Rotina de trabalho",
    "Acompanhamento de resultados",
    "Execução no dia a dia",
    "IA aplicada ao negócio",
  ],
};

export const positioning = {
  eyebrow: "Posicionamento",
  title: "O que a Sphera é e o que não é.",
  isNot: {
    label: "A SPHERA NÃO É",
    items: [
      "Agência",
      "Empresa de software",
      "Empresa de marketing",
      "Consultoria que só aconselha",
    ],
  },
  is: {
    label: "A Sphera é",
    text: "Quem entra junto e coloca a sua empresa pra funcionar. Menos relatório, mais coisa acontecendo.",
  },
};

export const contact = {
  eyebrow: "Vamos conversar",
  title: "Dá para crescer sem que tudo dependa de você.",
  subtitle:
    "O diagnóstico é o primeiro passo: a gente entende onde a sua empresa está travando e o que dá para colocar pra funcionar primeiro.",
  whatsappCta: "Conversar sobre a sua empresa",
  submitCta: "Solicitar meu diagnóstico",
  successTitle: "Recebemos o seu contato.",
  successText:
    "Obrigado. Em breve retornamos para conversar sobre a sua empresa e combinar o diagnóstico.",
};

export const footer = {
  description:
    "A gente entra junto com pequenas e médias empresas para organizar a gestão e o comercial e colocar tudo pra funcionar na prática, até virar rotina.",
  navTitle: "Navegação",
  contactTitle: "Contato",
  copyright: "Todos os direitos reservados.",
};
