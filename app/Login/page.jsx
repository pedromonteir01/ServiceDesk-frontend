import style from './login.module.css'
import UserComponent from "../components/UserComponent/UserComponent";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

export default function Login() {
    return (
        <main>
            <Header/>
            <UserComponent/>
            <Footer/>
        </main>
    );
}