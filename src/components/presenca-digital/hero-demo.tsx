"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
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
  const [previous, setPrevious] = useState<number | null>(null);
  const [auto, setAuto] = useState(true);

  // A carta da frente sai de lado e volta para o fim da pilha; a de trás sobe.
  const goTo = useCallback(
    (next: number) => {
      if (next === current) return;
      setPrevious(current);
      setCurrent(next);
    },
    [current],
  );

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => goTo((current + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [auto, current, goTo, slides.length]);

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
              goTo(i);
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
        {slides.map((slide, i) => {
          const position = (i - current + slides.length) % slides.length;
          return (
            <div
              key={slide.slug}
              className={`${styles.slide} ${i === previous && i !== current ? styles.leaving : ""}`}
              data-pos={position}
              aria-hidden={position !== 0}
              inert={position !== 0}
            >
              <div className={styles.desk}>{slide.desktop}</div>
              <div className={styles.phonePos}>{slide.phone}</div>
            </div>
          );
        })}
      </div>
      <p className={styles.demoNote} aria-live="off">
        <strong>{active.name}</strong>, {active.segment.toLowerCase()}. Projeto demonstrativo da DaBi Tech.
      </p>
    </div>
  );
}
