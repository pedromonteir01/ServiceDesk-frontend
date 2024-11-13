import styles from "./renderTeste.module.css";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";

export default function RenderTest({
  local,
  desc,
  autor,
  status,
  onEdit,
  image,
}) {
  const { user } = useContext(UserContext);

  const statusStyle = () => {
    if(status == 'aguardando') {
      return styles.statusInconclued
    } else if( status == 'em andamento') {
      return styles.statusPending
    } else {
      return styles.statusCompleted
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={local}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{local}</h1>
        <h4 className={styles.description}>{desc}</h4>
        <p className={styles.author}>{autor}</p>
        {user && user.isadmin && (
                <>
                  <p
                    className={statusStyle()}
                  >
                    {status.toUpperCase()}
                  </p>
                </>
              )}
      </div>
    </div>
  );
}
