import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './userPage.module.css';
import { UserContext } from '@/app/contexts/userContext';
import { compare, getUserByEmail, updateUser } from '@/app/actions/users';
import Modal from '../Modal/Modal';
import ChangePassword from '../ChangePassword/ChangePassword';

const UserPage = () => {
    const { user, setUser } = useContext(UserContext);

    const router = useRouter();

    const [email, setEmail] = useState(user.email);
    const [edit, setEdit] = useState(false);

    const [name, setName] = useState(user.name);

    useEffect(() => {
        const showEmail = () => {
            let [localPart, domain] = email.split('@');
            let localChars = localPart.split('');
            for (let i = 3; i < localChars.length; i++) {
                localChars[i] = '*';
            }
            let response = localChars.join('') + '@' + domain;
            setEmail(response);
        }
        showEmail();
    }, []);

    useEffect(() => {
        setName(user.name.toUpperCase());
    }, [edit]);

    const confirm = async () => {
        try {
            const find = await getUserByEmail(user.email);
            await updateUser(user, user.email);
            if (await compare(password, find.password)) {
                setUser(null);
                localStorage.clear();
            } else {

            }
        } catch (e) {
            console.log('Server error');
        }
    }

    const logoff = () => {
        setUser(null);
        localStorage.clear();
        router.replace('/');
    }

    return (
        <article className={styles.container}>
            <section className={styles.info}>
                <div className={styles.content}>
                    <h2>SEJA BEM-VINDO, {user.name.split(' ')[0].toUpperCase()}!</h2>
                    <label className={styles.labelfor}>Nome:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        readOnly
                        className={styles.inputUser}
                    />

                    <label className={styles.labelfor}>Senha:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        readOnly
                        className={styles.inputUser}
                    />
                    <button className={styles.button} onClick={() => setEdit(true)}>Editar</button>
                </div>

            </section>
            {
                edit &&
                <Modal isOpen={edit} closeModal={() => setEdit(false)}>
                    <ChangePassword />
                </Modal>
            }
        </article>
    );
}

export default UserPage;
