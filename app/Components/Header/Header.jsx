"use client";
import styles from "./header.module.css";
import Link from "next/link";

import SideHeader from "../SideHeader/sideHeader";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  let useName;

  if (user) {
    useName = user.name.split(" ");
  } else {
    useName = "";
  }

  const logout = () => {
    setUser(null);
    localStorage.clear();
    router.replace("/");
  };

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
        <li id={styles.senai}>
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
          <Link href="/Request">SOLICITAÇÕES</Link>
        </li>
        <li className={styles.links}>
          <Link href="/Login">{user ? useName[0].toUpperCase() : "LOGIN"}</Link>
        </li>
        {user ? (
          <li className={styles.links} onClick={() => logout()}>
            <p style={{ cursor: "pointer" }}>SAIR</p>
          </li>
        ) : (
          <li className={styles.links}>
            <Link href="/Register">REGISTRAR</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
