import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { TitleFilter } from "../titleFilter";
import { RadioButtonSeparated } from "../radioButtonSeparated/radioButtonSeparated";

function HabitacionesCamas({ handleHomeChanges }) {
  const [rooms, setRooms] = useState("Cualquiera");
  const [beds, setBeds] = useState("Cualquiera");
  const [baths, setBaths] = useState("Cualquiera");

  const notifyRoomChanged = (subtitle, value) => {
    if (subtitle === "Habitaciones") {
      setRooms(value);
    }
    if (subtitle === "Camas") {
      setBeds(value);
    }
    if (subtitle === "Baños") {
      setBaths(value);
    }
  };

  useEffect(() => {
    handleHomeChanges(rooms, beds, baths);
  }, [rooms, beds, baths, handleHomeChanges]);

  return (
    <div className={styles.containerHabitacionesCamas}>
      <TitleFilter text={"Habitacion y camas"} />
      <RadioButtonSeparated
        subtitle={"Habitaciones"}
        notifyRoomChanged={notifyRoomChanged}
      />
      <RadioButtonSeparated
        subtitle={"Camas"}
        notifyRoomChanged={notifyRoomChanged}
      />
      <RadioButtonSeparated
        subtitle={"Baños"}
        notifyRoomChanged={notifyRoomChanged}
      />
    </div>
  );
}

export { HabitacionesCamas };
