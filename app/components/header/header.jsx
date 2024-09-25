import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={styles.generalDiv}>
      <div className={styles.senai}></div>

      <div className={styles.menu}>
        <h3 className={styles.links}>
          <a href="https://www.fiesp.com.br/">FIESP</a>
        </h3>
        <h3 className={styles.links}>
          <a href="https://www.ciesp.com.br/">CIESP</a>
        </h3>
        <h3 className={styles.links}>
          <a href="https://www.sesisp.org.br/">SESI</a>
        </h3>
        <h3 className={styles.links}>
          <a href="https://www.sp.senai.br/">SENAI</a>
        </h3>
        <h3 className={styles.links}>
          <a href="https://www.fiesp.com.br/instituto-roberto-simonsen-irs/">
            IRS
          </a>
        </h3>
      </div>
    </div>
  );
}
