import { useState } from "react";
import { getAllSections, serviceOptions } from "./utils";
import { TitleFilter } from "../titleFilter";
import { Title } from "../title";
import { CheckBox } from "../checkbox";
import styles from "./index.module.css";

function Languages() {
  const [checkReport, setCheckReport] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const amenities = getAllSections(serviceOptions);

  const notifyClick = (item) => {
    setCheckReport([...checkReport, item]);
  };

  const showServices = () => {
    setShowMore(!showMore);
  };

  const showMoreSectios = (data) => {
    return (
      <div className={styles.sectionContainer}>
        <ul className={styles.boxOptions}>
          {data.map((item, index) => (
            <li key={index} onClick={() => notifyClick(item)}>
              <CheckBox />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <TitleFilter text={"Idiomas"} />
      {showMoreSectios(amenities[0])}
      <div className={showMore ? styles.sectionContainer : styles.noExtend}>
        {showMoreSectios(amenities[1])}
        {showMoreSectios(amenities[2])}
        {showMoreSectios(amenities[3])}
      </div>
      <button className={styles.showButton} onClick={() => showServices()}>
        {showMore ? (
          <Title text={"Muestra menos"} cardFilter={true} />
        ) : (
          <Title text={"Muestra más"} cardFilter={true} />
        )}
      </button>
    </div>
  );
}

export { Languages };
