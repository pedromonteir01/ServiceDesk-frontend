import Image from "next/image";
import styles from "./page.module.css";
// |

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <HeaderSecundary /> */}
      {/* <div className={styles.imagebanner}>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={72}
        height={16}
      />
      </div> */}
      <h1 className={styles.title}>
        Conheça a nossa funcionalidade 
      </h1>
      <p className={styles.description}>
       O Service Desk funciona como um "balcão de atendimento virtual", responsável por acolher e endereçar solicitações de suporte. Sua função é garantir a satisfação do cliente. Portanto, demanda agilidade, bom senso de priorização e capacidade de direcionamento e resolução efetiva. O que procuramos é a agilidade para processos de manutenção na infraestrutura do SENAI-Valinhos. 
      </p>
      </div>
  );
}
