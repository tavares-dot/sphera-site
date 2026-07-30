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
    "https://wa.me/5548996924159?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20SPHERA%20e%20gostaria%20de%20conversar%20sobre%20a%20minha%20empresa.",
  linkedin: "https://www.linkedin.com/in/rafaeltavaress",
  instagram: "https://www.instagram.com/lab.sphera/",
  // Formulário: destino dos leads. Ver contact.tsx / onboarding.
  formEmail: "tavares@spheralab.com.br",
  formAccessKey: "",
  tagline: "Organização para crescer com mais controle.",
  seo: {
    title: "SPHERA — Estruturação Comercial e Empresarial",
    description:
      "Consultoria boutique que ajuda pequenas e médias empresas a organizar a gestão, o comercial e a rotina para crescer com mais controle — sem depender só do dono.",
  },
};

export const marquee = [
  "Organização",
  "Rotina",
  "Clareza",
  "Gestão",
  "Acompanhamento",
  "Controle",
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
  eyebrow: "Consultoria para pequenas e médias empresas",
  description:
    "Sua empresa cresceu no esforço e na prática — e hoje quase tudo passa pela sua mão. A SPHERA ajuda pequenos e médios negócios a organizar a gestão, o comercial e a rotina para crescer com mais controle, sem depender só do dono.",
  primaryCta: "Solicitar Diagnóstico",
  secondaryCta: "Ver como funciona",
  meta: [
    "Consultoria boutique",
    "Foco em pequenas e médias empresas",
    "+15 anos ao lado de donos de negócio",
  ],
};

export const manifesto = {
  lead: "Nenhuma empresa trava por falta de vendas.",
  emphasis: "Trava quando a organização não acompanha o crescimento.",
  body: "Negócios que cresceram no esforço chegam a um ponto em que tudo passa pelo dono, cada um trabalha de um jeito e as decisões acontecem na correria. Não falta capacidade — falta organização. E é a organização que permite continuar crescendo sem perder o controle.",
};

