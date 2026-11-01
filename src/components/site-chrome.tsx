"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Rotas que trazem o próprio cabeçalho, rodapé e chamada final (landings de campanha).
const STANDALONE_ROUTES = ["/presenca-digital"];

type SiteChromeProps = {
  header: ReactNode;
  footer: ReactNode;
  finalCta: ReactNode;
  children: ReactNode;
};

export function SiteChrome({ header, footer, finalCta, children }: SiteChromeProps) {
  const pathname = usePathname();
  const standalone = STANDALONE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (standalone) return <>{children}</>;

  return (
    <>
      {header}
      <main id="conteudo">
        {children}
        {finalCta}
      </main>
      {footer}
    </>
  );
}
