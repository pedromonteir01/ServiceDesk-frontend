import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import RequestCreateComponent from "../Components/RequestCreateComponent/RequestCreateComponent";

import styles from "./page.module.css";

export default function RequestCreate() {
  return (
    <>
      <div className={styles.divGeneral}>
        <Header />
        <RequestCreateComponent />
        <Footer />
      </div>
    </>
  );
}
