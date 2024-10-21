"use client";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import styles from "../../Register/register.module.css";
import { createUser } from "@/app/actions/users";
import toast from "react-hot-toast";
import { UserContext } from "@/app/contexts/userContext";

const RegisterComponent = () => {
  const router = useRouter();

  const { user } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState("user");
  const [isStudent, setIsStudent] = useState("student");

  const signUp = async (name, email, password, confirm, isAdmin, isStudent) => {
    if (!name || !email || !password) {
      toast.error("DADOS INCOMPLETOS");
    } else if (confirm !== password) {
      toast.error("SENHAS DISCREPANTES");
    } else {
      const response = await createUser({
        name: name.toLowerCase(),
        email: email,
        password: password,
        isAdmin: isAdmin,
        isStudent: isStudent,
      });
      if (response.errors) {
        for (let i = 0; i < response.errors.length; i++) {
          toast.error(response.errors[i].split("_").join(" ").toUpperCase());
        }
      } else {
        
        if(response.error) {
            toast.error(response.error.toUpperCase());
            return false;
        }
        toast.success("USUÁRIO CADASTRADO");
        user && user.isadmin ? clearFields() : router.replace("/Login");
      }
    }
  };

  const clearFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsAdmin('');
    setIsStudent('');
  }

  return (
    <div className={styles.container}>
      <article className={styles.loginBox}>
        <h2 className={styles.loginTitle}>CADASTRE-SE</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUp(name, email, password, confirmPassword, isAdmin, isStudent);
          }}
        >
          <section className={styles.inputField}>
            <label htmlFor="name" className={styles.label}>
              Nome:
            </label>
            <input
              type="text"
              name="name"
              value={name}
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
            />
          </section>

          <section className={styles.inputField}>
            <label htmlFor="email" className={styles.label}>
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={email}
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </section>

          <section className={styles.inputField}>
            <label htmlFor="password" className={styles.label}>
              Senha:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>

          <section className={styles.inputField}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirmar senha:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              className={styles.input}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </section>

          {/* Exibe os selects apenas se o usuário atual for um administrador */}
          {user && user.isadmin ? (
            <>
              <section className={styles.inputField}>
                <label htmlFor="isAdmin" className={styles.label}>
                  É administrador?
                </label>
                <select
                  name="isAdmin"
                  value={isAdmin}
                  className={styles.input}
                  onChange={(e) => setIsAdmin(e.target.value === "true")}
                >
                  <option value="admin">Sim</option>
                  <option value="user">Não</option>
                </select>
              </section>

              <section className={styles.inputField}>
                <label htmlFor="isStudent" className={styles.label}>
                  É aluno?
                </label>
                <select
                  name="isStudent"
                  value={isStudent}
                  className={styles.input}
                  onChange={(e) => setIsStudent(e.target.value === "true")}
                >
                  <option value="student">Sim</option>
                  <option value="educator">Não</option>
                </select>
              </section>
            </>
          ) : null}

          <section className={styles.btnLogin}>
            <button className={styles.btn}>CADASTRAR</button>
          </section>
        </form>
      </article>
    </div>
    //criando comentario para aparecer a branch e ser mergeada
  );
};

export default RegisterComponent;
