import styles from "./index.module.css";
import { TitleFilter } from "../titleFilter";
import { RadioButtonSeparated } from "../radioButtonSeparated/radioButtonSeparated";

function HabitacionesCamas() {
  return (
    <div className={styles.containerHabitacionesCamas}>
      <TitleFilter text={"Habitacion y camas"} />
      <RadioButtonSeparated subtitle={"Habitaciones"}/>
      <RadioButtonSeparated subtitle={"Camas"}/>
      <RadioButtonSeparated subtitle={"Baños"}/>
    </div>
  );
}

export { HabitacionesCamas };
