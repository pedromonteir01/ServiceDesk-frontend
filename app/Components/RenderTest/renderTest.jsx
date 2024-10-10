import styles from "./renderTeste.module.css";
import { IoTrashOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { MdSwapHoriz } from "react-icons/md";
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
}) {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.render}>
      <div className={styles.text}>
        <h1 className={styles.tituloReq}>{local}</h1>
        <h4 className={styles.descReq}>{desc}</h4>
        <p className={styles.autorReq}>{autor}</p>

        {user && user.isadmin && (
          <>
            {status === "PENDENTE" ? (
              <p className={styles.statusReqP}>{status}</p>
            ) : (
              <p className={styles.statusReqC}>{status}</p>
            )}
            <div className={styles.btns}>
              <button className={styles.btnRemove} onClick={onRemove}>
                <IoTrashOutline fontSize={25} />
              </button>

              <button className={styles.btnStatus} onClick={onStatusChange}>
                <MdSwapHoriz fontSize={25} />
              </button>
              
              <button className={styles.btnEdit} onClick={onEdit}>
                <GoPencil fontSize={25} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
