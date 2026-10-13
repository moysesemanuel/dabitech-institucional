import Image from "next/image";
import { Icon } from "@/components/icons";
import { Button } from "@/components/button";
import { ABOUT_PATH, PRINCIPLES } from "@/lib/content";
import styles from "./about.module.css";

export function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={`wrapWide ${styles.grid}`}>
        <div className={`reveal ${styles.intro}`}>
          <p className={styles.eyebrow}>Quem somos</p>
          <h2>Tecnologia útil para a rotina do seu negócio</h2>
          <p className={styles.text}>
            A DaBi Tech desenvolve e comercializa softwares próprios, como o DaBi Agendaí e o DaBi
            Price, e constrói sistemas sob medida para processos que não cabem em um produto pronto.
          </p>
          <Button href={ABOUT_PATH}>
            Conheça a DaBi Tech <Icon name="arrow" size={18} />
          </Button>
        </div>
        <ul className={styles.principles}>
          {PRINCIPLES.map((principle) => (
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
        <div className={styles.network} aria-hidden="true">
          <Image src="/sobre/rede-v2.webp" alt="" width={640} height={640} sizes="420px" />
        </div>
      </div>
    </section>
  );
}
