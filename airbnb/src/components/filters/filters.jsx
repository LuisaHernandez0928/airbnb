import { useState } from "react";
import { ModalSearchBar } from "../modalSearchBar";
import { Title } from "../title";
import styles from "./index.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import { RadioButton } from "../radioButton/radioButton";

function Filters({ data }) {
  const [showFilters, setShowFilters] = useState(false);

  const filters = <RadioButton />;

  const showInfo = (content) => {
    return <div>{content}</div>;
  };
  
  const openFilters = () => {
    console.log("entro a filtros");
    setShowFilters(!showFilters);
  };

  return (
    <button className={styles.filtersContainer} onClick={() => openFilters()}>
      <TuneIcon />
      <Title text={"Filtros"} />
      {showFilters && (
        <div className={styles.aboveScreen}>
          <ModalSearchBar
            typeParameter={filters}
            showParameterInfo={showInfo}
            destinationSearch={"filter"}
          />
        </div>
      )}
    </button>
  );
}

export { Filters };
