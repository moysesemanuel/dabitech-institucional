"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";
import { CONTACT_CTA, NAV_LINKS } from "@/lib/content";
import styles from "./header.module.css";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      <nav
        id="menu-mobile"
        aria-label="Navegação mobile"
        className={styles.mobilePanel}
        hidden={!open}
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a
          className={`btn btnPrimary ${styles.mobileCta}`}
          href={CONTACT_CTA}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          Falar com a gente <span className="btnArrow">→</span>
        </a>
      </nav>
    </>
  );
}
