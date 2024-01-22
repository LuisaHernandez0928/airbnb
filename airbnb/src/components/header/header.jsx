import React, { useState } from "react";
import styles from "./index.module.css";
import { SearchParameter } from "../searchParameter";
import { ModalSearchBar } from "../modalSearchBar";
import { Title } from "../title";
import { LatestSearch } from "../latestSearch";
import { RegionSearch } from "../regionSearch";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [selected, setSelected] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const notifyClick = (identificador) => {
    setSelected(!selected);
    setModalContent(identificador);
  };

  const viewParameter = (modalContent) => {
    if (modalContent === "Dónde") {
      return (
        <div className={styles.dondeParam}>
          <div className={styles.busquedaReciente}>
            <Title text={"Busquedas recientes"} />
            <LatestSearch />
          </div>
          <div className={styles.busquedaRegion}>
            <Title text={"Busqueda por region"} />
            <div className={styles.cardsGrid}>
              <RegionSearch location={"Busqueda flexible"} />
              <RegionSearch location={"Colombia"} />
              <RegionSearch location={"Europa"} />
              <RegionSearch location={"Mexico"} />
              <RegionSearch location={"EstadosUnidos"} />
              <RegionSearch location={"España"} />
            </div>
          </div>
        </div>
      );
    } else if (modalContent === "Llegada") {
      return <div className={styles.llegadaParam}>{modalContent}</div>;
    } else if (modalContent === "Salida") {
      return <div className={styles.salidaParam}>{modalContent}</div>;
    } else if (modalContent === "Quién") {
      return <div className={styles.quienParam}>{modalContent}</div>;
    }
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
      {selected ? (
        <ModalSearchBar typeParameter={modalContent} pepe={viewParameter} />
      ) : (
        <></>
      )}
    </div>
  );
}

export { Header };
