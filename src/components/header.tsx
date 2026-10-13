import Link from "next/link";
import { DaBiTechLogo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { CONTACT_CTA, NAV_LINKS } from "@/lib/content";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.topbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} aria-label="DaBi Tech — página inicial">
          <DaBiTechLogo className={styles.logo} width={148} variant="light" />
        </Link>
        <nav aria-label="Navegação principal" className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className={`btn btnPrimary ${styles.navCta}`}
          href={CONTACT_CTA}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com a gente <span className="btnArrow">→</span>
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
