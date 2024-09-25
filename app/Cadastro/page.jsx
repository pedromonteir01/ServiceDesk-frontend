"use client";
import { useState, useContext } from "react";
import style from "./cadastro.module.css";
import axios from "axios";
import Image from "next/image";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const register = async () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(process.env.URL + "/users", {
        nome,
        email,
        password,
      });
      if (response.data) {
        console.log("User registered successfully");
        setUser(response.data);
      } else {
        console.log("Registration failed");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <main className={style.main}>
      {/* Cadastro */}
      <article >
        <section className={style.alignCenter}>
            <Image src="/logoSesi.svg" alt="Logo" width={280} height={80} />
          <h2>Crie sua conta para acessar</h2>
        </section>

        {/* input field */}
        <section className={style.inputField}>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="Nome" />
        </section>

        {/* input field */}
        <section className={style.inputField}>
          <label htmlFor="email">Email educacional: </label>
          <input type="text" name="email" />
        </section>

        {/* input field */}
        <section className={style.inputField}>
          <label htmlFor="password">Senha: </label>
          <input type="text" name="password" />
        </section>

        <section className={style.inputField}>
          <label htmlFor="password">Confirmar senha: </label>
          <input type="text" name="password" value={confirmarSenha} />
        </section>

        <section className={style.btnLogin}>
          <button className={style.btn}>ENTRAR</button>
        </section>
      </article>
    </main>
  );
}
