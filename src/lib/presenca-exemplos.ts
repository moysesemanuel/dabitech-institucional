import type { ExampleSlug } from "@/lib/presenca-digital";

// Conteúdo dos sites de exemplo (dados fictícios, só para demonstração).
export type ExampleSite = {
  slug: ExampleSlug;
  brand: string;
  title: string;
  description: string;
  theme: Record<string, string>;
  hero: { variant: "overlay" | "split"; kicker: string; title: string; em: string; text: string; cta: string; image: string };
  servicesTitle: string;
  servicesLayout: "list" | "cards";
  services: { name: string; text: string; price: string; image?: string }[];
  about: { title: string; text: string; image: string };
  gallery: string[];
  hours: string[];
  address: string;
  contactTitle: string;
  contactText: string;
  contactCta: string;
  nav: string[];
};

export const EXAMPLE_SITES: Record<ExampleSlug, ExampleSite> = {
  beleza: {
    slug: "beleza",
    brand: "Lume",
    title: "Studio Lume | Beleza e cuidados em Curitiba",
    description: "Exemplo de site para salão de beleza criado pela DaBi Tech. Projeto demonstrativo.",
    theme: {
      "--bg": "#F6EFE7", "--fg": "#1E3A33", "--muted": "#3F5750", "--accent": "#1E3A33", "--on-accent": "#F6EFE7",
      "--soft": "#EADFD2", "--line": "#1E3A3333", "--mark": "#8A4F3B",
      "--display": "var(--pd-lume-serif), serif", "--body": "var(--pd-lume-sans), sans-serif",
      "--dw": "500", "--dtt": "none", "--radius": "999px", "--card-radius": "14px", "--hero-em": "#F0C9B3", "--shade": "14,26,22",
    },
    hero: {
      variant: "overlay", kicker: "Studio de beleza · Curitiba", title: "Seu momento de cuidado,", em: "com hora marcada.",
      text: "Cabelo, unhas e sobrancelha em um ambiente calmo, com produtos selecionados e atendimento sem pressa.",
      cta: "Agendar pelo WhatsApp", image: "salao-ambiente",
    },
    servicesTitle: "Cuidados que combinam com você", servicesLayout: "list",
    services: [
      { name: "Corte e escova", text: "Avaliação do fio e acabamento para o seu dia a dia.", price: "a partir de R$ 70" },
      { name: "Coloração", text: "Cor sob medida, com teste de mecha quando necessário.", price: "a partir de R$ 140" },
      { name: "Manicure e pedicure", text: "Cuidado completo com esmaltação em cores à escolha.", price: "a partir de R$ 55" },
      { name: "Design de sobrancelha", text: "Desenho que respeita o formato do seu rosto.", price: "a partir de R$ 45" },
      { name: "Hidratação profunda", text: "Tratamento para recuperar brilho e maciez.", price: "a partir de R$ 90" },
      { name: "Penteados", text: "Para festas, formaturas e ocasiões especiais.", price: "sob consulta" },
    ],
    about: { title: "Um espaço pensado para você desacelerar", text: "O Lume reúne profissionais experientes em um ambiente claro e silencioso. Cada atendimento tem hora marcada e tempo suficiente para um bom resultado.", image: "salao-bancada" },
    gallery: [],
    hours: ["Segunda a sexta: 9h às 19h", "Sábado: 9h às 17h", "Domingo: fechado"],
    address: "Rua das Flores, 120, Centro, Curitiba (endereço fictício)",
    contactTitle: "Vamos marcar o seu horário?", contactText: "Chame no WhatsApp e escolha o dia que for melhor para você.", contactCta: "Agendar pelo WhatsApp",
    nav: ["Serviços", "Sobre", "Contato"],
  },
  confeitaria: {
    slug: "confeitaria",
    brand: "Doce Alvorada",
    title: "Doce Alvorada | Doces por encomenda",
    description: "Exemplo de site para confeitaria criado pela DaBi Tech. Projeto demonstrativo.",
    theme: {
      "--bg": "#FBF0DC", "--fg": "#3B2218", "--muted": "#5E3D2E", "--accent": "#B22E25", "--on-accent": "#FFF4E0",
      "--soft": "#F4E1BF", "--line": "#3B221826", "--mark": "#B22E25",
      "--display": "var(--pd-doce-serif), serif", "--body": "var(--pd-doce-sans), sans-serif",
      "--dw": "900", "--dtt": "none", "--radius": "999px", "--card-radius": "20px 60px 20px 20px",
    },
    hero: {
      variant: "split", kicker: "Confeitaria artesanal", title: "Doces feitos", em: "por encomenda.",
      text: "Bolos, tortas e doces finos preparados no dia, para a sua festa ou para o seu café.",
      cta: "Fazer meu pedido", image: "doce-bolo",
    },
    servicesTitle: "Os mais pedidos", servicesLayout: "cards",
    services: [
      { name: "Bolos decorados", text: "Massa, recheio e cobertura à sua escolha.", price: "a partir de R$ 120", image: "doce-bolo" },
      { name: "Tortas de frutas", text: "Fatias ou inteiras, com frutas da estação.", price: "R$ 12 a fatia", image: "doce-tortas" },
      { name: "Folhados e bolos de pote", text: "Ótimos para presentear e levar na bolsa.", price: "R$ 9 a unidade", image: "doce-folhados" },
      { name: "Cupcakes", text: "Caixas com 6 ou 12 unidades, sabores variados.", price: "R$ 8 a unidade", image: "doce-cupcakes" },
    ],
    about: { title: "Feito na hora, do jeito de casa", text: "A Doce Alvorada nasceu na cozinha de casa e continua pequena de propósito. Cada encomenda é preparada no dia da entrega, com ingredientes frescos.", image: "doce-folhados" },
    gallery: ["doce-tortas", "doce-folhados", "doce-cupcakes", "doce-bolo"],
    hours: ["Terça a sábado: 9h às 18h", "Domingo: 9h às 13h", "Segunda: fechado"],
    address: "Rua Alvorada, 45, Batel, Curitiba (endereço fictício). Retirada com hora marcada.",
    contactTitle: "Encomende pelo WhatsApp", contactText: "Conte a data, a quantidade de pessoas e o sabor que você quer. Respondemos com valores.", contactCta: "Fazer meu pedido",
    nav: ["Cardápio", "Sobre", "Encomendas"],
  },
  automotivo: {
    slug: "automotivo",
    brand: "BRASA",
    title: "Brasa Estética Automotiva | Polimento e proteção",
    description: "Exemplo de site para estética automotiva criado pela DaBi Tech. Projeto demonstrativo.",
    theme: {
      "--bg": "#14181D", "--fg": "#F4F1EA", "--muted": "#C9C5BB", "--accent": "#F2C200", "--on-accent": "#101317",
      "--soft": "#1D232A", "--line": "#F4F1EA26", "--mark": "#F2C200",
      "--display": "var(--pd-brasa-cond), sans-serif", "--body": "var(--pd-brasa-sans), sans-serif",
      "--dw": "800", "--dtt": "uppercase", "--radius": "2px", "--card-radius": "0", "--hero-em": "#F2C200", "--shade": "10,12,15",
    },
    hero: {
      variant: "overlay", kicker: "Estética automotiva", title: "Seu carro,", em: "como novo.",
      text: "Lavagem detalhada, polimento e proteção da pintura, com agenda pelo WhatsApp.",
      cta: "Pedir orçamento", image: "auto-hero",
    },
    servicesTitle: "Nossos serviços", servicesLayout: "cards",
    services: [
      { name: "Polimento", text: "Remoção de riscos leves e brilho de volta à pintura.", price: "desde R$ 380", image: "auto-polimento" },
      { name: "Lavagem detalhada", text: "Limpeza completa por fora, rodas e frisos.", price: "desde R$ 120", image: "auto-lavagem" },
      { name: "Proteção da pintura", text: "Camada de proteção para durar mais, com avaliação prévia.", price: "sob consulta", image: "auto-esportivo" },
    ],
    about: { title: "Detalhe que se vê", text: "Trabalhamos com poucos carros por dia para dar atenção a cada um. Antes de começar, você recebe o orçamento e o prazo.", image: "auto-polimento" },
    gallery: ["auto-esportivo", "auto-lavagem", "auto-polimento", "auto-hero"],
    hours: ["Segunda a sexta: 8h às 18h", "Sábado: 8h às 14h", "Domingo: fechado"],
    address: "Av. das Indústrias, 800, CIC, Curitiba (endereço fictício)",
    contactTitle: "Peça seu orçamento", contactText: "Mande o modelo do carro e o serviço que você precisa.", contactCta: "Pedir orçamento",
    nav: ["Serviços", "Resultados", "Contato"],
  },
  residencial: {
    slug: "residencial",
    brand: "Casa em Ordem",
    title: "Casa em Ordem | Reparos e reformas em Curitiba",
    description: "Exemplo de site para serviços residenciais criado pela DaBi Tech. Projeto demonstrativo.",
    theme: {
      "--bg": "#FFFFFF", "--fg": "#12302B", "--muted": "#34504A", "--accent": "#FFB703", "--on-accent": "#12302B",
      "--soft": "#F1F6F3", "--line": "#12302B26", "--mark": "#0B7A5E",
      "--display": "var(--pd-casa-display), sans-serif", "--body": "var(--pd-casa-sans), sans-serif",
      "--dw": "800", "--dtt": "none", "--radius": "12px", "--card-radius": "14px",
    },
    hero: {
      variant: "split", kicker: "Curitiba e região", title: "Reparos e reformas", em: "sem dor de cabeça.",
      text: "Pintura, hidráulica e pequenas obras com hora marcada e orçamento combinado antes de começar.",
      cta: "Pedir orçamento no WhatsApp", image: "casa-varanda",
    },
    servicesTitle: "O que resolvemos", servicesLayout: "cards",
    services: [
      { name: "Pintura", text: "Interna e externa, com preparo da superfície.", price: "orçamento sem compromisso", image: "casa-pintura" },
      { name: "Hidráulica", text: "Vazamentos, torneiras, sifões e pequenos reparos.", price: "orçamento sem compromisso", image: "casa-hidraulica" },
      { name: "Pisos e revestimentos", text: "Instalação e reforma de pisos e azulejos.", price: "orçamento sem compromisso", image: "casa-reforma" },
    ],
    about: { title: "Um profissional por vez, sem improviso", text: "Combinamos o serviço, o prazo e o valor antes de começar. No fim, deixamos tudo limpo e conferimos o resultado com você.", image: "casa-hidraulica" },
    gallery: ["casa-varanda", "casa-pintura", "casa-reforma", "casa-hidraulica"],
    hours: ["Segunda a sexta: 8h às 18h", "Sábado: 8h às 12h", "Domingo: fechado"],
    address: "Atendemos Curitiba e região metropolitana (cidade e endereço fictícios)",
    contactTitle: "Peça seu orçamento", contactText: "Descreva o serviço e, se puder, mande uma foto pelo WhatsApp.", contactCta: "Pedir orçamento",
    nav: ["Serviços", "Sobre", "Contato"],
  },
};
