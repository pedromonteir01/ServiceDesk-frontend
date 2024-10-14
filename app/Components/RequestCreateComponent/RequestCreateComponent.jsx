"use client";
import { useState } from "react";
import styles from "./requestCreateComponent.module.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { createRequest } from "@/app/actions/request";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

const RequestCreateComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const requestCreate = async (title, description, local, image) => {
    const date_request = new Date();

    if (!title || !description || !local || !image) {
      toast.error("PREENCHA TODOS OS CAMPOS");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("local", local);
    formData.append("image", image);
    formData.append("date_request", date_request.toISOString());

    try {
      const token = localStorage.getItem("usertoken");
      const response = await createRequest(formData, token);

      if (response.error) {
        // Aqui você pode lidar com o erro retornado pelo backend
        console.error("Server error:", response);
        toast.error(response.message || "Erro ao criar requisição");
        return;
      }

      toast.success("REQUISIÇÃO CRIADA");
      router.replace("/Request");
    } catch (error) {
      console.error("Client-side error:", error);
      toast.error("Erro ao criar requisição");
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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestCreate(title, description, local, image);
          }}
        >
          <label className={styles.label}>Assunto:</label>
          <input
            type="text"
            className={styles.titleInput}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className={styles.label}>O que aconteceu? Descreva</label>
          <textarea
            className={styles.descriptionInput}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className={styles.label}>Imagem</label>
          <div
            className={styles.imageUpload}
            onClick={() =>
              document.querySelector(`.${styles.fileInput}`).click()
            }
          >
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

          {image && (
            <div className={styles.previewContainer}>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Imagem Preview"
                  className={styles.imagePreview}
                />
              )}
              <p className={styles.fileName}>{image.name}</p>
            </div>
          )}

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
};

export default RequestCreateComponent;
