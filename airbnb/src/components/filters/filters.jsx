import { useState } from "react";
import { ModalSearchBar } from "../modalSearchBar";
import { Title } from "../title";
import styles from "./index.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import { RadioButton } from "../radioButton/radioButton";
import { MemoizedRangePrices } from "../rangePricesFilter/rangePricesFilter";
import { HabitacionesCamas } from "../habitacionesCamas";
import { Prizes } from "../alojamientosDePrimera";
import { Properties } from "../propertiesType";
import { Services } from "../services/services";
import { OpcionesReserva } from "../opcionesReserva/opcionesReserva";
import { Accesibility } from "../accesibility";
import { Languages } from "../languages/languages";
import { Footer } from "../footer/footer";
import { Header } from "../filterHeader/header";

function Filters({ data, notifyModalOpened }) {
  const [showFilters, setShowFilters] = useState(false);

  const [userFilters, setUserFilters] = useState({
    tipoAlojamiento: "Cualquier tipo",
    priceMin: 20,
    priceMax: 416,
    rooms: "Cualquiera",
    beds: "Cualquiera",
    baths: "Cualquiera",
    guestsFavorite: false,
    tipoPropiedad: [],
    services: [],
    bookingOptions: [],
  });

  const handleAlojamientoChanges = (value) => {
    setUserFilters((prevFilters) => ({
      ...prevFilters,
      tipoAlojamiento: value,
    }));
  };

  const handlePriceChanges = (minValue, maxValue) => {
    setUserFilters({
      ...userFilters,
      priceMin: minValue,
      priceMax: maxValue,
    });
  };

  const handleHomeChanges = (rooms, beds, baths) => {
    setUserFilters({
      ...userFilters,
      rooms: rooms,
      beds: beds,
      baths: baths,
    });
  };
  const handleFavoriteChanges = (value) => {
    setUserFilters({
      ...userFilters,
      guestsFavorite: value,
    });
  };
  const handlePropertyChanges = (casa, casaHuespedes, hotel) => {
    setUserFilters({
      ...userFilters,
      tipoPropiedad: [casa, casaHuespedes, hotel],
    });
  };

  const handleServicesChanges = (value) => {
    setUserFilters({
      ...userFilters,
      services: value,
    });
  };
  const handleBookingChanges = (value) => {
    setUserFilters({
      ...userFilters,
      bookingOptions: value,
    });
  };

  const filters = (
    <div className={styles.filterLayout}>
      <Header />
      <div className={styles.filterComponents}>
        <RadioButton handleAlojamientoChanges={handleAlojamientoChanges} />
        <MemoizedRangePrices
          data={data}
          handlePriceChanges={handlePriceChanges}
        />
        <HabitacionesCamas handleHomeChanges={handleHomeChanges} />
        <Prizes handleFavoriteChanges={handleFavoriteChanges} />
        <Properties handlePropertyChanges={handlePropertyChanges} />
        <Services handleServicesChanges={handleServicesChanges} />
        <OpcionesReserva handleBookingChanges={handleBookingChanges} />
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

  const accommodationTypeFilter = (airbnbType, typeSelected) => {
    if (typeSelected === "Cualquier tipo" || typeSelected === airbnbType) {
      return true;
    } else {
      return false;
    }
  };

  const dataArray = Object.values(data);
  console.log(userFilters.tipoAlojamiento);

  console.log(
    dataArray.filter((airbnb) => accommodationTypeFilter(airbnb.tipoAlojamiento , userFilters.tipoAlojamiento))
  );

  return (
    <div className={styles.filtersContainer}>
      <button onClick={openFilters}>
        <TuneIcon />
        <Title text={"Filtros"} />
      </button>
      {showFilters && (
        <div
          onClick={() => handleClickOutside()}
          className={styles.aboveScreen}
        >
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
