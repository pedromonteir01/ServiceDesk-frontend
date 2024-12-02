import style from './login.module.css'
import UserComponent from "../components/UserComponent/UserComponent";
import Header from '../components/Header/header';

export default function Login() {
    return (
        <main>
            <Header/>
            <UserComponent/>
        </main>
    );
}