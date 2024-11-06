import toast from 'react-hot-toast';
import styles from './changePassword.module.css';
import { useContext, useState } from 'react';
import { changePassword } from '@/app/actions/users';
import { UserContext } from '@/app/contexts/userContext';

const ChangePassword = () => {

    const { user } = useContext(UserContext);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const change = async() => {
        if(password !== confirmPassword) console.log('SENHASSSSSSSSSSSSSSS');
        
        const token = localStorage.getItem('refreshToken');
        await changePassword(password, user.email, token);
        console.log('funfou');

    }

    return (
        <>
            <label htmlFor="newpassword">Nova senha: </label>
            <input
                type="password"
                name='newpassword'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
            />

            <label htmlFor="confirmpassword">Confirmar senha: </label>
            <input
                type="password"
                name='confirmpassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
            />

            <button className={styles.button} onClick={change}>MUDAR SENHA!</button>
        </>
    );
}

export default ChangePassword;