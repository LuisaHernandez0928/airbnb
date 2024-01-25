import styles from "./index.module.css";

function FilterBar({ data }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.typeHousesContainer}></div>
      <div className={styles.filterContainer}></div>
    </div>
  );
}

export { FilterBar };
