import styles from "./header.module.css";
import Link from "next/link";
import HamburgerMenu from '../MenuBtn/menuBtn';
import { useState } from 'react';

  const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const toggle = () => {
      setIsOpen(!isOpen);
      console.log(isOpen);
    }
  
    return (
      <nav className={styles.generalDiv}>
        <div className={styles.senai}></div>
        <HamburgerMenu isOpen={toggle} />

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
          <Link
            target="blank"
            href="https://www.fiesp.com.br/instituto-roberto-simonsen-irs/"
          >
            IRS
          </Link>
        </li>
        <li className={styles.links}>
          <Link href="/Login">LOGIN</Link>
        </li>
        <li className={styles.links}>
          <Link href="/Request">SOLICITAÇÕES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
