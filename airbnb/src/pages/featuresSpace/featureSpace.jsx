import styles from "./index.module.css";
import { Title } from "../../components/title";
import { HabitacionesCamas } from "../../components/habitacionesCamas";
import { Services } from "../../components/services/services";
import { OpcionesReserva } from "../../components/opcionesReserva/opcionesReserva";
import { PeopleCounter } from "../../components/peopleCounter/peopleCounter";

function Features() {
  return (
    <div className={styles.featuresContainer}>
      <Title text={"Describe las caracteristicas de tu espacio"} />
      <HabitacionesCamas header={"Cuantas habitaciones, banos, camas ofreces"}/>
      <div>direccion de tu espacio: pais, direccion, ciudad, estado</div>
      <PeopleCounter peopleKind={ "Adultos" } description={"Edad 13 anos o mas"} />
      <PeopleCounter peopleKind={ "Bebes" } description={"Menos de 2 anos"} />
      <PeopleCounter peopleKind={ "Mascotas" } description={"Permite mascotas de seguridad"} />
      <Services header={"Comodidades que ofreces"}/>
      <div>agrega fotos</div>
      <div>ponle un titulo a tu espacio y escribe tu descripcion</div>
      <OpcionesReserva header={"Configura el tipo de reserva"}/>
      <div>Precio y disponibilidad</div>
    </div>
  );
}

export { Features };
