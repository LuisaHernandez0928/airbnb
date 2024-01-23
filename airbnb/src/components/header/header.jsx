import React, { useState } from "react";
import { SearchParameter } from "../searchParameter";
import { ModalSearchBar } from "../modalSearchBar";
import { Donde } from "../dondeHeader";
import styles from "./index.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Header({notifyParameters, recentSearches}) {
  const [selected, setSelected] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [location, setLocation] = useState("");
  const [llegada, setLlegada] = useState("Cualquiera");
  const [salida, setsalida] = useState("Cualquiera");
  const [quienes, setQuienes] = useState({});

  const reportParameters = () =>{
    let parameters = {
      location :  location,
      llegada: llegada,
      salida: salida,
      quienes: {
        adultos: quienes.adults,
        niños: quienes.childs,
        bebes: quienes.babies,
        mascotas: quienes.pets,
      }
    }
    notifyParameters(parameters);
  }

  const notifyClick = (identificador) => {
    setSelected(!selected);
    setModalContent(identificador);
  };

  const notifyLocation = (locationSearched) => {
    setLocation(locationSearched);
    console.log(locationSearched[0].location);
  }

  const viewParameter = (modalContent) => {
    if (modalContent === "Dónde") {
      return <Donde data={recentSearches}/>
    } else if (modalContent === "Llegada") {
      return <div className={styles.llegadaParam}>{modalContent}</div>;
    } else if (modalContent === "Salida") {
      return <div className={styles.salidaParam}>{modalContent}</div>;
    } else if (modalContent === "Quién") {
      return <div className={styles.quienParam}>{modalContent}</div>;
    }
  };

  const handleSearch = () => {
    console.log('here');
    reportParameters();
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.parameterContainer}>
        <SearchParameter
          title={"Dónde"}
          subtitle={"Explora destinos"}
          itemSelected={notifyClick}
          notifyLocation={notifyLocation}
          isInput
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
      <button onClick={() => handleSearch()} className={styles.searchButton}>
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
