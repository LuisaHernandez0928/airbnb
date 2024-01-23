import styles from "./index.module.css";

function ModalSearchBar({ typeParameter, showParameterInfo,destinationSearch }) {
  return (<div className={ !(destinationSearch === "") ? styles.searchModal: styles.estandarModal}>{showParameterInfo(typeParameter)} </div>);
}

export { ModalSearchBar };
