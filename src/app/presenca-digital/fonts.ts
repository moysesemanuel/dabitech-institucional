import {
  Archivo,
  Barlow,
  Barlow_Condensed,
  Bricolage_Grotesque,
  Cormorant_Garamond,
  DM_Sans,
  Fraunces,
  Jost,
  Manrope,
} from "next/font/google";

// Títulos da landing: Archivo com eixo de largura (a família do site institucional, versão expandida).
export const display = Archivo({
  variable: "--pd-display",
  axes: ["wdth"],
  subsets: ["latin"],
});

// Fontes dos sites de exemplo. Só a do primeiro exemplo (Lume) é pré-carregada;
// as demais carregam quando o exemplo aparece.
const lumeSerif = Cormorant_Garamond({
  variable: "--pd-lume-serif",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const lumeSans = Jost({ variable: "--pd-lume-sans", weight: ["400", "500"], subsets: ["latin"] });
const doceSerif = Fraunces({ variable: "--pd-doce-serif", weight: ["900"], subsets: ["latin"], preload: false });
const doceSans = DM_Sans({ variable: "--pd-doce-sans", weight: ["500", "700"], subsets: ["latin"], preload: false });
const brasaCond = Barlow_Condensed({
  variable: "--pd-brasa-cond",
  weight: ["600", "800"],
  subsets: ["latin"],
  preload: false,
});
const brasaSans = Barlow({ variable: "--pd-brasa-sans", weight: ["500", "600"], subsets: ["latin"], preload: false });
const casaDisplay = Bricolage_Grotesque({
  variable: "--pd-casa-display",
  weight: "variable",
  axes: ["opsz"],
  subsets: ["latin"],
  preload: false,
});
const casaSans = Manrope({ variable: "--pd-casa-sans", weight: ["500", "600", "800"], subsets: ["latin"], preload: false });

export const fontVariables = [
  display,
  lumeSerif,
  lumeSans,
  doceSerif,
  doceSans,
  brasaCond,
  brasaSans,
  casaDisplay,
  casaSans,
]
  .map((f) => f.variable)
  .join(" ");
