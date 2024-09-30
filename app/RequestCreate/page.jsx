import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import styles from "./page.module.css";

export default function RequestCreate() {
  return (
    <>
      <div className={styles.divGeneral}>
        <Header />
        <h1>RequestCreate</h1>
        <Footer />
      </div>
    </>
  );
}
