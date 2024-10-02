"use client";
import { useState } from "react";
import api from "./../../../config/configAPI.js";

export default function UploadImage() {
  const [image, setImage] = useState("");

  const uploadImage = async (e) => {
    e.preventDefault();
    console.log("uploadImage");
    const formData = new FormData();
    formData.append("image", image);

    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await api
      .post("/upload-image", formData, headers)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.reponse);
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
