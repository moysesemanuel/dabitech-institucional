import { ImageResponse } from "next/og";

export const alt = "DaBi Tech — Digital Solutions";
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

const HEADLINE = "Sistemas que substituem planilha, WhatsApp e papel.";
const LOGO_TEXT = "dabitech DIGITAL SOLUTIONS";

export default async function Image() {
  const [fredoka, archivo] = await Promise.all([
    loadGoogleFont("Fredoka", 600, LOGO_TEXT),
    loadGoogleFont("Archivo", 800, HEADLINE),
  ]);

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
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(0,182,230,0.22), transparent 42%), linear-gradient(190deg, #0B2A57 0%, #050D1C 78%)",
        }}
      >
        <div style={{ display: "flex", fontFamily: "Fredoka", fontSize: 56, fontWeight: 600 }}>
          <span style={{ color: "#2B5CE6" }}>dabi</span>
          <span style={{ color: "#eef3fa", marginLeft: 6 }}>tech</span>
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Fredoka",
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: 4,
            color: "#00B6E6",
            marginTop: 4,
          }}
        >
          DIGITAL SOLUTIONS
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Archivo",
            fontWeight: 800,
            fontSize: 58,
            lineHeight: 1.12,
            letterSpacing: -1,
            color: "#eef3fa",
            marginTop: 56,
            maxWidth: 920,
          }}
        >
          {HEADLINE}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fredoka", data: fredoka, weight: 600, style: "normal" },
        { name: "Archivo", data: archivo, weight: 800, style: "normal" },
      ],
    },
  );
}
