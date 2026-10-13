import { Icon } from "@/components/icons";
import { CUSTOM_CTA, PROCESS_STEPS } from "@/lib/content";
import styles from "./process.module.css";

export function Process() {
  return (
    <section id="como-trabalhamos" className={`bandAlt ${styles.section}`}>
      <div className="wrapWide">
        <div className={`reveal ${styles.head}`}>
          <div>
            <h2>Como desenvolvemos seu sistema sob medida</h2>
            <p className="sectionLede">
              Cada projeto personalizado segue quatro etapas, do entendimento da sua rotina até o
              sistema em uso.
            </p>
          </div>
          <a className={styles.link} href={CUSTOM_CTA} target="_blank" rel="noopener noreferrer">
            Conversar sobre meu projeto <Icon name="arrow" size={18} />
            <span className="srOnly"> (abre em nova aba)</span>
          </a>
        </div>
        <ol className={styles.list}>
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className={styles.item}>
              <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.icon}>
                <Icon name={step.icon} size={26} />
              </span>
              <div className={styles.text}>
                <h3>
                  {step.title}
                  {index < PROCESS_STEPS.length - 1 && <span className={styles.dots} aria-hidden="true" />}
                </h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
