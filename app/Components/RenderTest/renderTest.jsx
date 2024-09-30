import styles from "./renderTeste.module.css";

export default function RenderTest({ local, desc, autor, status }) {
  return (
    <div className={styles.render}>
      <div className={styles.text}>
        <h1 className={styles.tituloReq}>{local}</h1>
        <h4 className={styles.descReq}>{desc}</h4>
        <p className={styles.autorReq}>{autor}</p>
        {status === "PENDENTE" ? (
          <p className={styles.statusReqP}>{status}</p>
        ) : (
          <p className={styles.statusReqC}>{status}</p>
        )}
      </div>
    </div>
  );
}
