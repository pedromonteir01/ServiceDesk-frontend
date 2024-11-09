"use client";
import { useContext, useState } from "react";
import { loginInAPI } from "@/app/actions/users";
import { useRouter } from "next/navigation";
import style from "@/app/Login/login.module.css";
import toast from "react-hot-toast";
import { UserContext } from "@/app/contexts/userContext";
import { motion } from "framer-motion";

const LoginComponent = () => {
  const { setUser, setAccessToken, setRefreshToken } = useContext(UserContext);
  
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email, password) => {
    const response = await loginInAPI({ email, password });
    if (response.user) {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      setAccessToken(response.accessToken);
      setRefreshToken(response.refreshToken);
      setUser(response.user);

      let useName = response.user.name.split(' ');
      toast.success(`SEJA BEM-VINDO, ${useName[0].toUpperCase()}`);
      router.replace('/');
    } else {
      console.log(response);
      toast.error(response.error.toUpperCase());
    }
  };

  return (
    <div className={style.loginContainer}>
      <motion.article
        className={style.loginBox}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h2
          className={style.loginTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Faça o Login
        </motion.h2>
  
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
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
            <motion.button
              className={style.btn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ENTRAR
            </motion.button>
          </section>
        </motion.form>
      </motion.article>
    </div>
  );
};

export default LoginComponent;
