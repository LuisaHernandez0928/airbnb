import styles from "./index.module.css";
import { TitleFilter } from "../titleFilter";
import { DescriptionFilter } from "../descriptionFilter";

function RadioButton() {
  return (
    <div className={styles.layoutRadioButton}>
      <TitleFilter text={"Tipo de alojamiento"} />
      <DescriptionFilter
        text={
          "Busca habitaciones, alojamientos enteros o cualquier tipo de espacio."
        }
      />
      <div className={styles.radioButtonComponent}>
        <button className={styles.buttonAlojamiento}>Cualrquier tipo</button>
        <button className={styles.buttonAlojamiento}>Habitacion</button>
        <button className={styles.buttonAlojamiento}>Alojamiento entero</button>
      </div>
    </div>
  );
}

export { RadioButton };
