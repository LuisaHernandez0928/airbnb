import { Categories } from "../categories";
import styles from "./index.module.css";

function FilterBar({ data }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.typeHousesContainer}>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      <Categories/>
      </div>
      <div className={styles.filterContainer}></div>
    </div>
  );
}

export { FilterBar };
