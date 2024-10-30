import Header from "../Components/Header/Header";
import styles from "./page.module.css";
import RequestCreateComponent from "../Components/RequestCreateComponent/RequestCreateComponent";

export default function RequestCreate() {
  return (
    <div className={styles.generalDiv}>
      <Header />
      <RequestCreateComponent />
    </div>
  );
}
