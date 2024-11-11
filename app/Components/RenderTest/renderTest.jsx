import styles from "./renderTeste.module.css";
import { IoTrashOutline } from "react-icons/io5";
import { MdSwapHoriz } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { useContext } from "react";
import { UserContext } from "@/app/contexts/userContext";

export default function RenderTest({
  local,
  desc,
  autor,
  status,
  onRemove,
  onEdit,
  onStatusChange,
  image,
  requests,
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
            <div className={styles.actions}>
              <button className={styles.btnRemove} onClick={onRemove}>
                <IoTrashOutline fontSize={50} />
              </button>
              {/* <button className={styles.btnStatus} onClick={onStatusChange}>
                <MdSwapHoriz fontSize={20} />
              </button> */}
              <button className={styles.btnEdit} onClick={onEdit}>
                <GoPencil fontSize={50} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
