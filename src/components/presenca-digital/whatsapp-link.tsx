import type { ReactNode } from "react";
import { WA_LINK } from "@/lib/presenca-digital";
import styles from "./landing.module.css";

type Props = {
  location: string;
  className: string;
  children: ReactNode;
};

// Todo CTA da landing leva ao mesmo destino: WhatsApp comercial com a mensagem pré-preenchida.
export function WhatsappLink({ location, className, children }: Props) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-track="whatsapp_click"
      data-location={location}
    >
      {children}
      <span className={styles.srOnly}> (abre em nova aba)</span>
    </a>
  );
}
