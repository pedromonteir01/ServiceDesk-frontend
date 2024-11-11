"use client";
import { useEffect, useState, useContext } from "react";
import styles from "./requestComponent.module.css";
import toast from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import RenderTest from "../RenderTest/RenderTest";
import {
  getAllRequests,
  deleteRequest,
  updateRequest,
  getRequestByLocal,
  getRequestById,
} from "@/app/actions/request";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { UserContext } from "@/app/contexts/userContext";

export default function RequestComponent() {

  const { user } = useContext(UserContext);
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {

    if (!user) {
      toast.error("Você precisa estar logado para acessar essa página");
      router.push("/Login");
      return;
    }

    setLoading(true);
    const fetchRequests = async () => {
      try {
        const data = await getAllRequests();
        if (data.requests) {
          setRequests(data.requests);
        } else {
          toast.error(data.success.toUpperCase());
        }
      } catch (e) {
        toast.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, [user, router]);

  const handleDeleteRequest = async (id) => {
    try {
      await deleteRequest(id);
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== id)
      );
    } catch (error) {
      console.error("Erro ao deletar requisição:", error);
    }
  };

  const handleUpdateRequestStatus = async (id, newStatus) => {
    try {
      await updateRequest(id, { status_request: newStatus });
      setRequests((prevRequests) =>
        prevRequests.map((request) =>
          request.id === id
            ? { ...request, status_request: newStatus }
            : request
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar requisição:", error);
    }
  };

  const handleRequestCreate = () => {
    router.push("/RequestCreate");
  };

  const sortedRequests = [...requests].sort(
    (a, b) => (a.status_request ? 1 : 0) - (b.status_request ? 1 : 0)
  );

  const handleRequest = async(id) => {
    try {
      const response = await getRequestById(id);
      console.log(response);
      setRequest(response);
    } catch(e) {
      console.log(e);
    }
  }
  
  console.log(request);

  return (
    <article className={styles.container}>
      <motion.section
        className={styles.filters}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.h1}>Gestão de Requisições</h1>
      </motion.section>

      <motion.section
        className={styles.requestButton}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button className={styles.buttonRequest} onClick={handleRequestCreate}>
          Adicionar Requisição
        </button>
      </motion.section>

      <motion.section
        className={styles.table}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {loading ? (
          <div className={styles.loading}>
            <TailSpin
              height="80"
              width="80"
              color="#ff0000"
              ariaLabel="tail-spin-loading"
            />
          </div>
        ) : sortedRequests.length !== 0 ? (
          <>
            {
               sortedRequests.map((item) => (
                <motion.div
                  key={item.id || item.local}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  onClick={() => handleRequest(item.id)}
                >
                  <RenderTest
                    key={item.id || item.local}
                    local={item.local}
                    desc={item.description}
                    autor={item.email}
                    image={item.image}
                    status={item.status_request}
                    onRemove={() => handleDeleteRequest(item.id)}
                    onEdit={() => console.log("Editar não implementado ainda")}
                    onStatusChange={() =>
                      handleUpdateRequestStatus(
                        item.id,
                        item.status_request === "aguardando"
                          ? "concluida"
                          : "aguardando"
                      )
                    }
                  />
                </motion.div>
              ))
            }
          </>
          
        ) : (
          <p className={styles.noRequestMsg}>REALIZE ALGUMA REQUISIÇÃO!</p>
        )}
      </motion.section>
      {
              request && <div>teste!</div>
            }
    </article>
  );
}
