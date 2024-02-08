import styles from "./index.module.css";
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";

function AddAirbnb({ options }) {
  return (
    <div className={styles.layout}>
      <Title
        text={"Completa los pasos para publicar tu Airbnb"}
        cardFilter={true}
      />
      <Subtitle
        text={
          "Primero, dinos que tipo de espacio lo describe mejor, Segundo, hablanos de sus caracteristicas, Tercero, publica y empieza a ganar dinero"
        }
        typeColor={"subtitleFont"}
      />
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export { AddAirbnb };
