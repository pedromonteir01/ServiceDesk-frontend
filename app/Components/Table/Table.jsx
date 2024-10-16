import styles from './table.module.css';

const Table = ({ atributtes, content }) => {
    return (
        <table className={styles.container}>
            <tr className={styles.trow}>
                {
                    atributtes.map((content) => (
                        <th className={styles.theader}>{content}</th>
                    ))
                }
            </tr>
            {
                content.map((obj, index) => (

                    <tr key={index} className={styles.trow}>
                        {
                        Object.keys(obj).map((key, i) => (
                            <td className={styles.tdata} key={i}>{obj[key]}</td>
                        ))
                        }
                    </tr>

                ))
            }
        </table>
    );
}

export default Table;