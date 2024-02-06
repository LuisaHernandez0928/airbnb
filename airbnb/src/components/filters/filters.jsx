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

  const dataArray = Object.values(data);

  const accommodationTypeFilter = (airbnbType, typeSelected) => {
    if (
      typeSelected.tipoAlojamiento === "Cualquier tipo" ||
      typeSelected.tipoAlojamiento === airbnbType.tipoAlojamiento
    ) {
      return true;
    } else {
      return false;
    }
  };

  const getAirbnbPrices = (data) => {
    const airbnbPrice = [];
    const airbnbAvailability = data.availability;
    for (const availabilityKey in airbnbAvailability) {
      airbnbPrice.push(airbnbAvailability[availabilityKey].price);
    }
    return airbnbPrice;
  };

  const priceRangeFilter = (
    airbnb,
    priceMinSelected,
    priceMaxSelected,
    pricesEachAirbnb
  ) => {
    let pricesArray = pricesEachAirbnb(airbnb);
    let priceMatch = pricesArray.find(
      (elem) => elem >= priceMinSelected && elem <= priceMaxSelected
    );

    if (priceMatch) {
      return true;
    } else {
      return false;
    }
  };

  const roomsQuantityFilter = (airbnb, quantitySelected) => {
    if (
      quantitySelected.rooms === "Cualquiera" ||
      quantitySelected.rooms <= airbnb.rooms
    ) {
      return true;
    } else {
      return false;
    }
  };

  const bedsQuantityFilter = (airbnb, quantitySelected) => {
    if (
      quantitySelected.beds === "Cualquiera" ||
      quantitySelected.beds <= airbnb.beds
    ) {
      return true;
    } else {
      return false;
    }
  };

  const bathsQuantityFilter = (airbnb, quantitySelected) => {
    if (
      quantitySelected.baths === "Cualquiera" ||
      quantitySelected.baths <= airbnb.baths
    ) {
      return true;
    } else {
      return false;
    }
  };

  /*  console.log(
    dataArray.filter((airbnb) => priceRangeFilter(airbnb, userFilters.priceMin, userFilters.priceMax, getAirbnbPrices) && accommodationTypeFilter(airbnb,userFilters) && roomsQuantityFilter(airbnb,userFilters) && bedsQuantityFilter(airbnb,userFilters) && bathsQuantityFilter(airbnb,userFilters))
  );
*/

  console.log(
    dataArray.filter((airbnb) => bedsQuantityFilter(airbnb, userFilters))
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
