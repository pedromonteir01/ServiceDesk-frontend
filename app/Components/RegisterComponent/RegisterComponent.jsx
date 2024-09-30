'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../Register/register.module.css'

const RegisterComponent = () => {

    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <article className={styles.loginBox}>

            <h2 className={styles.loginTitle}>Faça o Login</h2>

            <form onSubmit={(e) => {
                e.preventDefault();
            }}>

                <section className={styles.inputField}>
                    <label htmlFor="name" className={styles.label}>Nome:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className={styles.input}
                        onChange={(e) => setName(e.target.value)}
                    />
                </section>

                <section className={styles.inputField}>
                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        className={styles.input}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </section>

                <section className={styles.inputField}>
                    <label htmlFor="password" className={styles.label}>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        className={styles.input}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </section>

                <section className={styles.btnLogin}>
                    <button className={styles.btn}>CADASTRAR</button>
                </section>
            </form>

        </article>
    );
}

export default RegisterComponent;