import styles from "./index.module.css";
import { Title } from "../../components/title";
import { Subtitle } from "../../components/subtitle";

function Features() {
  return (
    <div className={styles.featuresContainer}>
      <Title text={"Describe las caracteristicas de tu espacio"} />
      <div>cuantas habitaciones, banos, camas</div>
      <div>direccion de tu espacio: pais, direccion, ciudad, estado</div>
      <div> cuantas personas pueden alojarse</div>
      <div>
        cuentale a los huespedes todo lo que el espacio puede ofrecer
        (servicios)
      </div>
      <div>agrega fotos</div>
      <div>ponle un titulo a tu espacio y escribe tu descripcion</div>
      <div>configuracion del tipo de reservacion</div>
      <div>establecer precio y disponibilidad</div>
    </div>
  );
}

export { Features };
