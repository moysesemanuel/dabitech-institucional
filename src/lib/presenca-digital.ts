import { WHATSAPP_URL } from "@/lib/site";

export const LANDING_PATH = "/presenca-digital";

export const WA_MESSAGE =
  "Olá! Conheci o DaBi Presença Digital e gostaria de criar um site profissional para meu negócio.";
export const WA_LINK = `${WHATSAPP_URL}?text=${encodeURIComponent(WA_MESSAGE)}`;

export const PRICE = {
  total: "R$ 797",
  half: "R$ 398,50",
  eta: "3 a 5 dias úteis",
};

export const NAV = [
  { href: "#exemplos", label: "Exemplos" },
  { href: "#incluido", label: "O que inclui" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#investimento", label: "Investimento" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export type ExampleSlug = "beleza" | "confeitaria" | "automotivo" | "residencial";

export const EXAMPLES: ReadonlyArray<{
  slug: ExampleSlug;
  tab: string;
  chip: string;
  name: string;
  segment: string;
  description: string;
  palette: readonly string[];
  fonts: string;
}> = [
  {
    slug: "beleza",
    tab: "Beleza e serviços",
    chip: "Beleza",
    name: "Studio Lume",
    segment: "Beleza e serviços pessoais",
    description:
      "Foto grande logo de entrada, tipografia serifada elegante, tons terrosos e preços visíveis sem precisar perguntar.",
    palette: ["#F6EFE7", "#1E3A33", "#F0C9B3", "#8A4F3B"],
    fonts: "Cormorant Garamond + Jost",
  },
  {
    slug: "confeitaria",
    tab: "Confeitaria",
    chip: "Confeitaria",
    name: "Doce Alvorada",
    segment: "Gastronomia e confeitaria",
    description:
      "Foto de produto em destaque, tipografia quente de padaria artesanal e vitrine com nome e preço de cada item.",
    palette: ["#FBF0DC", "#B22E25", "#3B2218", "#F2B544"],
    fonts: "Fraunces + DM Sans",
  },
  {
    slug: "automotivo",
    tab: "Estética automotiva",
    chip: "Automotivo",
    name: "Brasa Estética Automotiva",
    segment: "Serviços automotivos",
    description:
      "Visual escuro de alto contraste, letras condensadas em caixa-alta e fotos de serviço que mostram o trabalho.",
    palette: ["#14181D", "#F2C200", "#F4F1EA", "#8A929C"],
    fonts: "Barlow Condensed + Barlow",
  },
  {
    slug: "residencial",
    tab: "Serviços residenciais",
    chip: "Serviços residenciais",
    name: "Casa em Ordem",
    segment: "Serviços residenciais",
    description:
      "Visual claro e acolhedor, verde profundo com amarelo de ação, linguagem direta e serviços em destaque com foto do trabalho.",
    palette: ["#FFFFFF", "#12302B", "#0B7A5E", "#FFB703"],
    fonts: "Bricolage Grotesque + Manrope",
  },
];

export const PAINS = [
  {
    title: "O cliente não acha o básico.",
    text: "Endereço, horário e serviços ficam perdidos entre publicações antigas.",
  },
  {
    title: "Seu catálogo vive no feed.",
    text: "Produtos e serviços aparecem em posts soltos, sem uma ordem para consultar.",
  },
  {
    title: "Tudo depende de um perfil.",
    text: "Se a rede social muda ou o alcance cai, sua vitrine muda junto.",
  },
  {
    title: "As mesmas perguntas, todo dia.",
    text: "“Qual o valor?”, “Onde fica?”, “Abre sábado?” tomam tempo do atendimento.",
  },
] as const;

export const BENEFITS = [
  { title: "Apresentação profissional", text: "Um espaço com a identidade da sua empresa, cores e tom de voz do seu jeito." },
  { title: "Tudo organizado", text: "Serviços, fotos, localização e horários no mesmo lugar, do jeito que o cliente procura." },
  { title: "Presença além das redes", text: "Um endereço próprio para colocar no Instagram, no cartão, no Google e na assinatura do WhatsApp." },
] as const;

export const INCLUDED = [
  "Site profissional de página única",
  "Design responsivo: celular, tablet e computador",
  "Até seis seções de conteúdo",
  "Apresentação da empresa",
  "Até oito produtos ou serviços",
  "Galeria de até 12 imagens",
  "Botão de atendimento pelo WhatsApp",
  "Links para redes sociais",
  "Endereço, localização e horários, quando houver",
  "SEO básico: título, descrição, títulos de seção e Open Graph",
  "Configuração do domínio que você já tem e publicação",
  "Uma rodada consolidada de ajustes",
] as const;

export const NOT_INCLUDED = [
  "Registro e renovação de domínio",
  "Hospedagem paga, quando necessária",
  "Manutenção contínua",
  "Painel administrativo e banco de dados",
  "Loja com carrinho e pagamento",
  "Integrações avançadas",
  "Alterações ilimitadas",
  "Criação de logotipo e produção de fotos (você envia os seus materiais)",
] as const;

export const STEPS = [
  {
    title: "Conte sobre seu negócio",
    text: `Você envia informações, serviços, imagens e referências pelo WhatsApp. Com a entrada de ${PRICE.half}, reservamos o seu projeto.`,
  },
  {
    title: "Nós criamos seu site",
    text: "A DaBi Tech adapta o design ao seu negócio e desenvolve a página. Você recebe para aprovação e pede os ajustes em uma rodada.",
  },
  {
    title: "Seu site entra no ar",
    text: `Com a revisão aprovada e o saldo de ${PRICE.half} pago, publicamos o site no seu domínio.`,
  },
] as const;

export const FAQ = [
  {
    q: "Preciso pagar mensalidade?",
    a: `Não pelo desenvolvimento. O valor de ${PRICE.total} é pago em duas parcelas. Domínio e hospedagem, quando necessária, são custos à parte.`,
  },
  {
    q: "Preciso ter domínio?",
    a: "Se você já tem, nós configuramos. Se ainda não tem, registre o seu (o registro não está incluso) e nós ajudamos a ligar ao site.",
  },
  {
    q: "Como envio as informações?",
    a: "Pelo WhatsApp. Você manda textos, serviços, fotos, logotipo e referências, e nós organizamos tudo no site.",
  },
  {
    q: "Quanto tempo leva?",
    a: `O prazo-alvo é de ${PRICE.eta}, depois de recebermos todos os materiais e a entrada, mediante confirmação de disponibilidade.`,
  },
  {
    q: "Posso solicitar alterações?",
    a: "Sim. O pacote inclui uma rodada consolidada de ajustes. Reúna tudo o que quiser mudar e envie de uma vez.",
  },
  {
    q: "O site funciona no celular?",
    a: "Sim. Todo site é responsivo e se adapta a celular, tablet e computador.",
  },
  {
    q: "Consigo vender produtos pelo site?",
    a: "Você pode mostrar seus produtos e receber pedidos pelo WhatsApp. Loja com carrinho e pagamento não faz parte deste pacote.",
  },
  {
    q: "O que acontece depois da publicação?",
    a: "O site fica no ar no seu domínio. Novas alterações depois da publicação podem ser combinadas com a DaBi Tech e orçadas à parte.",
  },
] as const;

export const PHOTO_CREDITS =
  "Benyamin Bohlouli, Guilherme Petri, Yaya The Creator, Ulysse Pointcheval, Kirsten Drew, Kilyan Sockalingum, Luay Barani, mintosko, Yuvraj Singh, Samuele Errico Piccarini, Francesca Tosolini, Savannah du Toit, Timur Shakerzianov e Renovations Certified";
