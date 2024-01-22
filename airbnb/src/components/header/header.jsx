import React, { useState } from "react";
import styles from "./index.module.css";
import { SearchParameter } from "../searchParameter";
import { ModalSearchBar } from "../modalSearchBar";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [selected, setSelected] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const notifyClick = (identificador) => {
    setSelected(!selected);
    setModalContent(identificador);
  };
  return (
    <div className={styles.searchBar}>
      <div className={styles.parameterContainer}>
        <SearchParameter
          title={"Dónde"}
          subtitle={"Explora destinos"}
          itemSelected={notifyClick}
        />
        <SearchParameter
          title={"Llegada"}
          subtitle={"Agrega fecha"}
          itemSelected={notifyClick}
        />
        <SearchParameter
          title={"Salida"}
          subtitle={"Agrega fecha"}
          itemSelected={notifyClick}
        />
        <SearchParameter
          title={"Quién"}
          subtitle={"¿Cuántos?"}
          itemSelected={notifyClick}
        />
      </div>
      <button className={styles.searchButton}>
        <div>
          <SearchIcon></SearchIcon>
        </div>
      </button>
      {selected ? <ModalSearchBar typeParameter={modalContent}/> : <></>}
    </div>
  );
}

export { Header };
