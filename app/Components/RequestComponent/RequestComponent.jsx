"use client";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/contexts/userContext";
import styles from "./requestComponent.module.css";
import Image from "next/image";
import { RiMenuSearchLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TailSpin } from "react-loader-spinner";
import RenderTest from "../RenderTest/renderTest";

export default function RequestComponent() {
  const { user } = useContext(UserContext);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dados = await getAllRequests();
        console.log("dados", dados);
        setApiData(dados.requests);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const teste = () => {
    console.log("chamando requisição");
  };

  return (
    <>
      <div className={styles.init}>
        <div>
          <Image
            src="/senaicerto.png"
            alt="Logo do Senai"
            width={200}
            height={200}
            className={styles.logo}
          />
        </div>
        <div>
          <CiSearch color="#000" size={30} />
        </div>
      </div>

      <div className={styles.requestButton}>
        <div className={styles.filter}>
          <RiMenuSearchLine color="#ff0000" size={30} />
        </div>
        <div>
          <button className={styles.buttonRequest} onClick={teste}>
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
      ) : apiData.length === 0 ? (
        <p className={styles.txtNoneRequest}>Nenhuma requisição encontrada</p>
      ) : (
        <>
          {apiData.map((item) => (
            <RenderTest
              key={item.id || item.local}
              local={item.local}
              desc={item.desc}
              autor={item.autor}
              status={item.status}
            />
          ))}
        </>
      )}
    </>
  );
}
