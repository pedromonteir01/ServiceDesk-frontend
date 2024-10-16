import { useContext, useEffect, useState } from 'react';
import styles from './userPage.module.css';
import { UserContext } from '@/app/contexts/userContext';

const UserPage = () => {
    const { user } = useContext(UserContext);

    const [email, setEmail] = useState(user.email);
    const [edit, setEdit] = useState(false);

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
            {
                user.isadmin ? (
                    <>
                        <p>Olá, admin!</p>
                    </>
                ) : (
                    <>
                        <section className={styles.info}>
                            <h2>SEJA BEM-VINDO, {user.name.split(' ')[0].toUpperCase()}!</h2>
                            <div className={styles.content}>
                                <label className={styles.labelfor}>Nome:</label>
                                <p className={styles.txt}>{user.name.toUpperCase()}</p>
                                <label className={styles.labelfor}>Email:</label>
                                <span className={styles.txt}>{email}</span>
                                <label className={styles.labelfor}>Função:</label>
                                <span className={styles.txt}>{user.isstudent ? 'Estudante' : 'Funcionário'}</span>
                                <button className={styles.button} onClick={
                                    edit ? () => setEdit(false) : () => setEdit(true)
                                }>{edit ? 'CANCELAR' : 'EDITAR'}</button>
                            </div>
                        </section>
                    </>
                )
            }
        </article>
    );
}

export default UserPage;
