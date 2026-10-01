import styles from "./solutions-catalog.module.css";

const SOLUTIONS = [
  {
    need: "Preciso organizar meus agendamentos",
    name: "DaBi Agendaí",
    description:
      "Ofereça agendamento online por serviço, profissional e horário. Seus clientes marcam sozinhos e sua equipe acompanha a agenda em um só lugar.",
    href: "https://agendai.dabitech.com.br/negocios/barbearias",
    label: "Conhecer DaBi Agendaí",
    external: true,
  },
  {
    need: "Preciso calcular meus preços",
    name: "DaBi Price",
    description:
      "Organize custos e regras de precificação para formar seus preços com mais clareza, sem depender de planilhas ajustadas manualmente.",
    href: "mailto:contato@dabitech.com.br?subject=Quero%20conhecer%20o%20DaBi%20Price",
    label: "Conhecer DaBi Price",
    external: false,
  },
  {
    need: "Tenho um processo específico",
    name: "Sistema sob medida",
    description:
      "Mapeamos como sua operação funciona e construímos um sistema para organizar o processo que hoje depende de planilhas, mensagens ou tarefas manuais.",
    href: "mailto:contato@dabitech.com.br?subject=Quero%20conversar%20sobre%20um%20sistema%20sob%20medida",
    label: "Falar sobre meu processo",
    external: false,
  },
];

export function SolutionsCatalog() {
  return (
    <section id="solucoes" className="bandWhite">
      <div className="wrapWide">
        <div className="reveal">
          <h2>O que você precisa resolver?</h2>
          <p className="sectionLede">
            Escolha o caminho que combina com a necessidade da sua operação.
          </p>
        </div>
        <div className={styles.grid}>
          {SOLUTIONS.map((solution) => (
            <article className={styles.card} key={solution.name}>
              <p className={styles.need}>{solution.need}</p>
              <h3>{solution.name}</h3>
              <p className={styles.description}>{solution.description}</p>
              <a
                className={styles.link}
                href={solution.href}
                {...(solution.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {solution.label} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
