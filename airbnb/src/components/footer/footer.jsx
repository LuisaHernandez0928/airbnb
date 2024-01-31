import { Title } from "../title";
import styles from "./index.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <button className={styles.firstButton}>
        <Title text={"Quitar todos"} cardFilter={true} />{" "}
      </button>
    </footer>
  );
}

export { Footer };
