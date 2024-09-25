'use client';
import { useState } from "react";
import { getUserByEmail } from "@/app/actions/users";
import { useRouter } from "next/navigation";
import style from '@/app/Login/login.module.css'

const LoginComponent = ({ setUser }) => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async(email, password) => {
        const user = await getUserByEmail(email);
        console.log(user);
        
        if(user) {
           if(user.password == password) {
            setUser(user)
            router.replace('/');
           }
        } 
    }

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
                <button className={style.btn} onClick={() => login(email, password)}>ENTRAR</button>
            </section>

        </article>
    )
}

export default LoginComponent;