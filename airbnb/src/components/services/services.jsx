import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function Services() {
  const data = [
    "Wifi",
    "Lavadora",
    "Aire acondicionado",
    "Cocina",
    "Zona de trabajo",
    "Calefaccion",
  ];
  const [sourceList, setSourceList] = useState(data);
  const [checkReport, setCheckReport] = useState([]);

  useEffect(() => {
    setCheckReport(new Array(sourceList.length));
  }, [sourceList]);

  const notifyClick = (index, item) => {
    const copy = [...checkReport];
    const current = copy[index] ?? false;
    copy[index] = !current;
    setCheckReport(copy);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.boxOptions}>
        <div
          style={{
            borderBottom: "1px solid black",
            width: "100%",
            padding: "4px",
          }}
        >
          Source
        </div>
        <ul>
          {sourceList.map((item, index) => (
            <li key={index} onClick={() => notifyClick(index, item)}>
              {checkReport[index] ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
              {console.log("sourceList2: " + sourceList)}
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { Services };
