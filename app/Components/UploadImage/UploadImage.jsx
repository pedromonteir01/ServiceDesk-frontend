"use client";
import { useState } from "react";
import api from "./../../../config/configAPI.js";

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
      <h1>Upload Image</h1>

      <form onSubmit={uploadImage}>
        <label>Upload Image</label>
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br></br>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
