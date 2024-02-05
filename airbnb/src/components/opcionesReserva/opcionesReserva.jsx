import styles from "./index.module.css";
import { Toggle } from "../toggle";
import { TitleFilter } from "../titleFilter";
import { useState } from "react";

function OpcionesReserva({ handleBookingChanges }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const bookingTitle = [
    "Reserva inmediata",
    "Llegada autonoma",
    "Se permiten mascotas",
  ];
  const bookingDescription = [
    "Anuncios que puedes reservar sin esperar la aprovación del anfitrión",
    "Fácil acceso a la propiedad una vez que llegues",
    "¿Traes a un animal de servicio?",
  ];

  let filteredServices = [];

  const notifyClick = (item) => {
    console.log(item);
    console.log(selectedOptions);
    if ((selectedOptions.find((elem) => elem === item)+1)) {
      console.log(item);
      filteredServices = selectedOptions.filter((elem) => elem !== item);
      handleBookingChanges(filteredServices);
      setSelectedOptions(filteredServices);
    } else {
      console.log(item);
      console.log(selectedOptions);
      setSelectedOptions([...selectedOptions, item]);
      handleBookingChanges([...selectedOptions, item]);
    }
  };

  return (
    <div className={styles.reservasContainer}>
      <TitleFilter text={"Opciones de reserva"} />
      {bookingTitle.map((title, index) => (
        <div key={index} className={styles.bookingRow}>
          <div className={styles.bookingText}>
            <div className={styles.titleFont}>{title} </div>
            <div className={styles.descriptionFont}>
              {bookingDescription[index]}
            </div>
          </div>
          <div className={styles.toggle}>
            <Toggle id={index} notifyClick={notifyClick} />
          </div>
        </div>
      ))}
    </div>
  );
}

export { OpcionesReserva };
