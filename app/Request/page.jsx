"use client";
import Header from "../Components/Header/Header";
import styles from "./request.module.css";
import Image from "next/image";

import { RiMenuSearchLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Footer from "../Components/Footer/Footer";

export default function Request() {
  const teste = () => {
    console.log("chamando requisição");
  };

  return (
    <div className={styles.generalDiv}>
      <Header />
      <div className={styles.init}>
        <div>
          <Image
            src="/senaicerto.png"
            alt="Logo do Senai"
            width={200}
            height={200}
            className={styles.logo}
          />
        </div>
        <div>
          <CiSearch color="#000" size={30} />
        </div>
      </div>

      <div className={styles.requestButton}>
        <div className={styles.filter}>
          <RiMenuSearchLine color="#ff0000" size={30} />
        </div>
        <div>
          <button className={styles.buttonRequest} onClick={teste}>
            Adicionar Requisição
          </button>
        </div>
      </div>

      <div className={styles.render}>
        <Image
          src="/ventquebrado.jpg"
          width={600}
          height={250}
          className={styles.imageReq}
        />
        <div className={styles.text}>
          <h1 className={styles.tituloReq}>SALA 1</h1>
          <h4 className={styles.descReq}>
            Ventilador está altamente derrotado.{" "}
          </h4>
          <p className={styles.autorReq}>Caique Naimi</p>
          <p className={styles.statusReq}>PENDENTE</p>
        </div>
      </div>

      <div className={styles.render}>
        <Image
          src="/ventquebrado.jpg"
          width={600}
          height={250}
          className={styles.imageReq}
        />
        <div className={styles.text}>
          <h1 className={styles.tituloReq}>SALA 1</h1>
          <h4 className={styles.descReq}>
            Ventilador está altamente derrotado.{" "}
          </h4>
          <p className={styles.autorReq}>Caique Naimi</p>
          <p className={styles.statusReq}>PENDENTE</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
