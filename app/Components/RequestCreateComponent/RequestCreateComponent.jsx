import styles from "./requestCreateComponent.module.css";
import { IoCloudDownloadOutline } from "react-icons/io5";


export default function RequestCreateComponent() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Relate aqui seu <span className={styles.problemText}>problema</span>
      </h1>

      <label className={styles.label}>O que aconteceu? Descreva</label>
      <textarea
        className={styles.descriptionInput}
      />

      <label className={styles.label}>Imagem</label>
      <div className={styles.imageUpload}>
        <input type="file" accept="image/*" className={styles.fileInput} />
        <IoCloudDownloadOutline color="#000" fontSize={30} />
        <span>Inserir imagem</span>
      </div>
      <p className={styles.imageHint}>
        Tire uma foto para facilitar a localização
      </p>

      <label className={styles.label}>Qual foi o local?</label>
      <select className={styles.select}>
        <option value="">Selecione o ambiente</option>
        {/* Adicione mais opções aqui */}
        <option value="sala1">Sala 1</option>
        <option value="sala2">Sala 2</option>
        <option value="laboratorio">Laboratório</option>
      </select>

      <button className={styles.submitButton}>Criar Requisição</button>
    </div>
  );
}
