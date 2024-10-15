"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./Footer.module.css";
import { LuFacebook } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer className={styles.generalDiv}>
      <div className={styles.socialDiv}>
        <div /*  data-aos="fade-up" */ className={styles.socialIcons}>
          <a
            target="_blank"
            href="https://m.facebook.com/senaisp.valinhos/"
            aria-label="Facebook"
          >
            <LuFacebook className={styles.icon} />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCrnBCwEuWcBiiunMbZk8FnA"
            aria-label="YouTube"
          >
            <FiYoutube className={styles.icon} />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/senaivalinhos"
            aria-label="Instagram"
          >
            <FaInstagram className={styles.icon} />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.endereco}>R. Artur Fernandes Querido, 55 - Vila Santo Antonio, Valinhos - SP</p>
        <p className={styles.copyrightText}>
          &copy; 2024 BFlow. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
