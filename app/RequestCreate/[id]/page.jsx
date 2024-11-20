import Header from '@/app/Components/Header/Header';
import styles from './edit.module.css';

export default function EditRequest({ params }) {

    const { id } = params;

    return (
        <main className={styles.generalDiv}>
            <Header/>
            <div className={styles.component}>

            </div>
        </main>
    );
}