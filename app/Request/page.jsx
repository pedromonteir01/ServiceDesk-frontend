import Header from "../Components/Header/Header";
import styles from "./request.module.css";
import Image from "next/image";

import { HiMenuAlt2 } from "react-icons/hi";

export default function Request() {
  return (
    <div className={styles.generalDiv}>
      <Header />
      <div>
        <Image
          src="/senaicerto.png"
          alt="Logo do Senai"
          width={300}
          height={300}
          className={styles.logo}
        />
      </div>

      <div className={styles.requestButton}>
        <div>
          <button className={styles.buttonCategory}>
            <HiMenuAlt2 />
          </button>
        </div>
        <div>
          <button className={styles.buttonRequest}>Solicitar Ajuda</button>
        </div>
      </div>
    </div>
  );
}
