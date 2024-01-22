import styles from "./index.module.css";

function ModalSearchBar({ typeParameter, pepe }) {
  return (<div className={styles.showModal}>{pepe(typeParameter)} </div>);
}

export { ModalSearchBar };
