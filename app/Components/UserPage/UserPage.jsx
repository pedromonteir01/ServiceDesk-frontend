'use client';
import { useContext, useEffect, useState } from 'react';
import styles from './userPage.module.css'
import { UserContext } from '@/app/contexts/userContext';

const UserPage = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    const [email, setEmail] = useState(user.email);

    const showEmail = () => {
        let [localPart, domain] = email.split('@');
    
        let localChars = localPart.split('');
    
        for (let i = 3; i < localChars.length; i++) {
            localChars[i] = '*';
        }
    
        let response = localChars.join('') + '@' + domain;    
        setEmail(response);
    };
    

    useEffect(() => {
        showEmail();
    }, []);

    return (
        <article className={styles.container}>
                {/* Imagem senai */}
            <section className={styles.info}>
                <h2>SEJA BEM-VINDO, {user.name.split(' ')[0].toUpperCase()}!</h2>
                <div className={styles.content}>
                    <p className={styles.txt}>Nome: {user.name}</p>
                    <span className={styles.txt}>Email: {email}</span>
                    <span className={styles.txt}>Função: {user.isstudent ? 'estudante' : 'funcionário'}</span>
                </div>
            </section>
        </article>
    );
}

export default UserPage;