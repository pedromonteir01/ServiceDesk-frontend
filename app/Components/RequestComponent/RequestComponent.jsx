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
  updateStatus,
} from "@/app/actions/request";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { UserContext } from "@/app/contexts/userContext";
import Image from "next/image";
import format from "@/app/utilities/formattedDate";
import { IoTrashOutline } from "react-icons/io5";

export default function RequestComponent() {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
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
      const response = await getRequestById(id);
      if (response) {
        await deleteRequest(id);
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request.id !== id)
        );

        if (response.id == request.id) setRequest(null);
      } else {
        toast.error("Requisição não existe");
      }
      return;
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
    if (!user) {
      toast.error("Você precisa estar logado para acessar essa página");
      router.push("/Login");
      return;
    }
    router.push("/RequestCreate");
  };

  const sortedRequests = [...requests].sort(
    (a, b) => (a.status_request ? 1 : 0) - (b.status_request ? 1 : 0)
  );

  const handleRequest = async (id) => {
    try {
      const response = await getRequestById(id);
      setRequest(response);
    } catch (e) {
      toast.error(e.message || e.error);
    }
  };

  const changeStatus = async(id, status) => {
    try {
      const request = await getRequestById(id);
      const token = localStorage.getItem('refreshtoken');
      await updateStatus(id, status, token);
      if(request) {
        setRequest(request);
      }
    } catch(e) {
      toast.error('ERRO EM ALTERAR STATUS');
    }
  }

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
      <div className={styles.tooCards}>
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
              {sortedRequests.map((item) => (
                <motion.div
                  key={item.id || item.local}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  onClick={() => handleRequest(item.id)}
                  className={styles.requestCard}
                >
                  <RenderTest
                    key={item.id || item.local}
                    local={item.local}
                    image={item.image}
                    status={item.status_request}
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
              ))}
            </>
          ) : (
            <p className={styles.noRequestMsg}>REALIZE ALGUMA REQUISIÇÃO!</p>
          )}
        </motion.section>
        {request && (
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.about}>
              <div className={styles.buttons}>
                <button
                  className={styles.btnRemove}
                  onClick={() => handleDeleteRequest(request.id)}
                >
                  <IoTrashOutline fontSize={30} />
                </button>
                <button
                  className={styles.btnRemove}
                  onClick={() => setRequest(null)}
                >
                  X
                </button>
              </div>
              <h2 className={styles.title}>{request.title}</h2>
              <div className={styles.imageContainer}>
                <Image src={request.image} width={200} height={200} />
              </div>
              <p className={styles.details}>
                feito por: {request.email} em {format(request.date_request)}
              </p>
              <p className={styles.location}>{request.local}</p>
              <p className={styles.description}>{request.description}</p>
              <p className={styles.status}>
                {request.status_request.toUpperCase()}
              </p>
              {
                request.status_request === 'aguardando' &&
                <button onClick={() => changeStatus(request.id, 'awaiting')} >INICIAR SOLICITAÇÃO</button>
              }
              {
                request.status_request === 'em andamento' &&
                <button onClick={() => changeStatus(request.id, 'conclued')}>FINALIZAR SOLICITAÇÃO</button>
              }
              {
                request.status_request === 'concluida' &&
                <button onClick={() => changeStatus(request.id, 'awaiting')}>CORRIGIR SOLICITAÇÃO</button>
              }
              {request.status_request === "concluida" && (
                <p className={styles.dateConclusion}>
                  finalizada em: {format(request.date_conclusion)}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </article>
  );
}
