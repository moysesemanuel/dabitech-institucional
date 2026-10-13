import Image from "next/image";
import { Icon } from "@/components/icons";
import {
  CUSTOM_CAPABILITIES,
  PRICE_CAPTION,
  PRODUCT_CAPABILITIES,
  SCREENSHOTS,
} from "@/lib/content";
import styles from "./capabilities.module.css";

export function Capabilities() {
  return (
    <section id="o-que-fazemos" className={styles.section}>
      <div className="wrapWide">
        <div className={`reveal ${styles.head}`}>
          <h2>O que sua operação precisa resolver?</h2>
          <p className="sectionLede">
            Veja o que já está pronto nos nossos produtos e o que podemos construir sob medida
            para a sua rotina.
          </p>
        </div>

        <h3 className={styles.groupTitle}>Já disponível nos produtos</h3>
        <ul className={styles.products}>
          {PRODUCT_CAPABILITIES.map((item) => {
            const shot = SCREENSHOTS[item.visual];
            return (
              <li key={item.name} className={styles.product}>
                <div className={styles.productText}>
                  <span className={`${styles.tag} ${styles[item.visual]}`}>{item.tag}</span>
                  <div className={styles.titleRow}>
                    <span className={styles.icon}>
                      <Icon name={item.icon} size={22} />
                    </span>
                    <h4>{item.name}</h4>
                  </div>
                  <p>{item.desc}</p>
                </div>
                <figure className={styles.thumb}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 700px) 90vw, 300px"
                  />
                  {item.visual === "price" && <figcaption>{PRICE_CAPTION}</figcaption>}
                </figure>
              </li>
            );
          })}
        </ul>

        <h3 className={styles.groupTitle}>Possibilidades em projetos sob medida</h3>
        <ul className={styles.custom}>
          {CUSTOM_CAPABILITIES.map((item) => (
            <li key={item.name} className={styles.customCard}>
              <span className={`${styles.tag} ${styles.customTag}`}>Projeto sob medida</span>
              <div className={styles.titleRow}>
                <span className={styles.icon}>
                  <Icon name={item.icon} size={22} />
                </span>
                <h4>{item.name}</h4>
              </div>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
