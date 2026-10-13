import { PRICE_URL, WHATSAPP_URL } from "@/lib/site";

const whatsapp = (message: string) => `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

export type Screenshot = { src: string; alt: string; width: number; height: number };

// Capturas reais dos sistemas (dados de demonstração), em /public/solucoes.
export const SCREENSHOTS: { agendai: Screenshot; price: Screenshot } = {
  agendai: {
    src: "/solucoes/agendai.png",
    alt: "Painel do DaBi Agendaí com a agenda semanal de uma barbearia, agendamentos por profissional e menu lateral de gestão",
    width: 1600,
    height: 699,
  },
  price: {
    src: "/solucoes/price.png",
    alt: "DaBi Price: exemplo de configuração para impressão 3D, com formulário de custos, canais de venda e painel de decisão com preço e margem",
    width: 1400,
    height: 961,
  },
};
export const PRICE_CAPTION = "Exemplo de configuração para impressão 3D";

export const ABOUT_PATH = "/sobre";

export const NAV_LINKS = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/#o-que-fazemos", label: "O que fazemos" },
  { href: ABOUT_PATH, label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export const CONTACT_CTA = whatsapp("Olá! Vim pelo site da DaBi Tech e gostaria de conversar.");
export const FINAL_CTA = whatsapp(
  "Olá! Vim pelo site da DaBi Tech. Quero conversar sobre uma solução para o meu negócio.",
);
export const CUSTOM_CTA = whatsapp("Olá! Quero conversar sobre um projeto de sistema sob medida.");

// Destino único do DaBi Price (card e rodapé). Sem URL oficial, cai na demonstração via WhatsApp.
export const PRICE_LINK = PRICE_URL
  ? { href: PRICE_URL, label: "Conhecer o DaBi Price" }
  : { href: whatsapp("Olá! Quero solicitar uma demonstração do DaBi Price."), label: "Solicitar demonstração" };

export const HERO_BENEFITS = [
  { icon: "calendar", lines: ["Agenda online", "para barbearias"] },
  { icon: "tag", lines: ["Preços com as regras", "do seu negócio"] },
  { icon: "code", lines: ["Sistemas feitos para", "o seu processo"] },
] as const;

export type Solution = {
  id: "agendai" | "price" | "custom";
  name: string;
  category: string;
  description: string;
  cta: string;
  href: string;
  external: boolean;
  icon: "calendar" | "bar-chart-fill" | "code";
};

export const SOLUTIONS: Solution[] = [
  {
    id: "agendai",
    name: "DaBi Agendaí",
    category: "Agendamento e gestão para barbearias",
    description:
      "O cliente escolhe serviço, profissional e horário, e a equipe acompanha a agenda do dia. Comandas, clientes e comissões ficam no mesmo painel.",
    cta: "Conhecer o DaBi Agendaí",
    href: "https://agendai.dabitech.com.br/negocios/barbearias",
    external: true,
    icon: "calendar",
  },
  {
    id: "price",
    name: "DaBi Price",
    category: "Precificação para diferentes negócios",
    description:
      "Calcule preços a partir dos seus custos e das regras do seu negócio. A configuração se adapta à sua operação e ao canal de venda, e o painel mostra lucro e margem antes de você definir o valor.",
    cta: PRICE_LINK.label,
    href: PRICE_LINK.href,
    external: true,
    icon: "bar-chart-fill",
  },
  {
    id: "custom",
    name: "Sistema sob medida",
    category: "Desenvolvimento personalizado",
    description:
      "Para o processo que não cabe em um produto pronto: planilhas que só uma pessoa entende, informações espalhadas entre sistemas, tarefas repetidas à mão. Mapeamos a sua operação e construímos o sistema para ela.",
    cta: "Conversar sobre meu projeto",
    href: CUSTOM_CTA,
    external: true,
    icon: "code",
  },
];

export const PRODUCT_CAPABILITIES = [
  {
    icon: "calendar",
    name: "Agendamento",
    desc: "Agenda online por serviço, profissional, data e horário, com bloqueio automático de conflitos. Disponível hoje para barbearias.",
    tag: "DaBi Agendaí",
    visual: "agendai",
  },
  {
    icon: "tag",
    name: "Precificação",
    desc: "Cálculo de custo e preço a partir das regras do seu negócio, com visão de lucro e margem por canal de venda.",
    tag: "DaBi Price",
    visual: "price",
  },
] as const;

export const CUSTOM_CAPABILITIES = [
  {
    icon: "bar-chart-fill",
    name: "Gestão comercial",
    desc: "Catálogo, estoque, pedidos e vendas em um painel feito para o seu processo.",
  },
  {
    icon: "headset",
    name: "Atendimento",
    desc: "Central para organizar solicitações, prioridades e respostas da sua equipe.",
  },
  {
    icon: "shield",
    name: "Controle de acesso",
    desc: "Login e permissões por função, para cada pessoa ver só o que precisa.",
  },
  {
    icon: "link",
    name: "Integrações",
    desc: "Conexão entre sistemas, plataformas e planilhas que hoje não conversam entre si.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    icon: "search",
    title: "Diagnóstico",
    text: "Entendemos como a sua operação funciona hoje: o que é feito, por quem e onde estão os gargalos.",
  },
  {
    icon: "doc",
    title: "Arquitetura",
    text: "Definimos como o sistema vai guardar as informações, quais telas e regras terá e com o que vai se conectar, antes de programar.",
  },
  {
    icon: "code",
    title: "Construção",
    text: "Desenvolvemos em etapas curtas, mostrando o avanço e validando cada entrega com a sua equipe.",
  },
  {
    icon: "rocket-takeoff-fill",
    title: "Operação",
    text: "Colocamos o sistema em uso, acompanhamos a rotina e fazemos ajustes e melhorias a partir do uso real.",
  },
] as const;

export const PRINCIPLES = [
  { icon: "search", title: "Clareza", text: "Explicamos o que será feito, como e por quê, em linguagem direta." },
  { icon: "users", title: "Atenção à realidade do cliente", text: "Partimos do processo real de cada negócio, não de um modelo genérico." },
  { icon: "refresh", title: "Evolução contínua", text: "Produtos e sistemas melhoram a partir do uso real." },
] as const;

export const ABOUT_PRINCIPLES = [
  PRINCIPLES[0],
  PRINCIPLES[1],
  { icon: "shield", title: "Desenvolvimento responsável", text: "Dados, acessos e manutenção fazem parte do projeto desde o início." },
  PRINCIPLES[2],
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Soluções",
    links: [
      { label: "DaBi Agendaí", href: SOLUTIONS[0].href, external: true },
      { label: "DaBi Price", href: PRICE_LINK.href, external: true },
      { label: "Sistema sob medida", href: "/#sob-medida" },
    ],
  },
  {
    title: "O que fazemos",
    links: [
      { label: "Agendamento", href: "/#o-que-fazemos" },
      { label: "Precificação", href: "/#o-que-fazemos" },
      { label: "Projetos sob medida", href: "/#como-trabalhamos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre a DaBi Tech", href: ABOUT_PATH },
      { label: "Como desenvolvemos", href: "/#como-trabalhamos" },
      { label: "Fale conosco", href: "#contato" },
    ],
  },
];
