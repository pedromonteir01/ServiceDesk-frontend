"use client";
import { useState } from "react";
import api from "./../../../config/configAPI.js";
import styles from "./updloadImage.module.css";

import { IoCloudDownloadOutline } from "react-icons/io5";

export default function UploadImage() {
  const [image, setImage] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const uploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    await api
      .post("/upload-image", formData)
      .then((response) => {
        console.log(response);
        setStatus({
          type: "success",
          message: response.data.message,
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.reponse);
          setStatus({
            type: "error",
            message: err.response.data.message,
          });
        } else {
          console.log("Erro: Tente Mais Tarde");
        }
      });
  };
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={uploadImage}>
          <label className={styles.label}>Upload Image</label>
          <div className={styles.imagemUpload}>
            <input
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              className={styles.fileInput}
            />
          </div>
          <br></br>

          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
