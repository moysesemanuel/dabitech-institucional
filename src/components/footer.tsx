import { DaBiTechLogo } from "@/components/logo";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrapWide ${styles.inner}`}>
        <DaBiTechLogo className={styles.logo} width={120} variant="light" />
        <span>Sistemas sob medida para operações reais.</span>
      </div>
    </footer>
  );
}
