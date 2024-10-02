import styles from "./header.module.css";
import Link from "next/link";
import SideHeader from "../SideHeader/sideHeader";
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Hamburger from "hamburger-react";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <nav className={styles.generalDiv}>
      <div className={styles.senai}></div>
      <div className={styles.menuD}>
      <div className={styles.align}>
        <Hamburger toggled={sidebar} toggle={showSidebar} color="#fff" />
        {sidebar && <SideHeader isActive={sidebar} onClose={closeSidebar} />}
        </div>
      </div>
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