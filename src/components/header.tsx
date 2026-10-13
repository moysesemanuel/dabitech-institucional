import { DaBiTechLogo } from "@/components/logo";
import { WHATSAPP_URL } from "@/lib/site";
import { Button } from "@/components/button";
import styles from "./header.module.css";

const NAV_LINKS = [
  { href: "#o-que-fazemos", label: "O que fazemos" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#solucoes", label: "Soluções" },
];

export function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.inner}>
        <DaBiTechLogo className={styles.logo} width={148} variant="light" />
        <nav aria-label="Navegação principal" className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <Button href={WHATSAPP_URL} className={styles.navCta}>
            Falar com a gente
          </Button>
        </nav>
      </div>
    </header>
  );
}
