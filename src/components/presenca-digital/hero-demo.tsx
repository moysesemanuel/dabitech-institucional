"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./landing.module.css";

type Slide = {
  slug: string;
  chip: string;
  name: string;
  segment: string;
  desktop: ReactNode;
  phone: ReactNode;
};

const INTERVAL_MS = 5000;

// Demonstração no hero: o visitante escolhe um segmento e vê o site de exemplo.
// Troca sozinho enquanto estiver ativo; o botão "Pausar" e a preferência por menos
// movimento desligam a troca automática.
export function HeroDemo({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setCurrent((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [auto, slides.length]);

  const active = slides[current];

  return (
    <div>
      <div className={styles.chips} role="group" aria-label="Escolha um segmento para ver o exemplo">
        {slides.map((slide, i) => (
          <button
            key={slide.slug}
            type="button"
            className={styles.chip}
            aria-pressed={i === current}
            data-track="example_click"
            data-label={slide.slug}
            data-location="hero"
            onClick={() => {
              setCurrent(i);
              setAuto(false);
            }}
          >
            {slide.chip}
          </button>
        ))}
        <button type="button" className={styles.pause} onClick={() => setAuto((v) => !v)}>
          {auto ? "Pausar troca automática" : "Retomar troca automática"}
        </button>
      </div>
      <div className={styles.stage}>
        {slides.map((slide, i) => (
          <div key={slide.slug} className={styles.slide} hidden={i !== current}>
            <div className={styles.desk}>{slide.desktop}</div>
            <div className={styles.phonePos}>{slide.phone}</div>
          </div>
        ))}
      </div>
      <p className={styles.demoNote} aria-live="off">
        <strong>{active.name}</strong>, {active.segment.toLowerCase()}. Projeto demonstrativo da DaBi Tech.
      </p>
    </div>
  );
}
