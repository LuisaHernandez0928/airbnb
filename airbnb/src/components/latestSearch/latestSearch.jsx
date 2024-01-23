import { Title } from "../title";
import { Subtitle } from "../subtitle";
import styles from "./index.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function LatestSearch({ data }) {
  const reverseSearches = (searches) => {
    let reversedSearches = [];
    for (let i = searches.length - 1; i >= 0; i--) {
      reversedSearches.push(searches[i]);
    }
    return reversedSearches;
  };

  return reverseSearches(data).map((busqueda, i) => (
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
