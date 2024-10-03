"use client";
import { useState } from "react";
import styles from "./requestCreateComponent.module.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { createRequest } from "@/app/actions/request";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RequestCreateComponent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("");
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("local", local);
    if (image) {
      formData.append("image", image);
    }
    formData.append("status_request", "inconclued");
    formData.append("date_request", new Date().toISOString());

    const result = await createRequest(formData);

    if (result.error) {
      setErrorMessage(result.message);
      setSuccessMessage("");
    } else {
      setSuccessMessage(result.message);
      setErrorMessage("");
      setTitle("");
      setDescription("");
      setLocal("");
      setImage(null);

      router.push("/RequestComponent");
    }
  };

  return (
    <>
      <Image
        src="/senaicerto.png"
        alt="Logo do Senai"
        width={200}
        height={200}
        className={styles.logo}
      />
      <div className={styles.main}>
        <h1 className={styles.title}>
          Relate aqui seu <span className={styles.problemText}>problema</span>
        </h1>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        {successMessage && (
          <div className={styles.success}>{successMessage}</div>
        )}

        <form onSubmit={handleSubmit}>
          <label className={styles.label}>O que aconteceu? Descreva</label>
          <textarea
            className={styles.descriptionInput}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className={styles.label}>Imagem</label>
          <div className={styles.imageUpload} onClick={() => document.querySelector(`.${styles.fileInput}`).click()}>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className={styles.fileInput}
              accept="image/*"
            />
            <IoCloudDownloadOutline color="#000" fontSize={30} />
            <span>Inserir imagem</span>
          </div>
          <p className={styles.imageHint}>
            Tire uma foto para facilitar a localização
          </p>

          <label className={styles.label}>Qual foi o local?</label>
          <select
            className={styles.select}
            value={local}
            onChange={(e) => setLocal(e.target.value)}
          >
            <option value="">Selecione o ambiente</option>
            <option value="sala1">Sala 1</option>
            <option value="sala2">Sala 2</option>
            <option value="laboratorio">Laboratório</option>
          </select>

          <button className={styles.submitButton}>Criar Requisição</button>
        </form>
      </div>
    </>
  );
}
