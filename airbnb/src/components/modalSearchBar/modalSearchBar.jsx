import styles from "./index.module.css";

function ModalSearchBar({
  typeParameter,
  showParameterInfo,
  destinationSearch,
}) {
  const selectTypeModal = () => {
    if (destinationSearch === "") {
      return styles.estandarModal;
    } else if (destinationSearch === "filter") {
      return styles.filterModal;
    } else if (destinationSearch !== "") {
      return styles.searchModal;
    }
  };
  return (
    <div onClick={(e) => e.stopPropagation()} className={selectTypeModal()}>{showParameterInfo(typeParameter)}</div>
  );
}
export { ModalSearchBar };
