import { Button } from "@/components/button";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="quem-somos" className={`${styles.hero} bandDark`}>
      <div className="wrap">
        <div className="reveal">
          <h1 className={styles.title}>Software para simplificar a rotina e apoiar o crescimento do seu negócio.</h1>
          <p className={styles.lede}>
            Conheça as soluções da DaBi Tech para organizar agendamentos, calcular preços e
            transformar processos do dia a dia.
          </p>
          <div className={styles.actions}>
            <Button href="#solucoes">
              Explorar nossas soluções <span className="btnArrow">→</span>
            </Button>
            <Button href="#conheca-mais" variant="ghost">
              Conheça a DaBi Tech
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
