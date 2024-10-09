"use client";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { getUserByEmail, loginInAPI } from "@/app/actions/users";
import { useRouter } from "next/navigation";
import style from "@/app/Login/login.module.css";
import toast from "react-hot-toast";

const LoginComponent = ({ setUser }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    const response = await loginInAPI({ email: email, password: password });
    if (response.user) {
        localStorage.setItem('usertoken', response.refreshToken);
        console.log(response.refreshToken);
        console.log(response.accessToken);
        setUser(response.user);
        let useName = response.user.name.split(' ');
        toast.success(`SEJA BEM-VINDO, ${useName[0].toUpperCase()}`);
        router.replace('/');
    } else {
      toast.error("USUÁRIO OU SENHA INCORRETOS");
    }
  };

  return (
    <div className={style.loginContainer}>
      <article className={style.loginBox}>
        <h2 className={style.loginTitle}>Faça o Login</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(email, password);
          }}
        >
          <section className={style.inputField}>
            <label htmlFor="email" className={style.label}>
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className={style.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>

          <section className={style.inputField}>
            <label htmlFor="password" className={style.label}>
              Senha:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className={style.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>

          <section className={style.btnLogin}>
            <button className={style.btn}>ENTRAR</button>
          </section>
        </form>
      </article>
    </div>
  );
};

export default LoginComponent;
