import { DaBiTechLogo } from "@/components/logo";
import { Button } from "@/components/button";
import styles from "./header.module.css";

const NAV_LINKS = [
  { href: "#o-que-fazemos", label: "O que fazemos" },
  { href: "#como-trabalhamos", label: "Como trabalhamos" },
  { href: "#provas", label: "Provas" },
];

export function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.inner}>
        <DaBiTechLogo className={styles.logo} width={140} variant="light" />
        <nav aria-label="Navegação principal" className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <Button href="#contato" className={styles.navCta}>
            Falar com a gente
          </Button>
        </nav>
      </div>
    </header>
  );
}
