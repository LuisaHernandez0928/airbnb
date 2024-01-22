import styles from "./index.module.css";

function Title({text}) {
  return <div className={styles.titleFont}>{text}</div>;
}

export { Title };
