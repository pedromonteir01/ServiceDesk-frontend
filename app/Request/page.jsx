import Header from "../Components/Header/Header";
import styles from "./request.module.css";
import Footer from "../Components/Footer/Footer";
import RequestComponent from "../Components/RequestComponent/RequestComponent";

export default function Request() {
  const teste = () => {
    console.log("chamando requisição");
  };

  return (
    <div className={styles.generalDiv}>
      <Header />
      <RequestComponent />
      <Footer />
    </div>
  );
}
