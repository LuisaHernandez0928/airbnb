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
  const [tipoAlojamiento, setTipoAlojamiento] = useState("Cualquier tipo");
  const [priceMin, setPriceMin] = useState(20);
  const [priceMax, setPriceMax] = useState(460);
  const [rooms, setRooms] = useState("Cualquiera");
  const [beds, setBeds] = useState("Cualquiera");
  const [baths, setBaths] = useState("Cualquiera");
  const [favorites, setFavorite] = useState(false);
  const [tipoPropiedad, setTipoPropiedad] = useState([]);
  const [services, setServices] = useState([]);
  const [bookingOptions, setBookingOptions] = useState([]);

  /*const [userFilters, setUserFilters] = useState({
    tipoAlojamiento: "",
    priceMin: "",
    priceMax: "",
    rooms: "",
    beds: "",
    baths: "",
    guestsFavorite: "",
    tipoPropiedad: "",
    services: "",
    bookingOptions: "",
  });
  */

  const handleAlojamientoChanges = (value) => {
    /*setUserFilters((prevFilters) => ({
      ...prevFilters,
      tipoAlojamiento: value,
    }));*/
    setTipoAlojamiento(value);
  };

  const handlePriceChanges = (minValue, maxValue) => {
    /*setUserFilters({
      ...userFilters,
          priceMin: minValue,
          priceMax: maxValue,
    });*/
    setPriceMin(minValue);
    setPriceMax(maxValue);
  };

  const handleHomeChanges = (rooms, beds, baths) => {
    /*setUserFilters({
      ...userFilters,
      rooms: rooms,
      beds: beds,
      baths: baths,
    });*/
    setRooms(rooms);
    setBeds(beds);
    setBaths(baths);
  };

  const handleFavoriteChanges = (value) => {
    /* setUserFilters({
      ...userFilters,
      guestsFavorite: value,
    });*/
    setFavorite(value);
  };

  const handlePropertyChanges = (casa, casaHuespedes, hotel) => {
    /* setUserFilters({
      ...userFilters,
      tipoPropiedad: value,
    });*/
    setTipoPropiedad([casa, casaHuespedes, hotel]);
  };

  const handleServicesChanges = (value) => {
    /*setUserFilters({
      ...userFilters,
      services: value,
    });*/
    setServices(value)
  };

  const handleBookingChanges = (value) => {
    /* setUserFilters({
      ...userFilters,
      bookingOptions: value,
    });
    */
   setBookingOptions(value)
  };

  const userFilters = {
    tipoAlojamiento: tipoAlojamiento,
    priceMin: priceMin,
    priceMax: priceMax,
    rooms: rooms,
    beds: beds,
    baths: baths,
    guestsFavorite: favorites,
    tipoPropiedad: tipoPropiedad,
    services: services,
    bookingOptions: bookingOptions,
  };

  console.log(userFilters);
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
