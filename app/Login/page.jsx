import { useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";
import style from './login.module.css'

export default function Login() {

    const { user, setUser } = useContext(UserContext);

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
                    </article>
                )   
            }
        </main>
    );
}