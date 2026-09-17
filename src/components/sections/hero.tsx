import { Button } from "@/components/button";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section id="quem-somos" className={`${styles.hero} bandDark`}>
      <div className="wrap">
        <div className="reveal">
          <h1 className={styles.title}>Sistemas que substituem planilha, WhatsApp e papel.</h1>
          <p className={styles.lede}>
            A DaBi Tech projeta e constrói o sistema que a operação da sua empresa já deveria ter
            — agenda, vendas, atendimento, integrações — como produto que funciona sozinho, não
            como site institucional.
          </p>
          <div className={styles.actions}>
            <Button href="mailto:contato@dabitech.com.br">
              Falar com a DaBi Tech <span className="btnArrow">→</span>
            </Button>
            <Button href="#provas" variant="ghost">
              Ver sistemas prontos
            </Button>
          </div>
        </div>
        <div className={styles.about}>
          <p>
            Trabalhamos direto no processo do negócio, não na aparência dele. Antes de desenhar
            uma tela, mapeamos como a operação funciona hoje — o atalho combinado no WhatsApp, a
            planilha que só uma pessoa sabe abrir, o caderno de agenda atrás do balcão — e
            transformamos isso em um sistema com banco de dados, papel de acesso e regra de
            negócio real por trás.
          </p>
          <p>
            Atendemos quem opera por agenda, catálogo, pedido ou chamado: barbearias, estúdios,
            e-commerces, escolas e prestadores de serviço que hoje resolvem a operação em conversa
            solta e não conseguem tirar dali um número em que confiar.
          </p>
        </div>
      </div>
    </section>
  );
}
