"use client";
import { useEffect, useState, useCallback } from "react";
import styles from "./requestComponent.module.css";
import { IoListOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import RenderTest from "../RenderTest/renderTest";
import {
  getAllRequests,
  deleteRequest,
  updateRequest,
  getRequestByLocal,
} from "@/app/actions/request";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RequestComponent() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("");
  const router = useRouter();

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
  /*
    const handleFilterRequests = async (local) => {
      setLoading(true);
      try {
        const filteredData = local
          ? await getRequestByLocal(local)
          : await getAllRequests();
        setRequests(filteredData.requests || []);
      } catch (error) {
        console.error("Erro ao filtrar requisições:", error);
      } finally {
        setLoading(false);
      }
    }; 
  */
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
    }
    fetchRequests();
  }, []);
  /*
    useEffect(() => {
      handleFilterRequests(filterValue);
    }, [filterValue]); */

  const sortedRequests = [...requests].sort(
    (a, b) => (a.status_request ? 1 : 0) - (b.status_request ? 1 : 0)
  );

  return (
    <article className={styles.container}>
      <section className={styles.filters}>
        <h1 className={styles.h1}>Gestão de Requisições</h1>
      </section>

      <section className={styles.requestButton}>
        <button className={styles.buttonRequest} onClick={handleRequestCreate}>
          Adicionar Requisição
        </button>
      </section>


      <section className={styles.table}>
        {loading ? (
          <div className={styles.loading}>
            <TailSpin
              height="80"
              width="80"
              color="#ff0000"
              ariaLabel="tail-spin-loading"
            />
          </div>
        ) : sortedRequests.length !== 0 ?
            sortedRequests.map((item) => (
              <RenderTest
                key={item.id || item.local}
                local={item.local}
                desc={item.description}
                autor={item.email}
                image={item.image}
                status={item.status_request ? "CONCLUIDO" : "PENDENTE"}
                onRemove={() => handleDeleteRequest(item.id)}
                onEdit={() => console.log("Editar não implementado ainda")}
                onStatusChange={() =>
                  handleUpdateRequestStatus(item.id, !item.status_request)
                }
              />
            ))
            : 
              <p style={{ fontSize: 25, margin: 5 }}>REALIZE ALGUMA REQUISIÇÃO!</p>
        }
      </section>
    </article>
  );
}
