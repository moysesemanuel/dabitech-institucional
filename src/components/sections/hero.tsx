import Image from "next/image";
import { Icon } from "@/components/icons";
import { Button } from "@/components/button";
import { ABOUT_PATH, HERO_BENEFITS, SCREENSHOTS } from "@/lib/content";
import styles from "./hero.module.css";

export function Hero() {
  const { agendai, price } = SCREENSHOTS;

  return (
    <section id="topo" className={styles.hero}>
      <div className={`wrapWide ${styles.grid} ${styles.withVisual}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Softwares próprios e sistemas sob medida</span>
          <h1 className={styles.title}>
            Softwares e sistemas sob medida para{" "}
            <span className={styles.gradient}>organizar seu negócio.</span>
          </h1>
          <p className={styles.lede}>
            Organize agendamentos, simplifique a precificação e automatize processos com os
            produtos da DaBi Tech ou com um sistema desenvolvido para a sua operação.
          </p>
          <div className={styles.actions}>
            <Button href="#solucoes">
              Explorar nossas soluções <Icon name="arrow" size={18} />
            </Button>
            <Button href={ABOUT_PATH} variant="ghost">
              Conheça a DaBi Tech
            </Button>
          </div>
          <ul className={styles.benefits}>
            {HERO_BENEFITS.map((benefit) => (
              <li key={benefit.lines[0]}>
                <span className={styles.benefitIcon}>
                  <Icon name={benefit.icon} size={22} />
                </span>
                <span>
                  {benefit.lines[0]}
                  <br />
                  {benefit.lines[1]}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.frame} ${styles.back}`}>
            <Image
              src={agendai.src}
              alt={agendai.alt}
              width={agendai.width}
              height={agendai.height}
              priority
              sizes="(max-width: 960px) 92vw, 640px"
            />
          </div>
          <div className={`${styles.frame} ${styles.front}`}>
            <Image
              src={price.src}
              alt={price.alt}
              width={price.width}
              height={price.height}
              sizes="(max-width: 960px) 70vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
