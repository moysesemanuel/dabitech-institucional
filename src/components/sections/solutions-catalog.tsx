import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/site";
import styles from "./solutions-catalog.module.css";

type Solution = {
  name: string;
  tone: "cyanTone" | "blueTone" | "navyTone";
  bullets: string[];
  description: string;
  href: string;
  label: string;
  external: boolean;
  // Captura real do produto (arquivo em /public). Sem imagem, o card segue só com texto.
  image?: { src: string; alt: string; width: number; height: number };
};

const SOLUTIONS: Solution[] = [
  {
    name: "DaBi Agendaí",
    tone: "cyanTone",
    bullets: ["Agenda online por serviço e profissional", "Bloqueio automático de conflito de horário", "Histórico de atendimento do cliente"],
    description:
      "Ofereça agendamento online por serviço, profissional e horário. Seus clientes marcam sozinhos e sua equipe acompanha a agenda em um só lugar.",
    href: "https://agendai.dabitech.com.br/negocios/barbearias",
    label: "Conhecer DaBi Agendaí",
    external: true,
  },
  {
    name: "DaBi Price",
    tone: "blueTone",
    bullets: ["Cadastro de custos e regras do negócio", "Preço calculado sem planilha manual", "Mais clareza sobre a margem"],
    description:
      "Organize custos e regras de precificação para formar seus preços com mais clareza, sem depender de planilhas ajustadas manualmente.",
    href: `${WHATSAPP_URL}?text=${encodeURIComponent("Olá! Quero solicitar uma apresentação do DaBi Price.")}`,
    label: "Solicitar apresentação do Price",
    external: true,
  },
];

const CUSTOM: Solution = {
    name: "Sistema sob medida",
    tone: "navyTone",
    bullets: ["Mapeamento do seu processo atual", "Controle de acesso conforme a função de cada pessoa", "Integração com os sistemas que você usa"],
    description:
      "Mapeamos como sua operação funciona e construímos um sistema para organizar o processo que hoje depende de planilhas, mensagens ou tarefas manuais.",
    href: `${WHATSAPP_URL}?text=${encodeURIComponent("Olá! Quero conversar sobre um sistema sob medida para o meu processo.")}`,
    label: "Falar sobre meu processo",
    external: true,
  };

export function SolutionsCatalog() {
  return (
    <>
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
              <article className={`${styles.card} ${styles[solution.tone]}`} key={solution.name}>
                <div className={styles.shot}>
                  {solution.image && (
                    <Image
                      src={solution.image.src}
                      alt={solution.image.alt}
                      width={solution.image.width}
                      height={solution.image.height}
                      sizes="(max-width: 800px) 100vw, 560px"
                    />
                  )}
                </div>
                <h3>{solution.name}</h3>
                <p className={styles.description}>{solution.description}</p>
                <ul className={styles.bullets}>
                  {solution.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
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

      <section id="sob-medida" className={`${styles.custom} bandDark`}>
        <div className={`wrapWide ${styles.customInner}`}>
          <div className="reveal">
            <p className={styles.customEyebrow}>Desenvolvimento sob medida</p>
            <h2>{CUSTOM.name}</h2>
            <p className="sectionLede">{CUSTOM.description}</p>
            <a
              className={`btn btnPrimary ${styles.customCta}`}
              href={CUSTOM.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CUSTOM.label} <span className="btnArrow">→</span>
            </a>
          </div>
          <ul className={styles.customList}>
            {CUSTOM.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
