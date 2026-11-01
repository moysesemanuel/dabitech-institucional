import Image from "next/image";
import Link from "next/link";
import { lumeFontVariables } from "@/app/presenca-digital/fonts-lume";
import { SiteDesktop, SitePhone } from "@/components/presenca-digital/previews";
import { Icon } from "@/components/icons";
import { PRICE_CAPTION, SCREENSHOTS, SOLUTIONS, type Solution } from "@/lib/content";
import styles from "./solutions-catalog.module.css";

function CustomVisual() {
  return (
    <div className={styles.modules} aria-hidden="true">
      <span>Processos</span>
      <span>Equipes</span>
      <span>Dados</span>
      <span>Integrações</span>
    </div>
  );
}

function SiteVisual() {
  return (
    <figure className={`${lumeFontVariables} ${styles.site}`}>
      <SiteDesktop slug="beleza" />
      <div className={styles.sitePhone}>
        <SitePhone slug="beleza" />
      </div>
      <figcaption>Exemplo de site criado pela DaBi Tech (projeto demonstrativo)</figcaption>
    </figure>
  );
}

function Visual({ solution }: { solution: Solution }) {
  if (solution.id === "custom") return <CustomVisual />;
  if (solution.id === "presenca") return <SiteVisual />;
  const shot = solution.id === "agendai" ? SCREENSHOTS.agendai : SCREENSHOTS.price;
  return (
    <figure className={styles.shot}>
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes="(max-width: 1000px) 90vw, 360px"
      />
      {solution.id === "price" && <figcaption>{PRICE_CAPTION}</figcaption>}
    </figure>
  );
}

export function SolutionsCatalog() {
  return (
    <section id="solucoes" className="bandAlt">
      <div className="wrapWide">
        <div className="reveal">
          <h2>Conheça nossas soluções</h2>
          <p className="sectionLede">
            Produtos prontos para usar, sites profissionais para pequenos negócios e desenvolvimento
            sob medida para o que não cabe em um produto de prateleira.
          </p>
        </div>
        <div className={styles.grid}>
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.id}
              id={solution.id === "custom" ? "sob-medida" : solution.id === "presenca" ? "presenca-digital" : undefined}
              className={`${styles.card} ${styles[solution.id]}`}
            >
              <div className={styles.body}>
                <div className={styles.head}>
                  <span className={styles.icon}>
                    <Icon name={solution.icon} size={28} />
                  </span>
                  <div>
                    <h3>{solution.name}</h3>
                    <p className={styles.category}>{solution.category}</p>
                  </div>
                </div>
                <p className={styles.description}>{solution.description}</p>
                {solution.external ? (
                  <a
                    className={styles.cta}
                    href={solution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.ctaIcon}>
                      <Icon name="arrow" size={18} />
                    </span>
                    {solution.cta}
                    <span className="srOnly"> (abre em nova aba)</span>
                  </a>
                ) : (
                  <Link className={styles.cta} href={solution.href}>
                    <span className={styles.ctaIcon}>
                      <Icon name="arrow" size={18} />
                    </span>
                    {solution.cta}
                  </Link>
                )}
              </div>
              <Visual solution={solution} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
