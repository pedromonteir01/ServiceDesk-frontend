import styles from './table.module.css';

const Table = ({ atributtes, content }) => {
    return (
        <table className={styles.container}>
            <tr>
                {
                    atributtes.map((content) => (
                        <th className={styles.theader}>{content}</th>
                    ))
                }
            </tr>
            {
                content.map((obj, index) => (

                    <tr key={index}>
                        {
                        Object.keys(obj).map((key, i) => (
                            <td style={{padding: 12}} key={i}>{obj[key]}</td>
                        ))
                        }
                    </tr>

                ))
            }
        </table>
    );
}

export default Table;