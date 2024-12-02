import style from './login.module.css'
import UserComponent from "../components/UserComponent/UserComponent.jsx";
import Header from '../components/Header/header.jsx';

export default function Login() {
    return (
        <main>
            <Header/>
            <UserComponent/>
        </main>
    );
}