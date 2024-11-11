"use client";
import { motion } from "framer-motion";
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
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.containerBoth}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Vídeo de fundo */}
          <video autoPlay loop muted className={styles.backgroundVideo}>
            <source src="/senai.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>

          <div className={styles.containernothing}>
            <p className={styles.text}>alguma</p>
          </div>
          <motion.div
            className={styles.containerText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className={styles.titlef}>
              Conheça a nossa funcionalidade
            </h1>
            <p className={styles.description}>
              O Service Desk funciona como um "balcão de atendimento virtual",
              responsável por acolher e endereçar solicitações de suporte. Sua
              função é garantir a satisfação do cliente. Portanto, demanda
              agilidade, bom senso de priorização e capacidade de direcionamento
              e resolução efetiva. O que procuramos é a agilidade para processos
              de manutenção na infraestrutura do SENAI-Valinhos.
            </p>
            <h1 className={styles.titleFunction}>Identificou alguma falha?</h1>
            <Link href="./Request" className={styles.button}>
              Reportar Problema
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.containerB}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            className={styles.containerTextfUser}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h1 className={styles.titlefUser}>
              Olá, {user ? user.name : "visitante"}!
            </h1>
            <p className={styles.descriptionfUser}>
              Seja bem-vindo ao Service Desk do SENAI-Valinhos! Aqui você pode
              reportar problemas e solicitar manutenções na infraestrutura da
              escola. Não se esqueça de preencher todos os campos do formulário
              para que possamos atender a sua solicitação com eficiência.
            </p>
          </motion.div>
          <motion.h1
            className={styles.titleIcons}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            ATENÇÃO!
          </motion.h1>
          <motion.div
            className={styles.containerIcons}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BsPencilSquare size={50} />
              <p className={styles.textIcon}>Escreva o assunto do problema</p>
            </motion.div>
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GoTools size={50} />
              <p className={styles.textIcon}>Descreva o problema detalhadamente</p>
            </motion.div>
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IoCamera size={50} />
              <p className={styles.textIcon}>Anexe uma foto do problema</p>
            </motion.div>
            <motion.div
              className={styles.icon}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <IoIosPin size={50} />
              <p className={styles.textIcon}>Informe a localização do problema</p>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className={styles.falsedivbase}>
          <h1 className={styles.falsetitle}>Video</h1>
        </div>
      </motion.div>
    </main>
  );
}
