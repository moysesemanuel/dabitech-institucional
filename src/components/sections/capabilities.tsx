import styles from "./capabilities.module.css";

const CAPABILITIES = [
  {
    name: "Agendamento",
    desc: "Agenda online por serviço, profissional, data e horário, com bloqueio automático de conflito e histórico de atendimento.",
  },
  {
    name: "Gestão comercial",
    desc: "Catálogo, estoque, pedidos e vendas organizados em um painel único, pronto para operar como ERP.",
  },
  {
    name: "Integrações",
    desc: "Sincronização entre sistemas que hoje não conversam entre si — plataformas, ERPs, marketplaces — com log de falha e reprocessamento manual.",
  },
  {
    name: "Atendimento",
    desc: "Central de chamados para organizar solicitação, prioridade e resposta, tirando o suporte do chat solto.",
  },
  {
    name: "Acesso",
    desc: "Login único e controle de papel entre múltiplos sistemas da mesma operação.",
  },
  {
    name: "Precificação",
    desc: "Cálculo de custo e preço a partir das regras reais do negócio, não de planilha ajustada manualmente.",
  },
];

export function Capabilities() {
  return (
    <section id="o-que-fazemos" className="bandWhite">
      <div className="wrap">
        <div className="reveal">
          <h2>O que fazemos</h2>
          <p className="sectionLede">Seis frentes que cobrem a operação do dia a dia de ponta a ponta.</p>
        </div>
        <div className={styles.list}>
          {CAPABILITIES.map((capability) => (
            <div key={capability.name} className={styles.item}>
              <div className={styles.name}>{capability.name}</div>
              <p className={styles.desc}>{capability.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
