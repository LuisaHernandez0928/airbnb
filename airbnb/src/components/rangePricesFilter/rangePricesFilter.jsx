import { DescriptionFilter } from "../descriptionFilter";
import { GraphPriceSlider } from "../graphPriceSlider";
import { MultiRangeSlider } from "../priceSlider/priceSlider";
import { TitleFilter } from "../titleFilter";
import styles from "./index.module.css";

function RangePrices({ data }) {
  return (
    <div className={styles.layoutPrices}>
      <div className={styles.headerText}>
        <TitleFilter text={"Rango precios"} />
        <DescriptionFilter
          text={"Precios por noche sin incluir impuestos y tarifas"}
        />
      </div>
      <GraphPriceSlider data={data} />
      <MultiRangeSlider
        min={0}
        max={100000}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </div>
  );
}

export { RangePrices };
