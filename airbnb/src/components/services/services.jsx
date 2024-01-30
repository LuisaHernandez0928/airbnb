import { useState } from "react";
import { serviceOptions } from "./utils";
import { TitleFilter } from "../titleFilter";
import { Title } from "../title";
import styles from "./index.module.css";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function Services() {
  const [checkReport, setCheckReport] = useState([]);
  const [acordeon, setAccordeon] = useState(false);
  const [sourceList, setsourceList] = useState(serviceOptions.comodidades);

  const notifyClick = (index) => {
    const copy = [...checkReport];
    const current = copy[index] ?? false;
    copy[index] = !current;
    setCheckReport(copy);
  };

  const showServices = () => {
    setAccordeon(!acordeon);
  };

  const showMoreSectios = (data, subtitle) => {
    return (
      <div className={styles.sectionContainer}>
        <Title text={subtitle} cardFilter={true} />
        <ul className={styles.boxOptions}>
          {data.map((item, index) => (
            <li key={index} onClick={() => notifyClick(index)}>
              {checkReport[index] ? (
                <CheckBoxIcon sx={{ fontSize: 30 }} />
              ) : (
                <CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: 30 }} />
              )}
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <TitleFilter text={"Servicios"} />
      {showMoreSectios(serviceOptions.comodidades, "Comodidades")}
      <div className={acordeon ? styles.sectionContainer : styles.noExtend}>
        {showMoreSectios(serviceOptions.caracteristicas, "Caracteristicas")}
        {showMoreSectios(serviceOptions.seguridad, "Seguridad")}
      </div>
      <button className={styles.showButton} onClick={(e) => showServices(e)}>
        {acordeon ? (
          <Title text={"Muestra menos"} cardFilter={true} />
        ) : (
          <Title text={"Muestra más"} cardFilter={true} />
        )}
      </button>
    </div>
  );
}

export { Services };
