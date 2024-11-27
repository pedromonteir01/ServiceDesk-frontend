import styles from "./dataRequest.module.css";

const DataRequest = ({ month, requests, attented }) => {
  const percent = () => {
    if (requests == 0 || attented == 0) {
      return false;
    } else {
      return `representando ${Math.floor(
        (attented / requests) * 100
      )}% de resoluções este mês`;
    }
  };

  return (
    <div className={styles.container}>
      <p>
        No mês de {month} foram feitas um total de {requests} onde {attented}{" "}
        foram atendidas {percent()}
      </p>
    </div>
  );
};

export default DataRequest;
