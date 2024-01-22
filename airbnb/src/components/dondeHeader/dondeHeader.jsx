import styles from './index.module.css'
import { Title } from "../title";
import { LatestSearch } from "../latestSearch";
import { RegionSearch } from "../regionSearch";

function Donde() {
  return (
      <div className={styles.dondeParam}>
        <div className={styles.busquedaReciente}>
          <Title text={"Busquedas recientes"} />
          <LatestSearch />
        </div>
        <div className={styles.busquedaRegion}>
          <Title text={"Busqueda por region"} />
          <div className={styles.cardsGrid}>
            <RegionSearch location={"Busqueda flexible"} />
            <RegionSearch location={"Colombia"} />
            <RegionSearch location={"Europa"} />
            <RegionSearch location={"Mexico"} />
            <RegionSearch location={"EstadosUnidos"} />
            <RegionSearch location={"España"} />
          </div>
        </div>
      </div>
    );
}

export { Donde}