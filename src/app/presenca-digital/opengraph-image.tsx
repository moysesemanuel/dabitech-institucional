import { ImageResponse } from "next/og";

export const alt = "DaBi Presença Digital: sites profissionais para pequenos negócios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(font: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);

  if (match) {
    const response = await fetch(match[1]);
    if (response.ok) {
      return response.arrayBuffer();
    }
  }

  throw new Error(`Failed to load font: ${font}`);
}

const LABEL = "DABI PRESENÇA DIGITAL";
const HEADLINE = "Seu negócio merece um site à altura do seu trabalho.";
const OFFER = "R$ 797 em duas parcelas · 3 a 5 dias úteis";

export default async function Image() {
  const archivo = await loadGoogleFont("Archivo", 800, `${LABEL}${HEADLINE}${OFFER}`);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#F4F7FC",
        }}
      >
        <div style={{ display: "flex", fontFamily: "Archivo", fontSize: 24, letterSpacing: 4, color: "#2B5CE6" }}>
          {LABEL}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Archivo",
            fontSize: 78,
            lineHeight: 1.04,
            letterSpacing: -2,
            color: "#0A1A33",
            marginTop: 28,
            maxWidth: 980,
          }}
        >
          {HEADLINE}
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            fontFamily: "Archivo",
            fontSize: 30,
            color: "#FFFFFF",
            background: "#2B5CE6",
            borderRadius: 999,
            padding: "16px 32px",
            marginTop: 48,
          }}
        >
          {OFFER}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: archivo, weight: 800, style: "normal" },
      ],
    },
  );
}
