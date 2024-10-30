import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './userPage.module.css';
import { UserContext } from '@/app/contexts/userContext';
import Table from '../Table/Table';
import { getAllUsers, getUserByName, getUserByRole } from '@/app/actions/users';
import { getAllRequests, getRequestByStatus, getRequestsByName } from '@/app/actions/request';
import { getAllReqsWithLocals } from '@/app/actions/data';
import format from '@/app/utilities/formattedDate';

const UserPage = () => {
    const { user, setUser } = useContext(UserContext);

    const router = useRouter();

    const [email, setEmail] = useState(user.email);
    const [edit, setEdit] = useState(false);

    //para pesquisa
    const [typeSearch, setTypeSearch] = useState('user');
    const [name, setName] = useState('');
    const [optionSearch, setOptionSearch] = useState('name');
    const [option, setOption] = useState('');
    const [creation, setCreation] = useState('');
    const [finish, setFinish] = useState('');
    const [byUser, setByUser] = useState('');

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
            else if (option != '') result = await getUserByRole(option);
            else result = await getAllUsers();

            setResponse(
                result.users.map(user => ({
                    0: user.name,
                    1: user.email,
                    2: user.isstudent ? 'estudante' : 'funcionário',
                    3: user.isadmin ? 'administrador' : 'usuário'
                }))
            );
        }

        const fetchReqs = async () => {
            let result;
            if (name.trim()) result = await getRequestsByName(name);
            else if (optionSearch == 'local') result = await getAllReqsWithLocals(option);
            else if (optionSearch == 'status') result = await getRequestByStatus(option);
            else result = await getAllRequests();

            setResponse(
                result.requests.map(request => ({
                    0: request.title,
                    1: request.local,
                    2: request.status ? 'Concluído' : 'Em andamento',
                    3: format(request.date_request),
                    4: format(request.date_conclusion),
                    5: request.email
                }))
            );
        }

        typeSearch == 'user' ? fetchUsers() : fetchReqs();
    }, [name, byUser, option, typeSearch]);

    useEffect(() => {
        setName('');
    }, [optionSearch]);

    useEffect(() => {
        setResponse([]);
        setOptionSearch('name');
        setName('');
    }, [typeSearch]);

  const logoff = () => {
    setUser(null);
    localStorage.clear();
    router.replace('/');
  }

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
                                            <label htmlFor='name'>{typeSearch == 'user' ? 'Nome: ' : 'Título: '}</label>
                                            <input
                                                name='name'
                                                className={styles.inputSearch}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </>
                                    }
                                    {
                                        typeSearch == 'user' ? (

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

                                        ) : (
                                            <>
                                                {
                                                    optionSearch == 'local' &&
                                                    <>

                                                        <label htmlFor="choice">Por local:</label>
                                                        <select
                                                            name="choice"
                                                            className={styles.inputSearch}
                                                            value={option}
                                                            onChange={(e) => setOption(e.target.value)}
                                                        >
                                                            <option value=''>Selecione...</option>
                                                            <option value='teste1'>Sala 1</option>
                                                            <option value='teste2'>Sala 2</option>
                                                        </select>
                                                    </>
                                                }
                                                {
                                                    optionSearch == 'status' &&
                                                    <>

                                                        <label htmlFor="choice">Qual o status:</label>
                                                        <select
                                                            name="choice"
                                                            className={styles.inputSearch}
                                                            value={option}
                                                            onChange={(e) => setOption(e.target.value)}
                                                        >
                                                            <option value=''>Selecione...</option>
                                                            <option value='inconclued'>Concluído</option>
                                                            <option value='conclued'>Aguardando manutenção</option>
                                                        </select>
                                                    </>
                                                }
                                                {
                                                    optionSearch == 'create' &&
                                                    <>
                                                        <label htmlFor='create-date'>Data de criação: </label>
                                                        <input
                                                            name='create-date'
                                                            type='date'
                                                            className={styles.inputSearch}
                                                            value={creation}
                                                            onChange={(e) => setCreation(e.target.value)}
                                                        />
                                                    </>
                                                }
                                                {
                                                    optionSearch == 'finish' &&
                                                    <>
                                                        <label htmlFor='finish-date'>Data de finalização: </label>
                                                        <input
                                                            name='finish-date'
                                                            type='date'
                                                            className={styles.inputSearch}
                                                            value={finish}
                                                            onChange={(e) => setFinish(e.target.value)}
                                                        />
                                                    </>
                                                }
                                            </>
                                        )
                                    }
                                </div>
                                <div className={styles.choice}>
                                    <label htmlFor="choice">{typeSearch == 'user' ? 'Por nome: ' : 'Por título: '}</label>
                                    <input
                                        name='choice'
                                        type='radio'
                                        value='name'
                                        checked={optionSearch === 'name'}
                                        onChange={(e) => setOptionSearch(e.target.value)}
                                    />
                                    {
                                        typeSearch == 'user' ? (
                                            <>
                                                <label   htmlFor="choice">Por Função:</label>
                                                <input
                                                    name='choice'
                                                    type='radio'
                                                    value='role'
                                                    checked={optionSearch === 'role'}
                                                    onChange={(e) => setOptionSearch(e.target.value)}
                                                />
                                            </>
                                        ) :
                                            (
                                                <>
                                                    <label htmlFor="choice">Por local:</label>
                                                    <input
                                                        name='choice'
                                                        type='radio'
                                                        value='local'
                                                        checked={optionSearch === 'local'}
                                                        onChange={(e) => setOptionSearch(e.target.value)}
                                                    />
                                                    <label htmlFor="choice">Por status:</label>
                                                    <input
                                                        name='choice'
                                                        type='radio'
                                                        value='status'
                                                        checked={optionSearch === 'status'}
                                                        onChange={(e) => setOptionSearch(e.target.value)}
                                                    />
                                                    <label htmlFor="choice">Por data de criação:</label>
                                                    <input
                                                        name='choice'
                                                        type='radio'
                                                        value='create'
                                                        checked={optionSearch === 'create'}
                                                        onChange={(e) => setOptionSearch(e.target.value)}
                                                    />
                                                    <label htmlFor="choice">Por data de finalização:</label>
                                                    <input
                                                        name='choice'
                                                        type='radio'
                                                        value='finish'
                                                        checked={optionSearch === 'finish'}
                                                        onChange={(e) => setOptionSearch(e.target.value)}
                                                    />
                                                </>
                                            )
                                    }
                                </div>
                            </div>
                        </section>
                        <section className={styles.table}>
                            {
                                typeSearch == 'user' ?
                                    <Table atributtes={['nome', 'email', 'função', 'acessos']} content={response} /> :
                                    <Table atributtes={['título', 'local', 'status', 'dia criado', 'dia finalizado', 'usuário']} content={response} />
                            }
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
