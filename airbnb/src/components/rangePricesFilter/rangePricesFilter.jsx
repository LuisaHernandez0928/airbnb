import { useState, memo} from "react";
import { DescriptionFilter } from "../descriptionFilter";
import { GraphPriceSlider } from "../graphPriceSlider";
import { MultiRangeSlider } from "../priceSlider/priceSlider";
import { TitleFilter } from "../titleFilter";
import styles from "./index.module.css";

function RangePrices({ data, handlePriceChanges }) {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(416);

  console.log(min, max);

  return (
    <div className={styles.layoutPrices}>
      <div className={styles.headerText}>
        <TitleFilter text={"Rango precios"} />
        <DescriptionFilter
          text={"Precios por noche sin incluir impuestos y tarifas"}
        />
      </div>
      <div className={styles.graphSlider}>
        <GraphPriceSlider data={data} minPrice={Number(min)} maxPrice={Number(max)}/>
        <MultiRangeSlider
          min={20}
          max={416}
          onChange={({ min, max }) => {
            setMin(min);
            setMax(max);
            handlePriceChanges(min, max);
          }}
        />
      </div>
    </div>
  );
  
};
const MemoizedRangePrices = memo(RangePrices);

export {MemoizedRangePrices};
