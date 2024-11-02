"use client";
import styles from "./Header.module.css";
import Link from "next/link";

import SideHeader from "../SideNav/sideNav";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <nav className={styles.generalDiv}>
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
        <li id={styles.senai}>
          <Link target="blank" href="https://www.sp.senai.br/">
            SENAI
          </Link>
        </li>
        <li className={styles.links}>
          <Link target="blank" href="https://www.fiesp.com.br/">
            IRS
          </Link>
        </li>

        <li className={styles.links}>
          <Link target="blank" href="https://www.facebook.com/senaisaopaulo">
            <FaFacebookF />
          </Link>
        </li>
        <span className={styles.barra}>|</span>
        <li className={styles.links}>
          <Link target="blank" href="https://twitter.com/senaisaopaulo">
            <FaTwitter />
          </Link>
        </li>
        <span className={styles.barra}>|</span>
        <li className={styles.links}>
          <Link
            target="blank"
            href="https://www.youtube.com/channel/UCaz1BMUVug86pd_uS598X1A"
          >
            <TfiYoutube />
          </Link>
        </li>
        <span className={styles.barra}>|</span>
        <li className={styles.links}>
          <Link target="blank" href="https://www.linkedin.com/company/senai-sp">
            <FaLinkedinIn />
          </Link>
        </li>
        <span className={styles.barra}>|</span>
        <li className={styles.links}>
          <Link target="blank" href="https://www.instagram.com/senai.sp">
            <FaInstagram />
          </Link>
        </li>
        <span className={styles.barra}>|</span>
        <li className={styles.links}>
          <Link
            target="blank"
            href="https://api.whatsapp.com/send?phone=551133220050"
          >
            <FaWhatsapp />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
