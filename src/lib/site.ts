export const SITE_URL = "https://www.dabitech.com.br";
export const PHONE_DISPLAY = "(41) 98887-5659";
export const WHATSAPP_URL = "https://wa.me/5541988875659";

// URL oficial do DaBi Price (card e rodapé usam este valor). Se ficar indefinida,
// o card cai em "Solicitar demonstração" via WhatsApp.
export const PRICE_URL: string | undefined = "https://dabi-price-3d.vercel.app/";

// Curitiba — usado para calcular o pôr do sol de sexta.
export const LOCATION = { lat: -25.4284, lon: -49.2733, utcOffset: -3 };

// Perfis oficiais da empresa (rodapé e sameAs do JSON-LD). Não inclua perfis pessoais aqui.
export const SOCIALS = [
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/dabi-tech-digital-solutions" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/dabitech.br/" },
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/profile.php?id=61594958883007" },
] as const;

// Perfil profissional do fundador (pessoal, não institucional) — usado só na página /sobre.
export const FOUNDER = {
  name: "Moyses Emanuel",
  linkedin: "https://www.linkedin.com/in/moysesemanuel",
};
