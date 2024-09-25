"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./footer.module.css";
import { LuFacebook } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.generalDiv}>
      <div className={styles.socialDiv}>
        <div data-aos="fade-up" className={styles.socialIcons}>
          <a target="blank" href="https://m.facebook.com/senaisp.valinhos/">
            <LuFacebook className="icon" />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UCrnBCwEuWcBiiunMbZk8FnA"
          >
            <FiYoutube className="icon" />
          </a>
          <a target="blank" href="https://instagram.com/senaivalinhos">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <h2 /* data-aos="fade-up" */>R. Artur Fernandes Querido, 55 - Vila Santo Antonio, Valinhos - SP, 13270-530</h2>
        <p /* data-aos="fade-up" */ className={styles.copyrightText}>
          &copy; 2024 BFlow. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
