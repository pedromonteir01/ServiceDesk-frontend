'use client';
import styles from './userPage.module.css'

const UserPage = ({ user }) => {

    const { name, email, password, isAdmin, isStudent } = user;

    return (
        <article className={styles.container}>
            <h1>Olá, {name}! Seja bem-vindo</h1>
        </article>
    );
}

export default UserPage;