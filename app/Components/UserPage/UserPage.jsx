import { use, useContext, useEffect, useState } from 'react';
import styles from './userPage.module.css';
import { UserContext } from '@/app/contexts/userContext';
import Table from '../Table/Table';
import { getUserByName } from '@/app/actions/users';

const UserPage = () => {
    const { user } = useContext(UserContext);

    const [email, setEmail] = useState(user.email);
    const [edit, setEdit] = useState(false);

    //para pesquisa
    const [name, setName] = useState('');

    //resposta para tabela
    const [response, setResponse] = useState([]);

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

    useEffect(() => {
        const fetchUsers = async () => {
            if (name.trim() !== '') {
                const result = await getUserByName(name);                
                const formattedResponse = result.users.map(user => ({
                    0: user.name,
                    1: user.email,
                    2: user.isstudent ? 'estudante' : 'funcionário',
                    3: user.isadmin ? 'administrador' : 'usuário'
                }));
            setResponse(formattedResponse);                
            }
        };
        
        fetchUsers();
    }, [name]);
    

    return (
        <article className={styles.container}>
            {
                user.isadmin ? (
                    <>
                    <section className={styles.filters}>
                        <h1>Olá, {user.name.toUpperCase()}! Seja bem-vindo!</h1>
                        <div className={styles.options}>
                            <div className={styles.search}>
                                <label htmlFor='name'>Nome: </label>
                                <input
                                name='name'
                                className={styles.inputSearch}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                    </section>
                    <section>
                        <Table atributtes={['nome', 'email', 'função', 'acessos']} content={response}/>
                    </section>
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
