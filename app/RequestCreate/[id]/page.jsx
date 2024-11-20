import Header from '@/app/Components/Header/Header';
import styles from './edit.module.css';
import EditComponent from '@/app/Components/Edit/Edit';

export default function EditRequest({ params }) {

    const { id } = params;    

    return (
        <main className={styles.generalDiv}>
            <Header/>
            <div className={styles.component}>
                <EditComponent id={id}/>
            </div>
        </main>
    );
}