import styles from "./index.module.css";
import { TitleFilter } from "../titleFilter";
import { DescriptionFilter } from "../descriptionFilter";
import { useEffect, useState } from "react";

function RadioButton({handleAlojamientoChanges}) {
  const [buttonSelected, setButtonSelected] = useState("Cualquier tipo");


  useEffect(() => {
    handleAlojamientoChanges(buttonSelected)}, [buttonSelected, handleAlojamientoChanges])

  const notifyButton = (e) => {
    setButtonSelected(e.target.innerText);
  };
  
  return (
    <div className={styles.layoutRadioButton}>
      <div className={styles.headerText}>
        <TitleFilter text={"Tipo de alojamiento"} />
        <DescriptionFilter
          text={
            "Busca habitaciones, alojamientos enteros o cualquier tipo de espacio."
          }
        />
      </div>
      <div className={styles.radioButtonComponent}>
        <button
          className={buttonSelected === "Cualquier tipo" ? styles.buttonSelectedA :  styles.buttonAlojamiento  }
          onClick={(e) => notifyButton(e)}
        >
          Cualquier tipo
        </button>
        <button
          className={buttonSelected === "Habitacion" ? styles.buttonSelectedA :  styles.buttonAlojamiento  }
          onClick={(e) => notifyButton(e)}
        >
          Habitacion
        </button>
        <button
          className={buttonSelected === "Alojamiento entero" ? styles.buttonSelectedA :  styles.buttonAlojamiento  }
          onClick={(e) => notifyButton(e)}
        >
          Alojamiento entero
        </button>
      </div>
    </div>
  );
}

export { RadioButton };
