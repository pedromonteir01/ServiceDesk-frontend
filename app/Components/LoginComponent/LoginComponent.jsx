'use client';
import { UserContext } from "@/app/contexts/userContext";
import { useState, useEffect, useContext } from "react";

const LoginComponent = () => {

    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <article>
            { /* login */}

            <h2>Faça o Login</h2>

            { /* input field */}
            <section className={style.inputField}>
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </section>

            { /* input field */}
            <section className={style.inputField}>
                <label htmlFor="password">Senha: </label>
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </section>

            <section className={style.btnLogin}>
                <button className={style.btn} onClick={login}>ENTRAR</button>
            </section>

        </article>
    )
}

export default LoginComponent;