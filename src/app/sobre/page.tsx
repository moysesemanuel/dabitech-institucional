import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Button } from "@/components/button";
import { ABOUT_PRINCIPLES, PRICE_LINK, SOLUTIONS } from "@/lib/content";
import { FOUNDER } from "@/lib/site";
import styles from "./sobre.module.css";

const TITLE = "Sobre a DaBi Tech | Softwares e Sistemas sob Medida";
const DESCRIPTION =
  "Conheça a DaBi Tech: empresa de tecnologia com produtos próprios, como o DaBi Agendaí e o DaBi Price, e desenvolvimento de sistemas sob medida.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/sobre" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/sobre",
    siteName: "DaBi Tech",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

export default function SobrePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="wrapWide">
          <span className="eyebrow">Sobre a DaBi Tech</span>
          <h1>Tecnologia útil para a rotina dos negócios.</h1>
          <p className={styles.lede}>
            A DaBi Tech é uma empresa de tecnologia que desenvolve e comercializa softwares próprios
            e constrói sistemas sob medida para negócios que precisam organizar a operação.
          </p>
        </div>
      </section>

      <section className="bandAlt">
        <div className={`wrapWide ${styles.duo}`}>
          <article className={styles.card}>
            <h2>Nosso propósito</h2>
            <p className={styles.statement}>Tornar a tecnologia útil para a rotina dos negócios.</p>
            <p>É o compromisso que orienta o que escolhemos construir e como explicamos cada solução.</p>
          </article>
          <article className={styles.card}>
            <h2>Nossa visão</h2>
            <p className={styles.statement}>
              Ampliar o acesso a soluções que organizem operações e apoiem decisões.
            </p>
            <p>Buscamos unir simplicidade, adaptação e evolução contínua para atender às necessidades de diferentes negócios.</p>
          </article>
        </div>
      </section>

      <section>
        <div className="wrapWide">
          <h2>Produtos próprios e projetos sob medida</h2>
          <p className="sectionLede">
            Trabalhamos de duas formas: produtos prontos para usar e sistemas desenvolvidos para um
            processo específico.
          </p>
          <div className={styles.ways}>
            <div className={styles.card}>
              <h3>Produtos próprios</h3>
              <ul>
                <li>
                  <strong>DaBi Agendaí:</strong> agendamento e gestão, disponível atualmente para
                  barbearias.
                </li>
                <li>
                  <strong>DaBi Price:</strong> precificação para diferentes negócios, configurada de
                  acordo com os custos e as regras de cada operação.
                </li>
              </ul>
              <div className={styles.links}>
                <a href={SOLUTIONS[0].href} target="_blank" rel="noopener noreferrer">
                  Conhecer o DaBi Agendaí <span className="srOnly">(abre em nova aba)</span>
                </a>
                <a href={PRICE_LINK.href} target="_blank" rel="noopener noreferrer">
                  {PRICE_LINK.label} <span className="srOnly">(abre em nova aba)</span>
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h3>Projetos sob medida</h3>
              <p>
                Para o processo que não cabe em um produto pronto, mapeamos como a operação funciona
                e construímos o sistema para ela, com acompanhamento depois da entrada em uso.
              </p>
              <div className={styles.links}>
                <Link href="/#como-trabalhamos">Ver como desenvolvemos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bandAlt">
        <div className="wrapWide">
          <h2>Princípios de trabalho</h2>
          <ul className={styles.principles}>
            {ABOUT_PRINCIPLES.map((principle) => (
              <li key={principle.title}>
                <span className={styles.icon}>
                  <Icon name={principle.icon} size={22} />
                </span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="wrapWide">
          <h2>Quem está por trás da DaBi Tech</h2>
          <div className={`${styles.card} ${styles.person}`}>
            <p>
              A DaBi Tech foi fundada por <strong>{FOUNDER.name}</strong>, que atua no desenvolvimento
              dos produtos e dos sistemas sob medida.
            </p>
            <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer">
              Perfil profissional de {FOUNDER.name} no LinkedIn{" "}
              <span className="srOnly">(abre em nova aba)</span>
            </a>
          </div>
          <div className={styles.cta}>
            <Button href="/#solucoes">
              Conhecer as soluções <Icon name="arrow" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
