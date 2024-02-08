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
        typeColor={"blackSubtitle"}
      />
      <div className={styles.pagesOptsContainer}>
        <div className={styles.step}>
          <img src="https://imageio.forbes.com/specials-images/imageserve/602e495c5cb6c83cd1d773e9/Airbnb-pandemic-host-earn-extra-money/0x0.jpg?format=jpg&width=960" alt="typeHouse" />
          <Subtitle
            text={"Categoriza tu espacio"} typeColor={"subtitleFont"} />
        </div>
        <div className={styles.step}>
        <img src="https://www.creativefabrica.com/wp-content/uploads/2022/09/29/Airbnb-Host-House-Rules-and-Check-Out-Graphics-39532734-2-580x386.jpg" alt="ammenities" />
          <Subtitle
            text={"Comodidades que ofreces"} typeColor={"subtitleFont"} />
        </div>
        <div className={styles.step}>
        <img src="https://workstudyvisa.com/wp-content/uploads/2022/04/become-airbnb-host-in-canada.jpg" alt="finishProcess" />
          <Subtitle
            text={"Publica"} typeColor={"subtitleFont"} />
        </div>
      </div>
    </div>
  );
}

export { AddAirbnb };
