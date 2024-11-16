"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { GoTools } from "react-icons/go";
import { IoCamera } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import Link from "next/link";
import Header from "./components/Header/Header";
import { UserContext } from "./contexts/userContext";
import styles from "./page.module.css";

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <main className={styles.main}>
      <Header />
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.heroSection}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>Bem-vindo ao Service Desk</h1>
            <p className={styles.subtitle}>
              Agilidade e eficiência no suporte à infraestrutura do SENAI-Valinhos.
            </p>
            <Link href="./Request" className={styles.ctaButton}>
              Reportar Problema
            </Link>
          </motion.div>
        </div>

    {/*     <motion.div className={styles.parallaxContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <video
            className={styles.parallaxVideo}
            autoPlay
            loop
            muted
            src="/senai2.mp4"
          />
        </motion.div> */}

        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.greeting}>
            Olá, {user ? user.name : "visitante"}!
          </h2>
          <p className={styles.description}>
            Seja bem-vindo ao Service Desk do SENAI-Valinhos! Aqui você pode
            reportar problemas e solicitar manutenções de forma prática e rápida.
          </p>
          <h3 className={styles.attention}>ATENÇÃO!</h3>
          <div className={styles.iconsContainer}>
            <div className={styles.iconCard}>
              <BsPencilSquare size={40} />
              <p>Escreva o assunto do problema</p>
            </div>
            <div className={styles.iconCard}>
              <GoTools size={40} />
              <p>Descreva o problema detalhadamente</p>
            </div>
            <div className={styles.iconCard}>
              <IoCamera size={40} />
              <p>Anexe uma foto do problema</p>
            </div>
            <div className={styles.iconCard}>
              <IoIosPin size={40} />
              <p>Informe a localização do problema</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
