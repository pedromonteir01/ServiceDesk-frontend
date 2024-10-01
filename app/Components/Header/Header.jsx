import styles from "./header.module.css";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";

const Header = () => {

  const { user } = useContext(UserContext);

  const useName = user.name.split(' ');

  return (
    <nav className={styles.generalDiv}>
      <div className={styles.senai}></div>

      <ul className={styles.menu}>
        <li className={styles.links}>
          <Link target="blank" href="https://www.fiesp.com.br/">
            FIESP
          </Link>
        </li>
        <li className={styles.links}>
          <Link target="blank" href="https://www.ciesp.com.br/">
            CIESP
          </Link>
        </li>
        <li className={styles.links}>
          <Link target="blank" href="https://www.sesisp.org.br/">
            SESI
          </Link>
        </li>
        <li className={styles.links}>
          <Link target="blank" href="https://www.sp.senai.br/">
            SENAI
          </Link>
        </li>
        <li className={styles.links}>
          <Link target="blank" href="https://www.fiesp.com.br/instituto-roberto-simonsen-irs/">
            IRS
          </Link>
        </li>
        <li className={styles.links}>
          <Link href="/Login">{ user ? useName[0] : 'LOGIN' }</Link>
        </li>
        <li className={styles.links}>
          <Link href="/Request">SOLICITAÇÕES</Link>
        </li>
        <li className={styles.links}>
          <Link href="/Register">REGISTRAR</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
