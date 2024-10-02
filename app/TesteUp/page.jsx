import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import UploadImage from "../Components/UploadImage/UploadImage";
import styles from "./page.module.css";
export default function TesteUp() {
  return (
    <div className={styles.generalDiv}>
      <Header />
      <UploadImage />
      <Footer />
    </div>
  );
}
