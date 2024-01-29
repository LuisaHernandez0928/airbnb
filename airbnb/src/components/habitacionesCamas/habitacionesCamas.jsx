import { useState } from "react";
import styles from "./index.module.css";
import { TitleFilter } from "../titleFilter";
import { DescriptionFilter } from "../descriptionFilter";

function HabitacionesCamas() {
  const [buttonSelected, setButtonSelected] = useState("");

  const notifyButton = (e) => {
    setButtonSelected(e.target.innerText);
    console.log(e.target.innerText);
  };

  return (
    <div className={styles.container}>
      <TitleFilter text={"Habitacion y camas"} />
      <DescriptionFilter text={"Habitaciones"} />
      <div className={styles.radioButtonContainer}>
        <button
          className={
            buttonSelected === "Cualquiera"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          Cualquiera
        </button>
        <button
          className={
            buttonSelected === "1"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          1
        </button>
        <button
          className={
            buttonSelected === "2"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          2
        </button>
        <button
          className={
            buttonSelected === "2"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          3
        </button>
        <button
          className={
            buttonSelected === "2"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          4
        </button>
        <button
          className={
            buttonSelected === "2"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          5
        </button>
        <button
          className={
            buttonSelected === "2"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          6
        </button>
        <button
          className={
            buttonSelected === "2"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          7
        </button>
        <button
          className={
            buttonSelected === "2"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          8+
        </button>
      </div>
    </div>
  );
}

export { HabitacionesCamas };
