"use client";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";
import styles from "./requestComponent.module.css";
import Image from "next/image";

import { RiMenuSearchLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import RenderTest from "../RenderTest/renderTest";

export default function RequestComponent() {

  const { user } = useContext(UserContext);

  const teste = () => {
    console.log("chamando requisição");
  };

  return (
    <>
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

      <RenderTest
        local="SALA 1"
        desc="Lâmpada queimada"
        autor="Pedro Moneteiro"
        status="PENDENTE"
      />

      <RenderTest
        local="SALA 2"
        desc="Ar condicionado quebrado"
        autor="Caique Naimi"
        status="CONCLUIDO"
      />

      <RenderTest
        local="BANHEIRO"
        desc="Privada quebrada"
        autor="Arthur Borges"
        status="PENDENTE"
      />
    </>
  );
}
