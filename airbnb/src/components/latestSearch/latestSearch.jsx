import { Title } from "../title";
import { Subtitle } from "../subtitle";
import styles from "./index.module.css";

function LatestSearch() {
  return (
    <div className={styles.cardLastLocation}>
      <Title text={"Usaquen, Bogotá D.C, Colombia"} />
      <Subtitle text={"21 ene -30 ene"} />
    </div>
  );
}

export { LatestSearch };
