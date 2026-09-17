import styles from "./process.module.css";

const STEPS = [
  {
    title: "Diagnóstico",
    text: "Mapeamos o processo como ele acontece hoje, incluindo os atalhos e exceções que a planilha não mostra.",
  },
  {
    title: "Arquitetura",
    text: "Desenhamos dados, papéis de acesso e pontos de integração antes de escrever a primeira linha de código.",
  },
  {
    title: "Construção",
    text: "Construímos em ciclos curtos, com ambiente de teste liberado já na primeira semana de trabalho.",
  },
  {
    title: "Operação",
    text: "Acompanhamos o sistema em produção, medimos uso real e priorizamos evolução pelo que o negócio sente falta.",
  },
];

export function Process() {
  return (
    <section id="como-trabalhamos">
      <div className="wrap">
        <div className="reveal">
          <h2>Como trabalhamos</h2>
          <p className="sectionLede">Quatro etapas, do diagnóstico até o sistema rodando em produção.</p>
        </div>
        <div className={styles.list}>
          {STEPS.map((step, index) => (
            <div key={step.title} className={styles.item}>
              <span className={styles.num}>{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
