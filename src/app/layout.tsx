import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans, Fredoka, Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FinalCta } from "@/components/sections/final-cta";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["700", "800", "900"],
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  weight: ["500", "600"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500"],
  subsets: ["latin"],
});

const TITLE = "DaBi Tech | Softwares e Sistemas sob Medida";
const DESCRIPTION =
  "Conheça o DaBi Agendaí, o DaBi Price e o desenvolvimento de sistemas sob medida da DaBi Tech para organizar agendamentos, preços e processos do seu negócio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "DaBi Tech",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%232B5CE6'/%3E%3Ctext x='32' y='45' font-family='Arial,sans-serif' font-size='38' font-weight='700' fill='%23FFFFFF' text-anchor='middle'%3Ed%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${plexSans.variable} ${fredoka.variable} ${poppins.variable}`}
    >
      <body>
        <a className="skipLink" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">
          {children}
          <FinalCta />
        </main>
        <Footer />
      </body>
    </html>
  );
}
