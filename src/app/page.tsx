import { Hero } from "@/components/sections/hero";
import { SolutionsCatalog } from "@/components/sections/solutions-catalog";
import { Capabilities } from "@/components/sections/capabilities";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { ScrollReset } from "@/components/scroll-reset";
import { SOCIALS } from "@/lib/site";

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DaBi Tech",
  alternateName: "DaBi Tech — Digital Solutions",
  url: "https://www.dabitech.com.br",
  email: "contato@dabitech.com.br",
  telephone: "+55-41-98887-5659",
  description:
    "Empresa de tecnologia que desenvolve softwares próprios (DaBi Agendaí e DaBi Price) e sistemas sob medida.",
  sameAs: SOCIALS.map((social) => social.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollReset />
      <Hero />
      <SolutionsCatalog />
      <Capabilities />
      <Process />
      <About />
    </>
  );
}
