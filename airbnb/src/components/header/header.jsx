import React, { useState } from "react";
import { SearchParameter } from "../searchParameter";
import { ModalSearchBar } from "../modalSearchBar";
import { Donde } from "../dondeHeader";
import {DestinationFinder} from "../destinationFinder";
import styles from "./index.module.css";
import SearchIcon from "@mui/icons-material/Search";

function Header({notifyParameters, recentSearches}) {
  const [selected, setSelected] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [location, setLocation] = useState("");
  const [llegada, setLlegada] = useState("Cualquiera");
  const [salida, setsalida] = useState("Cualquiera");
  const [quienes, setQuienes] = useState({});

  const cities = [
    "New York",
    "Yorkshire",
    "York",
    "Washington",
    "Maine",
    "Nevada",
    "Central",
    "Colorado",
    "Cupertino",
    "Arizona",
    "Barbados",
    "Dallas",
    "Jersey",
    "Luisiana",
    "Colombia",
    "La habana",
    "Haiti",
    "huila",
  ];


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
  }

  const viewParameter = (modalContent) => {
    if (modalContent === "Dónde" && location ==="") {
      return <Donde data={recentSearches}/>
    }else if(!(location === "")){
      console.log("entro here")
      return <DestinationFinder destinationOptions={cities} destinationSearched={location}/>
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
        <ModalSearchBar typeParameter={modalContent} showParameterInfo={viewParameter} destinationSearch={location} />
      ) : (
        <></>
      )}
    </div>
  );
}

export { Header };
