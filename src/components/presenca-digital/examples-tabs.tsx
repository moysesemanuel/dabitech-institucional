"use client";

import Link from "next/link";
import { useState, type KeyboardEvent, type ReactNode } from "react";
import { WA_LINK, type ExampleSlug } from "@/lib/presenca-digital";
import styles from "./landing.module.css";

type Item = {
  slug: ExampleSlug;
  tab: string;
  name: string;
  segment: string;
  description: string;
  palette: readonly string[];
  fonts: string;
  desktop: ReactNode;
  phone: ReactNode;
};

export function ExamplesTabs({ items }: { items: Item[] }) {
  const [current, setCurrent] = useState(0);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const last = items.length - 1;
    let next = -1;
    if (event.key === "ArrowRight") next = current === last ? 0 : current + 1;
    if (event.key === "ArrowLeft") next = current === 0 ? last : current - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next < 0) return;
    event.preventDefault();
    setCurrent(next);
    document.getElementById(`tab-${items[next].slug}`)?.focus();
  }

  return (
    <>
      <div className={styles.tabs} role="tablist" aria-label="Segmentos de exemplo" onKeyDown={onKeyDown}>
        {items.map((item, i) => (
          <button
            key={item.slug}
            id={`tab-${item.slug}`}
            type="button"
            role="tab"
            className={styles.tab}
            aria-selected={i === current}
            aria-controls={`painel-${item.slug}`}
            tabIndex={i === current ? 0 : -1}
            onClick={() => setCurrent(i)}
          >
            {item.tab}
          </button>
        ))}
      </div>
      {items.map((item, i) => (
        <div
          key={item.slug}
          id={`painel-${item.slug}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.slug}`}
          className={styles.panel}
          hidden={i !== current}
        >
          <div className={styles.show}>
            {item.desktop}
            <div className={styles.phonePos}>{item.phone}</div>
          </div>
          <div className={styles.meta}>
            <span className={styles.badge}>Projeto demonstrativo</span>
            <h3>{item.name}</h3>
            <p>
              {item.segment}. {item.description}
            </p>
            <ul className={styles.swatches} aria-label="Paleta do exemplo" style={{ listStyle: "none", padding: 0 }}>
              {item.palette.map((color) => (
                <li key={color} style={{ display: "contents" }}>
                  <i style={{ background: color }} />
                  <span className={styles.srOnly}>{color}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.9375rem" }}>{item.fonts}</p>
            <div className={styles.metaBtns}>
              <Link
                className={`${styles.btn} ${styles.btnCyan}`}
                href={`/presenca-digital/exemplos/${item.slug}`}
                data-track="example_click"
                data-label={item.slug}
                data-location="exemplos_abrir"
              >
                Abrir este exemplo
              </Link>
              <a
                className={`${styles.btn} ${styles.btnLine}`}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-location={`exemplo_${item.slug}`}
              >
                Quero um site assim<span className={styles.srOnly}> (abre em nova aba)</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
