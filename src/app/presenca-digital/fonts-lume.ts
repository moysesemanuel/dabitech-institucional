import { Cormorant_Garamond, Jost } from "next/font/google";

// Fontes do exemplo Studio Lume. Ficam em arquivo próprio porque o mockup também aparece
// na home institucional, que não deve carregar as fontes dos outros exemplos.
const lumeSerif = Cormorant_Garamond({
  variable: "--pd-lume-serif",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const lumeSans = Jost({ variable: "--pd-lume-sans", weight: ["400", "500"], subsets: ["latin"] });

export const lumeFontVariables = `${lumeSerif.variable} ${lumeSans.variable}`;
