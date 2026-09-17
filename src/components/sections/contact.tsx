import { Button } from "@/components/button";
import styles from "./contact.module.css";

export function Contact() {
  return (
    <section id="contato" className={`${styles.contact} bandDark`}>
      <div className="wrap">
        <div className="reveal">
          <h2>Vamos conversar.</h2>
          <p className="sectionLede">
            Descreva o processo que hoje depende de planilha, papel ou mensagem. Respondemos com
            um diagnóstico direto: o que dá para resolver, como e em quanto tempo.
          </p>
          <div className={styles.actions}>
            <Button href="mailto:contato@dabitech.com.br">
              Falar com a DaBi Tech <span className="btnArrow">→</span>
            </Button>
            <p className={styles.note}>Resposta em até um dia útil.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
