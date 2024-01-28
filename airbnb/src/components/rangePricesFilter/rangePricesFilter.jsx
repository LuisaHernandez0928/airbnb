import { DescriptionFilter } from "../descriptionFilter";
import { MultiRangeSlider} from "../priceSlider/priceSlider";
import { TitleFilter } from "../titleFilter";
import styles from "./index.module.css";

function RangePrices() {

  return (
    <div>
      <div className={styles.headerText}>
        <TitleFilter text={"Rango precios"} />
        <DescriptionFilter
          text={"Precios por noche sin incluir impuestos y tarifas"}
        />
      </div>
      <div>
      <MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    /> 
      </div>
    </div>
  );
}

export { RangePrices };
