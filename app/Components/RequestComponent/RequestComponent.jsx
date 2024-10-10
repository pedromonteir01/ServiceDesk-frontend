"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/contexts/userContext";
import styles from "./requestComponent.module.css";
import Image from "next/image";
import { RiMenuSearchLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TailSpin } from "react-loader-spinner";
import RenderTest from "../RenderTest/renderTest";
import {
  getAllRequests,
  deleteRequest,
  updateRequest,
} from "@/app/actions/request"; // Importa delete e update
import { getAllReqsWithLocals } from "@/app/actions/data";
import { useRouter } from "next/navigation";
import TestePedro from "../TestePedro/testePedro";

export default function RequestComponent() {
  const { user } = useContext(UserContext);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locals, setLocals] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dados = await getAllRequests();
        console.log("dados", dados.requests.requests);
        if (Array.isArray(dados.requests.requests)) {
          setApiData(dados.requests.requests);
        } else {
          setApiData([]);
        }
        setLocals(await getAllReqsWithLocals());

        console.log(locals);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Função para deletar requisição
  const handleDeleteRequest = async (id) => {
    try {
      await deleteRequest(id); // Chama a função deleteRequest
      setApiData(apiData.filter((request) => request.id !== id)); // Remove a requisição do estado
    } catch (error) {
      console.error("Erro ao deletar requisição:", error);
    }
  };

  // Função para atualizar status de requisição
  const handleUpdateRequest = async (id, newStatus) => {
    try {
      await updateRequest(id, { status_request: newStatus }); // Chama a função updateRequest com o novo status
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

  function handleMoreReq(array) {
    if (locals.length === 0) {
      return "Nenhum local encontrado";
    }

    let element = locals[0]?.quantity;
    for (let i = 1; i < locals.length; i++) {
      let other = locals[i];
      if (element < other.quantity) {
        element = other.quantity;
      }
    }
    return element;
  }

  const sortedApiData = apiData.sort((a, b) => {
    return (a.status_request ? 1 : 0) - (b.status_request ? 1 : 0);
  });

  return (
    <div className="fullsize">
      <div className={styles.init}>
        <div>
          <Image
            src="/senaicerto.png"
            alt="Logo do Senai"
            width={170}
            height={170}
            className={styles.logo}
          />
        </div>

        <div className={styles.context}>
          <TestePedro context={"Context"} label={"Teste"} value={"7"} />
        </div>

        {user && user.isadmin && sortedApiData && (
          <div className={styles.data}>
            <p>{handleMoreReq(locals)}!!!!!!!!!</p>
          </div>
        )}
        {console.log(locals)}
        <div>
          <CiSearch color="#000" size={30} />
        </div>
      </div>

      <div className={styles.requestButton}>
        <div className={styles.filter}>
          <RiMenuSearchLine color="#ff0000" size={30} />
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
        <p className={styles.txtNoneRequest}>
          Nenhuma requisição encontrada!!!
        </p>
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
              onEdit={() => handleUpdateRequest(item.id, !item.status_request)}
            />
          ))}
        </>
      )}
    </div>
  );
}
