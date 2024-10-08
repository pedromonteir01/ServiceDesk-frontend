import Header from "../Components/Header/Header";
import styles from "./page.module.css";
import Footer from "../Components/Footer/Footer";
import RequestComponent from "../Components/RequestComponent/RequestComponent";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import TestePedro from "../Components/TestePedro/testePedro";

export default function Request() {
  return (
    <div className={styles.generalDiv}>
      <Header />
      <RequestComponent />
      <TestePedro label="Teste" value="Valor" context="Contexto" />
      <Footer />
    </div>
  );
}
