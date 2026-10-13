import { DaBiTechLogo } from "@/components/logo";
import { BusinessHours } from "@/components/business-hours";
import { PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/site";
import styles from "./footer.module.css";

type FooterLink = { label: string; href?: string; external?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Soluções",
    links: [
      { label: "DaBi Agendaí", href: "https://agendai.dabitech.com.br/negocios/barbearias", external: true },
      { label: "DaBi Price", href: "#solucoes" },
      { label: "Sistema sob medida", href: "#sob-medida" },
    ],
  },
  {
    title: "O que fazemos",
    links: [
      { label: "Agendamento", href: "#o-que-fazemos" },
      { label: "Gestão comercial", href: "#o-que-fazemos" },
      { label: "Integrações", href: "#o-que-fazemos" },
      { label: "Atendimento", href: "#o-que-fazemos" },
      { label: "Precificação", href: "#o-que-fazemos" },
    ],
  },
  {
    title: "Aprenda",
    links: [
      { label: "Como trabalhamos", href: "#como-trabalhamos" },
      { label: "Conheça mais", href: "#conheca-mais" },
      { label: "Blog (em breve)" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Quem somos", href: "#conheca-mais" },
      { label: "Contato", href: WHATSAPP_URL, external: true },
      { label: "E-mail", href: "mailto:contato@dabitech.com.br" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapWide">
        <nav aria-label="Rodapé" className={styles.columns}>
          {COLUMNS.map((column) => (
            <div key={column.title} className={styles.column}>
              <h2 className={styles.colTitle}>{column.title}</h2>
              <ul className={styles.list}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <span className={styles.soon}>{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className={styles.bottom}>
          <div className={styles.brand}>
            <DaBiTechLogo className={styles.logo} width={130} variant="light" />
            <p className={styles.tagline}>Sistemas sob medida para operações reais.</p>
            <p className={styles.copy}>
              © {new Date().getFullYear()} DaBi Tech — Digital Solutions.
              <br />
              Todos os direitos reservados.
            </p>
          </div>
          <div className={styles.contact}>
            <h2 className={styles.contactTitle}>Telefone</h2>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className={styles.contact}>
            <h2 className={styles.contactTitle}>Atendimento</h2>
            <BusinessHours className={styles.hoursList} />
          </div>
        </div>
      </div>
    </footer>
  );
}
