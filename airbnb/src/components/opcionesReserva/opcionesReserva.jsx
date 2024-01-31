import styles from "./index.module.css";
import { Toggle } from "../toggle";

function OpcionesReserva() {
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

  return (
    <div className={styles.reservasContainer}>
      {bookingTitle.map((title, index) => (
        <div className={styles.bookingRow}>
          <div className={styles.bookingText}>
            <div className={styles.titleFont}>{title} </div>
            <div className={styles.descriptionFont}>{bookingDescription[index]} </div>
          </div>
          <Toggle />
        </div>
      ))}
    </div>
  );
}

export { OpcionesReserva };
