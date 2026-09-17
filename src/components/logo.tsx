type DaBiTechLogoProps = {
  className?: string;
  width?: number;
  variant?: "navy" | "light";
};

export function DaBiTechLogo({ className, width = 140, variant = "light" }: DaBiTechLogoProps) {
  const techFill = variant === "light" ? "#eef3fa" : "#0a0b0d";

  return (
    <svg
      className={className}
      width={width}
      height="auto"
      viewBox="0 0 320 130"
      role="img"
      aria-label="DaBi Tech Digital Solutions"
    >
      <text x="0" y="82" fontSize={66} style={{ fontFamily: "var(--font-fredoka)" }}>
        <tspan fontWeight={600} fill="#2B5CE6">
          dabi
        </tspan>
        <tspan fontWeight={500} fontSize={40} dx={4} fill={techFill}>
          tech
        </tspan>
      </text>
      <text
        x={2}
        y={114}
        style={{ fontFamily: "var(--font-poppins)" }}
        fontSize={15}
        letterSpacing={3}
        fill="#00B6E6"
      >
        DIGITAL SOLUTIONS
      </text>
    </svg>
  );
}
