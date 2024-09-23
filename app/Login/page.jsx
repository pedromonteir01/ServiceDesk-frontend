import { useState, useContext } from "react";
import { UserContext } from "../contexts/userContext";
import style from './login.module.css'

export default function Login() {

    const { user, setUser } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

                        { /* input field */ }
                        <section>
                            <label htmlFor="email">Email: </label>
                            <input 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </section>
                    </article>
                )   
            }
        </main>
    );
}