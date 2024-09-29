'use client';
import { useState } from "react";
import { getUserByEmail } from "@/app/actions/users";
import { useRouter } from "next/navigation";
import style from '@/app/Login/login.module.css';

const LoginComponent = ({ setUser }) => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (email, password) => {
    const user = await getUserByEmail(email);
    console.log(user);

    if (user) {
      if (user.password === password) {
        setUser(user);
        router.replace('/');
      }
    }
  };

  return (
    <div className={style.loginContainer}>
      <article className={style.loginBox}>
        <h2 className={style.loginTitle}>Faça o Login</h2>

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

        <section className={style.btnLogin}>
          <button className={style.btn} onClick={() => login(email, password)}>ENTRAR</button>
        </section>
      </article>
    </div>
  );
};

export default LoginComponent;
