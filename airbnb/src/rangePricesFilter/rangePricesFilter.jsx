import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { DescriptionFilter } from "../components/descriptionFilter";
import { TitleFilter } from "../components/titleFilter";
import styles from "./index.module.css";

function RangePrices() {
  const [range, setRange] = useState([30, 70]); // Rango de precios inicial

  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  return (
    <div className={styles.rangePricesLayout}>
      <div className={styles.headerText}>
        <TitleFilter text={"Rango precios"} />
        <DescriptionFilter
          text={"Precios por noche sin incluir impuestos y tarifas"}
        />
      </div>
      <div>
        <label>Precio Mínimo: ${range[0]}</label>
        <label style={{ marginLeft: "10px" }}>Precio Máximo: ${range[1]}</label>

        <Slider
          min={0}
          max={100}
          step={1}
          range
          value={range}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
}

export { RangePrices };
