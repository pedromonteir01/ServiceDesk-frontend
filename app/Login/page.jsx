'use client'
import { useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";
import style from './login.module.css'
import axios from "axios";

export default function Login() {

    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async() => {
        console.log('test');
        
        try {
            const response = await axios.get(process.env.URL + `/users/${email}`);
            if(response.data) {
                console.log(response.data);
                
            } else {
               console.log('user doesnt exist');
            }
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <main className={style.container}>
            {
                user ? (
                    <article>
                        <p>logged</p>
                    </article>
                ) : (
                    <article>
                        { /* login */ }

                        <h2>Faça o Login</h2>

                        { /* input field */ }
                        <section className={style.inputField}>
                            <label htmlFor="email">Email: </label>
                            <input 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </section>

                        { /* input field */ }
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
                            <button className={style.btn} onClick={() => login()}>ENTRAR</button>
                        </section>

                    </article>
                )   
            }
        </main>
    );
}