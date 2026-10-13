import { Icon } from "@/components/icons";
import { Button } from "@/components/button";
import { FINAL_CTA } from "@/lib/content";
import styles from "./final-cta.module.css";

export function FinalCta() {
  return (
    <section id="contato" className={styles.cta} aria-labelledby="contato-titulo">
      <div className={`wrap ${styles.inner}`}>
        <h2 id="contato-titulo">Vamos encontrar a solução para o seu negócio?</h2>
        <p className="sectionLede">
          Conte o que você precisa organizar ou automatizar. Vamos conversar sobre o produto ou
          projeto mais adequado para sua operação.
        </p>
        <Button href={FINAL_CTA} target="_blank" rel="noopener noreferrer">
          Conversar pelo WhatsApp <Icon name="arrow" size={18} />
          <span className="srOnly"> (abre em nova aba)</span>
        </Button>
      </div>
    </section>
  );
}
