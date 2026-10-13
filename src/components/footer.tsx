import { BusinessHours } from "@/components/business-hours";
import { Icon } from "@/components/icons";
import { DaBiTechLogo } from "@/components/logo";
import { FOOTER_COLUMNS } from "@/lib/content";
import { PHONE_DISPLAY, SOCIALS, WHATSAPP_URL } from "@/lib/site";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrapWide ${styles.grid}`}>
        <div className={styles.brand}>
          <DaBiTechLogo className={styles.logo} width={210} variant="light" />
          <p className={styles.copy}>
            © {new Date().getFullYear()} DaBi Tech. Todos os direitos reservados.
          </p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title} className={styles.column}>
            <h2 className={styles.colTitle}>{column.title}</h2>
            <ul className={styles.list}>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className={styles.column}>
          <h2 className={styles.colTitle}>Contato</h2>
          <ul className={`${styles.list} ${styles.contact}`}>
            <li>
              <Icon name="mail" size={18} />
              <a href="mailto:contato@dabitech.com.br">contato@dabitech.com.br</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>Curitiba - PR</span>
            </li>
          </ul>
          <BusinessHours className={styles.hours} />
        </div>
        <ul className={styles.social}>
          {SOCIALS.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} da DaBi Tech (abre em nova aba)`}
              >
                <Icon name={social.icon} size={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
