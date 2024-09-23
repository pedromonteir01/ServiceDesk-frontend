import Header from "../Components/Header/Header";
import styles from "./request.module.css";
export default function Request() {
  return (
    <div className={styles.generalDiv}>
      <Header />
      <div>
        <h1>Request</h1>
      </div>
    </div>
  );
}