export const problems = {
  eyebrow: "Diagnóstico",
  title: "Sua empresa está crescendo — ou apenas trabalhando mais?",
  intro:
    "Quase todo negócio que cresce rápido chega no mesmo ponto: mais clientes, mais gente, mais tarefas — e a sensação de que tudo depende de você. Não é falta de esforço. É que a empresa cresceu mais rápido do que a forma de organizá-la.",
  items: [
    {
      title: "Tudo depende do dono",
      description:
        "As decisões, os clientes importantes e os problemas do dia acabam todos na sua mesa. A empresa não anda sem você.",
    },
    {
      title: "Cada um trabalha de um jeito",
      description:
        "Sem uma forma combinada de trabalhar, cada pessoa faz do seu jeito — e o que dá certo com um não se repete com o resto.",
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
  title: "A Metodologia SPHERA",
  intro:
    "Organizar uma empresa não precisa virar um projeto complicado. São seis passos simples, um puxando o outro, que levam o negócio da bagunça do crescimento a uma rotina que funciona sem depender só de você.",
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
        "Definimos, junto com você, como a empresa deveria funcionar para o tamanho que ela tem hoje — e para onde quer chegar.",
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
      key: "IMPLANTAR",
      title: "Transformar em rotina",
      description:
        "As combinações viram rotina do dia a dia, com ferramentas simples — do jeito que a sua equipe consegue usar.",
      benefit: "Método que acontece na prática, não fica no papel.",
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
  title: "No que a gente ajuda",
  intro:
    "A SPHERA não vende sistema nem entrega relatório para engavetar. A gente organiza junto com você — e deixa a empresa rodando de um jeito que ela consegue manter depois.",
  items: [
    {
      title: "Diagnóstico da Empresa",
      icon: "Search",
      problem:
        "Você sente que a empresa poderia render mais, mas não sabe dizer exatamente onde ela perde tempo e dinheiro.",
      structure:
        "Olhamos o negócio por dentro — vendas, rotina e equipe — e mostramos onde estão os gargalos e as maiores oportunidades.",
      result:
        "Você passa a saber, com clareza, o que resolver primeiro para destravar o próximo crescimento.",
    },
    {
      title: "Organização Comercial",
      icon: "LayoutGrid",
      problem:
        "Cada um vende do seu jeito e o resultado do mês é sempre uma surpresa.",
      structure:
        "Montamos uma forma clara de vender: etapas, rotina e acompanhamento que qualquer pessoa da equipe consegue seguir.",
      result:
        "As vendas ficam mais previsíveis e param de depender só de você ou de um vendedor estrela.",
    },
    {
      title: "Gestão Comercial",
      icon: "Target",
      problem:
        "A empresa precisa de alguém experiente puxando o comercial, mas ainda não comporta contratar um diretor.",
      structure:
        "A gente assume a condução do comercial junto com você: metas, ritmo e acompanhamento da equipe.",
      result:
        "Você ganha uma cabeça experiente no comercial sem o custo de um executivo em tempo integral.",
    },
    {
      title: "Acompanhamento de Resultados",
      icon: "BarChart3",
      problem:
        "As decisões são tomadas no feeling, sem um jeito simples de saber se o negócio está indo bem.",
      structure:
        "Definimos poucos números que importam e uma rotina leve para acompanhá-los, no ritmo da empresa.",
      result:
        "Você passa a saber onde investir tempo, pessoas e dinheiro — sem virar refém de planilha.",
    },
    {
      title: "Inteligência Artificial no Dia a Dia",
      icon: "Sparkles",
      problem:
        "Sua equipe perde horas em tarefas repetitivas que ninguém gosta de fazer.",
      structure:
        "Aplicamos automações e inteligência artificial em pontos simples da rotina, sem complicação.",
      result:
        "Sobra mais tempo para o que traz cliente e receita — e menos energia no operacional.",
    },
  ],
};

export const differentials = {
  eyebrow: "Diferenciais",
  title: "Por que a SPHERA",
  items: [
    {
      title: "Organiza sem burocratizar",
      description:
        "Nada de manual gigante que ninguém lê. Rotinas simples, no tamanho da sua empresa, que a equipe realmente usa.",
      icon: "Compass",
    },
    {
      title: "Já vivemos esse tipo de empresa",
      description:
        "Sabemos como é tocar um negócio em que tudo passa pelo dono — porque já estivemos desse lado.",
      icon: "Rocket",
    },
    {
      title: "Mão na massa, até funcionar",
      description:
        "Não entregamos um relatório e sumimos. Ficamos junto até a mudança pegar no dia a dia.",
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
        "Organizamos sem travar o negócio: dá para crescer e arrumar a casa ao mesmo tempo.",
      icon: "Users",
    },
    {
      title: "Feito para o seu porte",
      description:
        "Nada de solução de multinacional adaptada. É pensado para empresas do seu tamanho, do seu jeito.",
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
    "O Rafael não aprendeu isso em livro. Passou mais de 15 anos dentro de operações comerciais, tocando o dia a dia de empresas que cresciam mais rápido do que conseguiam se organizar.",
    "Viu de perto o mesmo filme se repetir: bom produto, cliente chegando, faturamento subindo — e um dono sobrecarregado, resolvendo tudo, sem tempo de olhar para frente. O problema quase nunca era vender. Era organizar.",
    "Foi daí que nasceu a SPHERA: a ideia de que dá para profissionalizar uma empresa sem transformá-la numa máquina engessada. Organizar o que já funciona, criar rotina sem perder agilidade e tirar o negócio da dependência total do dono.",
    "Hoje ele faz isso ao lado de pequenos e médios empresários — gente que construiu a empresa na raça e agora quer crescer com mais controle e menos sufoco.",
    "A convicção é simples: empresa organizada cresce melhor, e o dono volta a trabalhar no negócio, não só dentro dele.",
  ],
  tags: [
    "Organização",
    "Gestão comercial",
    "Rotina de trabalho",
    "Acompanhamento de resultados",
    "Crescimento com controle",
    "IA no dia a dia",
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
      "Consultoria de grande empresa",
    ],
  },
  is: {
    label: "A SPHERA é",
    text: "Uma consultoria boutique que ajuda pequenas e médias empresas a organizar a gestão, o comercial e a rotina — para crescer com mais controle e menos dependência do dono.",
  },
};

export const contact = {
  eyebrow: "Vamos conversar",
  title: "Dá para crescer sem que tudo dependa de você.",
  subtitle:
    "O diagnóstico é o primeiro passo: entender onde a sua empresa está travando e o que organizar primeiro.",
  whatsappCta: "Conversar sobre a sua empresa",
  submitCta: "Solicitar meu diagnóstico",
  successTitle: "Recebemos o seu contato.",
  successText:
    "Obrigado. Em breve retornamos para conversar sobre a sua empresa e agendar o diagnóstico.",
};

export const footer = {
  description:
    "Consultoria boutique que ajuda pequenas e médias empresas a organizar a gestão, o comercial e a rotina para crescer com mais controle.",
  navTitle: "Navegação",
  contactTitle: "Contato",
  copyright: "Todos os direitos reservados.",
};
