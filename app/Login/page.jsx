import style from './login.module.css'
import UserComponent from "../components/UserComponent/UserComponent";

export default function Login() {
    return (
        <main className={style.container}>
            <UserComponent/>
        </main>
    );
}