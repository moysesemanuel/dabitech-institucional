import type { Metadata } from "next";
import { LandingHeader } from "@/components/presenca-digital/landing-header";
import {
  Benefits,
  Examples,
  Faq,
  FinalCta,
  Hero,
  HowItWorks,
  Included,
  Investment,
  LandingFooter,
  Problem,
  StickyCta,
} from "@/components/presenca-digital/sections";
import { LandingTracker } from "@/components/presenca-digital/tracker";
import styles from "@/components/presenca-digital/landing.module.css";
import { LANDING_PATH, PRICE } from "@/lib/presenca-digital";
import { SITE_URL } from "@/lib/site";

const TITLE = "DaBi Presença Digital | Sites profissionais para pequenos negócios";
const DESCRIPTION =
  "Site profissional de página única para o seu negócio, com design responsivo, botão de WhatsApp e SEO básico. R$ 797 em duas parcelas, prazo-alvo de 3 a 5 dias úteis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: LANDING_PATH },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: LANDING_PATH,
    siteName: "DaBi Tech",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "DaBi Presença Digital",
  description: DESCRIPTION,
  url: `${SITE_URL}${LANDING_PATH}`,
  areaServed: "BR",
  provider: { "@type": "Organization", name: "DaBi Tech", url: SITE_URL },
  offers: {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: "797.00",
    description: `Pagamento em duas parcelas de ${PRICE.half}. Domínio e hospedagem não inclusos.`,
  },
};

export default function PresencaDigitalPage() {
  return (
    <div className={styles.page}>
      <LandingHeader />
      <main id="conteudo">
        <Hero />
        <Problem />
        <Benefits />
        <Examples />
        <Included />
        <HowItWorks />
        <Investment />
        <Faq />
        <FinalCta />
      </main>
      <LandingFooter />
      <StickyCta />
      <LandingTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </div>
  );
}
