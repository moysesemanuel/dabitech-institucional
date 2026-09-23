import styles from "./proof.module.css";

type Stage = "produto" | "dev" | "infra";

const SYSTEMS: {
  name: string;
  url?: string;
  resolve: string;
  stack: string;
  stage: string;
  stageKind: Stage;
}[] = [
  {
    name: "DaBi Agendaí",
    url: "https://agendai.dabitech.com.br/negocios/barbearias",
    resolve:
      "Agendamento online por serviço, profissional e horário, com backoffice operacional completo.",
    stack: "Next.js, Prisma, PostgreSQL",
    stage: "Produto próprio",
    stageKind: "produto",
  },
  {
    name: "Sales System",
    resolve:
      "Vendas, estoque e catálogo com modo ERP standalone ou modular por capacidade contratada.",
    stack: "Next.js, Prisma, PostgreSQL",
    stage: "Produto próprio",
    stageKind: "produto",
  },
  {
    name: "DaBi Price 3D",
    resolve: "Precificação com integração a ERP e Mercado Livre, e controle de papel por workspace.",
    stack: "Next.js, PostgreSQL",
    stage: "Produto próprio",
    stageKind: "produto",
  },
  {
    name: "DaBiSync",
    resolve:
      "Hub de sincronização de identidade entre múltiplas plataformas, com log de falha e reprocessamento manual.",
    stack: "NestJS, Prisma, Docker",
    stage: "Case técnico",
    stageKind: "infra",
  },
  {
    name: "Central de autenticação",
    resolve: "Login único e sessão compartilhada entre múltiplos sistemas internos.",
    stack: "Node.js, Express, Prisma",
    stage: "Infraestrutura interna",
    stageKind: "infra",
  },
  {
    name: "Central de atendimento",
    resolve: "Central de chamados para organizar solicitação e prioridade de suporte.",
    stack: "Next.js, Prisma",
    stage: "Em desenvolvimento",
    stageKind: "dev",
  },
];

function stageClassName(kind: Stage) {
  if (kind === "dev") return `${styles.status} ${styles.dev}`;
  if (kind === "infra") return `${styles.status} ${styles.infra}`;
  return styles.status;
}

export function Proof() {
  return (
    <section id="provas" className="bandWhite">
      <div className="wrapWide">
        <div className="reveal">
          <h2>Provas</h2>
          <p className="sectionLede">
            Sistemas que já construímos, com o que cada um resolve e a tecnologia por trás.
          </p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Sistema</th>
                <th>O que resolve</th>
                <th>Stack</th>
                <th>Estágio</th>
              </tr>
            </thead>
            <tbody>
              {SYSTEMS.map((system) => (
                <tr key={system.name}>
                  <td className={styles.sys}>
                    {system.url ? (
                      <a
                        className={styles.sysLink}
                        href={system.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {system.name}
                      </a>
                    ) : (
                      system.name
                    )}
                  </td>
                  <td>{system.resolve}</td>
                  <td className={styles.stack}>{system.stack}</td>
                  <td>
                    <span className={stageClassName(system.stageKind)}>{system.stage}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
