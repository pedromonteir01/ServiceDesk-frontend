'use client';
import { useContext } from 'react';
import styles from './userPage.module.css'
import { UserContext } from '@/app/contexts/userContext';

const UserPage = () => {

    const { user } = useContext(UserContext);

    return (
        <article className={styles.container}>
            <h1>Olá, {user.name}! Seja bem-vindo</h1>
        </article>
    );
}

export default UserPage;