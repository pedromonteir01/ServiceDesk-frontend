import styles from "./renderTeste.module.css";
import { IoTrashOutline } from "react-icons/io5";
import { MdSwapHoriz } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";
import { getAllRequests } from "@/app/actions/request";

export default function RenderTest({
  local,
  desc,
  autor,
  status,
  onRemove,
  onEdit,
  onStatusChange,
  image,
  requests, // novo parâmetro para receber a imagem da requisição
}) {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image} // usa a imagem de requests
          alt="Imagem SENAI"
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
              className={
                status === "aguardando"
                  ? styles.statusPending
                  : styles.statusCompleted
              }
            >
              {status}
            </p>
            <div className={styles.actions}>
              <button className={styles.btnRemove} onClick={onRemove}>
                <IoTrashOutline fontSize={20} />
              </button>
             {/*  <button className={styles.btnStatus} onClick={onStatusChange}>
                <MdSwapHoriz fontSize={20} />
              </button> */}
              <button className={styles.btnEdit} onClick={onEdit}>
                <GoPencil fontSize={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
