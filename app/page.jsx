"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
    <div className={styles.container}>
      <div className={styles.sideHeader}>
      </div>
      {/* <div className={styles.videobanner}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
      </div> */}
      <div className={styles.falsedivbase}>
        <h1 className={styles.falsetitle}>
          Video
        </h1>
      </div>
      <div className={styles.containerText}>
      <h1 className={styles.title}>
        Conheça a nossa funcionalidade 
      </h1>
      <p className={styles.description}>
       O Service Desk funciona como um "balcão de atendimento virtual", responsável por acolher e endereçar solicitações de suporte. Sua função é garantir a satisfação do cliente. Portanto, demanda agilidade, bom senso de priorização e capacidade de direcionamento e resolução efetiva. O que procuramos é a agilidade para processos de manutenção na infraestrutura do SENAI-Valinhos. 
      </p>
      </div>
        <h1 className={styles.titleFunction}>
          Identificou alguma falha?
        </h1>
      <div className={styles.buttonFunction}>
        <button className={styles.button}>Reportar Problema</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
