"use client";

import Link from "next/link";
import { useState } from "react";
import { DaBiTechLogo } from "@/components/logo";
import { NAV, WA_LINK } from "@/lib/presenca-digital";
import styles from "./landing.module.css";

export function LandingHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.wrap} ${styles.headerInner}`}>
        <a className={styles.logoLink} href="#topo" aria-label="DaBi Tech Digital Solutions, início da página">
          <DaBiTechLogo width={128} variant="navy" />
        </a>
        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="menu-landing"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true">{open ? "✕" : "☰"}</span>
        </button>
        <nav
          id="menu-landing"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Principal"
        >
          {NAV.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <Link className={`${styles.navLink} ${styles.navBack}`} href="/" onClick={() => setOpen(false)}>
            ← Site da DaBi Tech
          </Link>
        </nav>
        <a
          className={`${styles.btn} ${styles.btnPrimary} ${styles.headerCta}`}
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_click"
          data-location="header"
        >
          Quero meu site<span className={styles.srOnly}> (abre em nova aba)</span>
        </a>
      </div>
    </header>
  );
}
