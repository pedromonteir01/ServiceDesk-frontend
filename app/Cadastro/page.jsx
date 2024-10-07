"use client";
import { useState, useContext } from "react";
import style from "./cadastro.module.css";
import axios from "axios";
import Image from "next/image";
import Footer from "../Components/Footer/Footer";

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
    <main>
      <div className={style.loginContainer}>
        {/* Cadastro */}
        <article className={style.loginBox}>
          <section>
            <Image src="/logoSesi.svg" alt="Logo" width={280} height={80} />
            <h2 className={style.loginTitle}>Crie sua conta para acessar</h2>
          </section>

          {/* input field */}
          <section className={style.inputField}>
            <label htmlFor="name" className={style.label}>
              Nome:{" "}
            </label>
            <input type="text" name="Nome" className={style.input} />
          </section>

          {/* input field */}
          <section className={style.inputField}>
            <label htmlFor="email" className={style.label}>
              Email educacional:{" "}
            </label>
            <input type="text" name="email" className={style.input} />
          </section>

          {/* input field */}
          <section className={style.inputField}>
            <label htmlFor="password" className={style.label}>
              Senha:{" "}
            </label>
            <input type="text" name="password" className={style.input} />
          </section>

          {/* input field */}
          <section className={style.inputField}>
            <label htmlFor="password" className={style.label}>
              Confirmar senha:{" "}
            </label>
            <input
              type="text"
              name="password"
              value={confirmarSenha}
              className={style.input}
            />
          </section>

          <section className={style.btnLogin}>
            <button className={style.btn}>ENTRAR</button>
          </section>
        </article>
      </div>
      <Footer />
    </main>
  );
}
