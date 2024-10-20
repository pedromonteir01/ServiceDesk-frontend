import { use, useContext, useEffect, useState } from 'react';
import styles from './userPage.module.css';
import { UserContext } from '@/app/contexts/userContext';
import Table from '../Table/Table';
import { getAllUsers, getUserByName, getUserByRole } from '@/app/actions/users';
import { getAllRequests } from '@/app/actions/request';

const UserPage = () => {
    const { user } = useContext(UserContext);

    const [email, setEmail] = useState(user.email);
    const [edit, setEdit] = useState(false);

    //para pesquisa
    const [typeSearch, setTypeSearch] = useState('user');
    const [name, setName] = useState('');
    const [optionSearch, setOptionSearch] = useState('name');
    const [option, setOption] = useState('');

    //resposta para tabela
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const showEmail = () => {
            let [localPart, domain] = email.split('@');
            let localChars = localPart.split('');
            for (let i = 3; i < localChars.length; i++) {
                localChars[i] = '*';
            }
            let response = localChars.join('') + '@' + domain;
            setEmail(response);
        };
        showEmail();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            let result;

            if (name.trim()) result = await getUserByName(name);
            else if (option.trim()) result = await getUserByRole(option);
            else result = await getAllUsers();

            setResponse(
                result.users.map(user => ({
                    0: user.name,
                    1: user.email,
                    2: user.isstudent ? 'estudante' : 'funcionário',
                    3: user.isadmin ? 'administrador' : 'usuário'
                }))
            );
        };

        const fetchReqs = async() => {
            let result;
            result = await getAllRequests();
            setResponse(result.requests);
        }

        typeSearch == 'user' ? fetchUsers() : fetchUsers();
    }, [name, option, typeSearch]);

    useEffect(() => {
        setName('');
        setOption('');
        setResponse([]);
    }, [optionSearch]);


    return (
        <article className={styles.container}>
            {
                user.isadmin ? (
                    <>
                        <section className={styles.filters}>
                            <h1>Olá, {user.name.toUpperCase()}! Seja bem-vindo!</h1>
                            <div className={styles.options}>
                                <div className={styles.search}>
                                    <h3>FILTRO:</h3>
                                    <div className={styles.typeSearch}>
                                        <label htmlFor='type'>Usuário: </label>
                                        <input
                                            name='type'
                                            type='radio'
                                            value='user'
                                            checked={typeSearch === 'user'}
                                            onChange={(e) => setTypeSearch(e.target.value)}
                                        />

                                        <label htmlFor='type'>Requisições: </label>
                                        <input
                                            name='type'
                                            type='radio'
                                            value='reqs'
                                            checked={typeSearch === 'reqs'}
                                            onChange={(e) => setTypeSearch(e.target.value)}
                                        />
                                    </div>
                                    {
                                        optionSearch == 'name' &&
                                        <>
                                            <label htmlFor='name'>Nome: </label>
                                            <input
                                                name='name'
                                                className={styles.inputSearch}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </>
                                    }
                                    {
                                        optionSearch == 'role' &&
                                        <>
                                            <label htmlFor="role">Função: </label>
                                            <select
                                                name="role"
                                                className={styles.inputSearch}
                                                value={option}
                                                onChange={(e) => setOption(e.target.value)}
                                            >
                                                <option value=''>Selecione...</option>
                                                <option value='student'>Estudantes</option>
                                                <option value='educator'>Funcionários</option>
                                            </select>
                                        </>
                                    }
                                </div>
                                <div className={styles.choice}>
                                    <label htmlFor="choice">Por nome:</label>
                                    <input
                                        name='choice'
                                        type='radio'
                                        value='name'
                                        checked={optionSearch === 'name'}
                                        onChange={(e) => setOptionSearch(e.target.value)}
                                    />
                                    <label htmlFor="choice">Por Função:</label>
                                    <input
                                        name='choice'
                                        type='radio'
                                        value='role'
                                        checked={optionSearch === 'role'}
                                        onChange={(e) => setOptionSearch(e.target.value)}
                                    />
                                </div>
                            </div>
                        </section>
                        <section className={styles.table}>
                            <Table atributtes={['nome', 'email', 'função', 'acessos']} content={response} />
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
