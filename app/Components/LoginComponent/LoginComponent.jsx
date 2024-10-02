"use client";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { getUserByEmail } from "@/app/actions/users";
import { useRouter } from "next/navigation";
import style from "@/app/Login/login.module.css";

const LoginComponent = ({ setUser }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const login = async (email, password) => {
    const user = await getUserByEmail(email);
    console.log(user);

    if (user) {
      if (user.password === password) {
        setUser(user);
        router.replace("/");
      } else {
        handleError();
      }
    } else {
      handleError();
    }
  };

  const handleError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 5000);
    
  }

  return (
    <div className={style.loginContainer}>
      <article className={style.loginBox}>
        <h2 className={style.loginTitle}>Faça o Login</h2>


        <form onSubmit={(e) => {
          e.preventDefault();
          login(email, password);
        }}>
          <section className={style.inputField}>
            <label htmlFor="email" className={style.label}>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              className={style.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>

          <section className={style.inputField}>
            <label htmlFor="password" className={style.label}>Senha:</label>
            <input
              type="password"
              name="password"
              value={password}
              className={style.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>

          <div className={style.error}>
          {
            error && 
            <>
              <p style={{color: 'red', textTransform:'uppercase'}}>Erro!</p>
              <p style={{color: 'black'}}>Usuário ou senha estão incorretos</p>
            </>
          }
          </div>

          <section className={style.btnLogin}>
            <button className={style.btn}>ENTRAR</button>
          </section>
        </form>
      </article>
    </div>
  );
};

export default LoginComponent;
