import Image from "next/image";
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

function Visual({ solution }: { solution: Solution }) {
  if (solution.id === "custom") return <CustomVisual />;
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
            Dois produtos prontos para usar e desenvolvimento sob medida para o que não cabe em um
            produto de prateleira.
          </p>
        </div>
        <div className={styles.grid}>
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.id}
              id={solution.id === "custom" ? "sob-medida" : undefined}
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
                <a
                  className={styles.cta}
                  href={solution.href}
                  {...(solution.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className={styles.ctaIcon}>
                    <Icon name="arrow" size={18} />
                  </span>
                  {solution.cta}
                  {solution.external && <span className="srOnly"> (abre em nova aba)</span>}
                </a>
              </div>
              <Visual solution={solution} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
