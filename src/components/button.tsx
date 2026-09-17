import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
  children: ReactNode;
};

export function Button({ variant = "primary", className, children, ...anchorProps }: ButtonProps) {
  const variantClass = variant === "primary" ? "btnPrimary" : "btnGhost";
  const classes = ["btn", variantClass, className].filter(Boolean).join(" ");

  return (
    <a className={classes} {...anchorProps}>
      {children}
    </a>
  );
}
