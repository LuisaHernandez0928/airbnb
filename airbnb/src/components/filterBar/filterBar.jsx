import { useState } from "react";
import { Categories } from "../categories";
import { Filters } from "../filters/filters";
import styles from "./index.module.css";

function FilterBar({ data }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const notifyCategorySelected = (category) => {
    setSelectedCategory(category)
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.typeHousesContainer}>
      <Categories image={"https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"} name={"Casas rurales"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Cabaña"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Piscinas increibles"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Parques nacionales"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Frente al lago"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Esqui"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Vistas increibles"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Casas historicas"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Playa"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Mansiones"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Minicasa"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Bed and breakfast"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Novedad"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Populares"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Diseño"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Autosuficiente"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Tropical"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Casa del arbol"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Islas"} notifySelection={notifyCategorySelected}/>
      <Categories image={"https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"} name={"Castillos"} notifySelection={notifyCategorySelected}/>
      </div>
      <div className={styles.filterContainer}>
        <Filters data={data}/>
      </div>
    </div>
  );
}

export { FilterBar };
