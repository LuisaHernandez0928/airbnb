import { Title } from "../title";
import { Subtitle } from "../subtitle";
import styles from "./index.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function LatestSearch({ data }) {
  console.log(data);
  return data.map((busqueda, i) => (
    <div key={i} className={styles.cardLastLocation}>
      <div className={styles.icon}>
        <AccessTimeIcon />
      </div>
      <div className={styles.infoLastSearch}>
        <Title text={busqueda.location} />
        <Subtitle text={"21 ene -30 ene"} />
      </div>
    </div>
  ));
}

export { LatestSearch };
