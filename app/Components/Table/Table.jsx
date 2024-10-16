const Table = ({ atributtes, content }) => {
    return (
        <table>
            <tr>
                {
                    atributtes.map((content) => (
                        <th>{content}</th>
                    ))
                }
            </tr>
            {
                content.map((obj, index) => (

                    <tr key={index}>
                        {
                        Object.keys(obj).map((key, i) => (
                            <td key={i}>{obj[key]}</td>
                        ))
                        }
                    </tr>

                ))
            }
        </table>
    );
}

export default Table;