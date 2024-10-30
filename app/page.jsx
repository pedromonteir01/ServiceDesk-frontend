"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import { UserContext } from "./contexts/userContext";
import { useContext } from "react";
import { GoTools } from "react-icons/go";
import { IoCamera } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";


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
        <Link href='./Request' className={styles.button}>Reportar Problema</Link>
      </div>
      </div> 
      <div className={styles.containerB}>
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
          <BsPencilSquare size={50} />
          <p className={styles.textIcon}>Escreva o assunto do problema</p>
        </div>
        <div className={styles.icon}>
          <GoTools size={50} />
          <p className={styles.textIcon}>Descreva o problema detalhadamente</p>
        </div>
        <div className={styles.icon}>
          <IoCamera size={50} />
          <p className={styles.textIcon}>Anexe uma foto do problema</p>
        </div>
        <div className={styles.icon}>
          <IoIosPin size={50} />
          <p className={styles.textIcon}>Informe a localização do problema</p>
        </div>
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
