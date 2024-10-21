"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/contexts/userContext";
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
import TestePedro from "../TestePedro/testePedro";

export default function RequestComponent() {
  const { user } = useContext(UserContext);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterLocal, setFilterLocal] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dados = await getAllRequests();
        if (Array.isArray(dados.requests.requests)) {
          setApiData(dados.requests.requests);
        } else {
          setApiData([]);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteRequest = async (id) => {
    try {
      await deleteRequest(id);
      setApiData(apiData.filter((request) => request.id !== id));
    } catch (error) {
      console.error("Erro ao deletar requisição:", error);
    }
  };

  const handleUpdateRequestStatus = async (id, newStatus) => {
    try {
      await updateRequest(id, { status_request: newStatus });
      setApiData(
        apiData.map((request) =>
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

  const handleFilterByLocal = async (local) => {
    try {
      setLoading(true);
      const filteredRequests = await getRequestByLocal(local);

      if (filteredRequests.requests) {
        setApiData(filteredRequests.requests);
      } else {
        setApiData([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Erro ao filtrar requisições por local:", error);
      setLoading(false);
    }
    setShowDropdown(false);
  };

  const sortedApiData = apiData.sort((a, b) => {
    return (a.status_request ? 1 : 0) - (b.status_request ? 1 : 0);
  });

  return (
    <div className="fullsize">
      <div className={styles.init}>
        {apiData.length > 0 && (
          <div className={styles.context}>
            <TestePedro context={"Context"} label={"Teste"} value={"7"} />
          </div>
        )}
        <div>
          <CiSearch color="#000" size={30} />
        </div>
      </div>

      <div className={styles.requestButton}>
        <div className={styles.filter}>
          <IoListOutline
            color="#ff0000"
            fontSize={30}
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className={styles.dropdown}>
              <select
                value={filterLocal}
                onChange={(e) => {
                  setFilterLocal(e.target.value);
                  handleFilterByLocal(e.target.value);
                }}
                className={styles.selectFilter}
              >
                <option value="">Todos</option>
                <option value="Sala 1">Sala 1</option>
                <option value="Sala 2">Sala 2</option>
                <option value="Biblioteca">Biblioteca</option>
              </select>
            </div>
          )}
        </div>
        <div>
          <button
            className={styles.buttonRequest}
            onClick={handleRequestCreate}
          >
            Adicionar Requisição
          </button>
        </div>
      </div>

      {loading ? (
        <div className={styles.loading}>
          <TailSpin
            height="80"
            width="80"
            color="#ff0000"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
          />
        </div>
      ) : sortedApiData.length === 0 ? (
        <div className={styles.errorTxtDiv}>
          {
            toast.error("Nenhuma requisição encontrada", {
              duration: 3000,
            })
          }
        </div>
      ) : (
        <>
          {sortedApiData.map((item) => (
            <RenderTest
              key={item.id || item.local}
              local={item.local}
              desc={item.description}
              autor={item.email}
              status={item.status_request ? "CONCLUIDO" : "PENDENTE"}
              onRemove={() => handleDeleteRequest(item.id)}
              onEdit={() => console.log("Editar não implementado ainda")}
              onStatusChange={() =>
                handleUpdateRequestStatus(item.id, !item.status_request)
              }
            />
          ))}
        </>
      )}
    </div>
  );
}
