import { WHATSAPP_URL } from "@/lib/site";
import styles from "./learn-more.module.css";

type Item = { tag: "blue" | "navy"; title: string; text: string; label: string; href: string; external?: boolean };

const ITEMS: Item[] = [
  {
    tag: "blue",
    title: "DaBi Agendaí",
    text: "Agendamento online para barbearias, estúdios e prestadores de serviço.",
    href: "https://agendai.dabitech.com.br/negocios/barbearias",
    label: "Ver o produto",
    external: true,
  },
  {
    tag: "navy",
    title: "DaBi Price",
    text: "Organização de custos e regras de precificação para formar preços com mais clareza.",
    href: `${WHATSAPP_URL}?text=${encodeURIComponent("Olá! Quero solicitar uma apresentação do DaBi Price.")}`,
    label: "Solicitar apresentação",
    external: true,
  },
];

export function LearnMore() {
  return (
    <section id="conheca-mais" className="bandWhite">
      <div className="wrapWide">
        <div className="reveal">
          <h2>A empresa por trás das soluções</h2>
          <p className="sectionLede">
            A DaBi Tech desenvolve e comercializa softwares para necessidades do dia a dia dos
            negócios. Nosso portfólio reúne soluções de agendamento e precificação, além de
            desenvolvimento para processos específicos.
          </p>
        </div>
        <div className={styles.grid}>
          {ITEMS.map((item) => {
            return (
              <a
                key={item.title}
                className={`${styles.card} ${styles[item.tag]}`}
                href={item.href}
                aria-label={`${item.title}: ${item.label}`}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
