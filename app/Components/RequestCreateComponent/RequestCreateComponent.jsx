"use client";
import { useState, useEffect, useContext } from "react";
import useMutation from "@/app/hooks/useMutation";
import useQuery from "@/app/hooks/useQuery";
import { UserContext } from "@/app/contexts/userContext";
import styles from "./requestCreateComponent.module.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { createRequest, getLocais } from "@/app/actions/request";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RequestCreateComponent = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [local, setLocal] = useState("");
  const [email, setEmail] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [locais, setLocais] = useState([]);
  const router = useRouter();
  const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
  const URL = '/images';
  const [refetch, setRefetch] = useState(0);

  const {
    mutate: uploadImage,
    isLoading: uploading,
    error: uploadError,
  } = useMutation({ url: URL });

  const {
    data: imageUrls = [],
    isLoading: imagesLoading,
    error: fetchError,
  } = useQuery(URL, refetch);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    } else {
      setEmail("");
    }
  }, [user]);

  useEffect(() => {
    const fetchLocais = async () => {
      const locaisData = await getLocais();
      if (Array.isArray(locaisData.locais)) {
        setLocais(locaisData.locais);
      } else {
        console.error("Dados de locais inválidos:", locaisData);
        toast.error("Erro ao carregar locais");
      }
    };

    fetchLocais();
  }, []);

  
  const handleUpload = async e => {
    const file = e.target.files[0];

    if (!validFileTypes.find(type => type === file.type)) {
      setError('File must be in JPG/PNG format');
      return;
    }
  }
  const requestCreate = async (title, description, local, image) => {
    const date_request = new Date().toISOString();
    const date_conclusion = new Date().toISOString();
    const status_request = "inconclued";

    if (!title || !description || !local || !image) {
      toast.error("PREENCHA TODOS OS CAMPOS");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("local", local);
    formData.append("status_request", status_request);
    formData.append("date_request", date_request);
    formData.append("date_conclusion", date_conclusion);
    formData.append("email", email);

    const formImage = new FormData();
    formImage.append("file", image);
    await uploadImage(formImage);

    try {
      const token = localStorage.getItem("usertoken");
      const response = await createRequest(formData, token, formImage);
      if (response.error) {
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
          onClick={() => document.querySelector(`.${styles.fileInput}`).click()}
        >
          <input
            type="file"
            name="image"
            onChange={handleUpload}
            className={styles.fileInput}
            accept="image/*"
          />
          <IoCloudDownloadOutline color="#000" fontSize={30} />
          <span>Inserir imagem</span>
        </div>

        {/* {image && (
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
        )} */}

        <label className={styles.label}>Qual foi o local?</label>
        <select
          className={styles.select}
          value={local}
          onChange={(e) => setLocal(e.target.value)}
        >
          <option value="">Selecione o ambiente</option>
          {locais.map((localItem) => (
            <option key={localItem.id} value={localItem.nome}>
              {localItem.nome}
            </option>
          ))}
        </select>

        <button className={styles.submitButton} 
        disabled={uploading}
        onClick={requestCreate}
        type="submit">
          Enviar
  
        </button>
      </form>
    </div>
  );
};

export default RequestCreateComponent;
