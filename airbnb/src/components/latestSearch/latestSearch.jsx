import { Title } from "../title";
import { Subtitle } from "../subtitle";
import styles from "./index.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function LatestSearch() {
  return (
    <div className={styles.cardLastLocation}>
      <div className={styles.icon}>
        <AccessTimeIcon />
      </div>
      <div  className={styles.infoLastSearch}>
        <Title text={"Usaquen, Bogotá D.C, Colombia"} />
        <Subtitle text={"21 ene -30 ene"} />
      </div>
    </div>
  );
}

export { LatestSearch };
