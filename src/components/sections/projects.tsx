import Image from "next/image";
import { PROJECT_LOGOS } from "@/lib/content";
import styles from "./projects.module.css";

// Quantas vezes a lista se repete em cada metade da faixa, para ela sempre ser mais larga que a tela.
const MIN_ITEMS_PER_HALF = 8;

export function Projects() {
  if (PROJECT_LOGOS.length === 0) return null;

  const repeats = Math.ceil(MIN_ITEMS_PER_HALF / PROJECT_LOGOS.length);
  const half = Array.from({ length: repeats }, () => PROJECT_LOGOS).flat();

  return (
    <section id="projetos" className={styles.section} aria-labelledby="projetos-titulo">
      <div className="wrapWide reveal">
        <p className={styles.eyebrow}>Projetos que já fizemos</p>
        <h2 id="projetos-titulo" className="srOnly">
          Projetos que já fizemos
        </h2>
      </div>
      <div className={styles.viewport}>
        <ul className={styles.track}>
          {[0, 1].map((copy) =>
            half.map((logo, index) => (
              <li
                key={`${copy}-${index}`}
                className={styles.item}
                // a segunda metade só existe para o loop; leitores de tela leem uma vez
                aria-hidden={copy === 1 ? true : undefined}
              >
                <Image src={logo.icon} alt="" width={40} height={40} className={styles.icon} />
                <span className={styles.name}>{logo.name}</span>
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
