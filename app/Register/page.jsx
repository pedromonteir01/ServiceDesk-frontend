import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import RegisterComponent from '../Components/RegisterComponent/RegisterComponent';
import styles from './register.module.css'

export default function Register() {
    return (
        <main className={styles.container}>
            <Header/>
            <RegisterComponent/>
            <Footer/>
        </main>
    );
}