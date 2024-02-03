import { useState, useEffect } from "react";
import { ModalSearchBar } from "../modalSearchBar";
import { Title } from "../title";
import styles from "./index.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import { RadioButton } from "../radioButton/radioButton";
import { RangePrices } from "../rangePricesFilter/rangePricesFilter";
import { HabitacionesCamas } from "../habitacionesCamas";
import { Prizes } from "../alojamientosDePrimera";
import { Properties } from "../propertiesType";
import { Services } from "../services/services";
import { OpcionesReserva } from "../opcionesReserva/opcionesReserva";
import { Accesibility } from "../accesibility";
import { Languages } from "../languages/languages";
import { Footer } from "../footer/footer";
import { Header } from "../filterHeader/header";

function Filters({ data, notifyModalOpened, shouldBeClosed }) {
  const [showFilters, setShowFilters] = useState(false);

 /* useEffect(() => {
    if (shouldBeClosed === true) setShowFilters(false);
  }, [shouldBeClosed]);
*/
  const filters = (
    <div className={styles.filterLayout}>
      <Header />
      <div className={styles.filterComponents}>
        <RadioButton />
        <RangePrices data={data} />
        <HabitacionesCamas />
        <Prizes />
        <Properties />
        <Services />
        <OpcionesReserva />
        <Accesibility />
        <Languages />
      </div>
      <Footer />
    </div>
  );

  const showInfo = (content) => {
    return <div>{content}</div>;
  };

  const openFilters = () => {
    setShowFilters(!showFilters);
    notifyModalOpened();
  };

  const handleClickOutside = () => {
    setShowFilters(false);
  };

  return (
    <div className={styles.filtersContainer}>
      <button onClick={openFilters}>
        <TuneIcon />
        <Title text={"Filtros"} />
      </button>
      {showFilters && (
        <div onClick={() => handleClickOutside()} className={styles.aboveScreen}>
          <ModalSearchBar
            typeParameter={filters}
            showParameterInfo={showInfo}
            destinationSearch={"filter"}
          />
        </div>
      )}
    </div>
  );
}

export { Filters };
