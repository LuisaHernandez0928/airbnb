import styles from "./index.module.css";
import { SearchParameter } from "../searchParameter";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.parameterContainer}>
      <SearchParameter title={"Dónde"} subtitle={"Explora destinos"} />
      <SearchParameter title={"Llegada"} subtitle={"Agrega fecha"} />
      <SearchParameter title={"Salida"} subtitle={"Agrega fecha"} />
      <SearchParameter title={"Quién"} subtitle={"¿Cuántos?"} />
      </div>
      <button className={styles.searchButton}>
        <div>
          <SearchIcon></SearchIcon>
        </div>
      </button>
    </div>
  );
}

export { Header };
