import Header from "../Components/Header/Header";
import styles from "./request.module.css";
import Image from "next/image";
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
    </div>
  );
}
