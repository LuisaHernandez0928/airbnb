import { useState } from "react";
import { ModalSearchBar } from "../modalSearchBar";
import { Title } from "../title";
import styles from "./index.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import { RadioButton } from "../radioButton/radioButton";
import { RangePrices } from "../rangePricesFilter/rangePricesFilter";
import { HabitacionesCamas } from "../habitacionesCamas";
import { GraphPriceSlider } from "../graphPriceSlider";

function Filters({ data }) {
  const [showFilters, setShowFilters] = useState(false);

  const filters = (
    <div className={styles.filterLayout}>
      <RadioButton />
      <RangePrices data={data} />
      <HabitacionesCamas />
    </div>
  );

  const showInfo = (content) => {
    return <div>{content}</div>;
  };

  const openFilters = () => {
    setShowFilters(true);
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
