import styles from "./index.module.css";

function ModalSearchBar({ typeParameter }) {
  return (<div className={styles.showModal}>{typeParameter} </div>);
}

export { ModalSearchBar };
