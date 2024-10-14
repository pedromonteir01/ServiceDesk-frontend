import { useContext, useEffect, useState } from 'react';
import styles from './userPage.module.css';
import { UserContext } from '@/app/contexts/userContext';
import gravatarUrl from 'gravatar-url'; // Importando a função do Gravatar

const UserPage = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    const [email, setEmail] = useState(user.email);
    const [avatarUrl, setAvatarUrl] = useState(''); // Estado para armazenar a URL da imagem

    const showEmail = () => {
        let [localPart, domain] = email.split('@');
        let localChars = localPart.split('');
        for (let i = 3; i < localChars.length; i++) {
            localChars[i] = '*';
        }
        let response = localChars.join('') + '@' + domain;
        setEmail(response);
    };

    const getGravatarImage = () => {
        const url = gravatarUrl(user.email, { size: 200, default: 'retro' });
        setAvatarUrl(url); 
    };

    useEffect(() => {
        showEmail();
        getGravatarImage();
    }, []);

    return (
        <article className={styles.container}>
            <section className={styles.info}>
                <img src={avatarUrl} alt="Avatar do usuário" className={styles.avatar} />
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
