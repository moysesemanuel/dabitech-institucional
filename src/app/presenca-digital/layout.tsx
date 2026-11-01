import { fontVariables } from "./fonts";

export default function PresencaDigitalLayout({ children }: LayoutProps<"/presenca-digital">) {
  return <div className={fontVariables}>{children}</div>;
}
