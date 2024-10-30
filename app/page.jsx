"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/footer";
import { UserContext } from "./contexts/userContext";
import { useContext } from "react";
import { BsFileEarmarkFontFill } from "react-icons/bs";

export default function Home() {
  const { user } = useContext(UserContext);
  return (
    <main>
      <Header />
    <div className={styles.container}>
    <div className={styles.containerBoth}>
      <div className={styles.containernothing}>
        <p className={styles.text}>
          alguma
        </p>
      </div>
      <div className={styles.containerText}>
      <h1 className={styles.title}>
        Conheça a nossa funcionalidade 
      </h1>
      <p className={styles.description}>
       O Service Desk funciona como um "balcão de atendimento virtual", responsável por acolher e endereçar solicitações de suporte. Sua função é garantir a satisfação do cliente. Portanto, demanda agilidade, bom senso de priorização e capacidade de direcionamento e resolução efetiva. O que procuramos é a agilidade para processos de manutenção na infraestrutura do SENAI-Valinhos. 
      </p>
        <h1 className={styles.titleFunction}>
          Identificou alguma falha?
        </h1>
        <button className={styles.button}>Reportar Problema</button>
      </div>
      </div>
      <div className={styles.containerTextfUser}>
      <h1 className={styles.titlefUser}>
        Olá, {user ? user.name : "visitante"}! 
      </h1>
      <p className={styles.descriptionfUser}>
        Seja bem-vindo ao Service Desk do SENAI-Valinhos! Aqui você pode reportar problemas e solicitar manutenções na infraestrutura da escola. Não se esqueça de preencher todos os campos do formulário para que possamos atender a sua solicitação com eficiência.
      </p>
      </div>  
      <div className={styles.containerIcons}>
        <div className={styles.icon}>
          <BsFileEarmarkFontFill size={50} color="#FFD700" />
          <p className={styles.textIcon}>Reporte um problema</p>
        </div>
        </div>
      <div className={styles.falsedivbase}>
        <h1 className={styles.falsetitle}>
          Video
        </h1>
      </div>
     
      </div>
    </main>
  );
}
