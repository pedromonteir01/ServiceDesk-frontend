import Header from "../Components/Header/Header";
import styles from "./page.module.css";
import RequestComponent from "../Components/RequestComponent/RequestComponent";

export default function Request() {
  return (
    <div className={styles.generalDiv}>
      <Header />
      <RequestComponent />
    </div>
  );
}
