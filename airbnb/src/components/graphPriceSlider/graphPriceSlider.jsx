import { useState } from "react";
import styles from "./index.module.css";

function GraphPriceSlider({ data, minPrice, maxPrice }) {
  const [indexMin, setIndexMin] = useState(0);
  const [indexMax, setIndexMax] = useState(0);
  let airbnbs = [];
  for (let i = 1; i < Object.keys(data).length; i++) {
    for (let j = 0; j < Object.keys(data[i].availability).length; j++) {
      airbnbs.push(data[i].availability[j].price);
    }
  }

  let minValue = Math.min(...airbnbs);
  let maxValue = Math.max(...airbnbs);

  let pricesSorted = airbnbs.sort(function (a, b) {
    return a - b;
  });

  let distance = maxValue - minValue;

  let barsAmount = 43;

  let range = Math.round(distance / barsAmount);
  let barsRange = [];

  const createBarraRange = () => {
    for (let i = 0; i <= barsAmount; i++) {
      let val1 = minValue;
      let val2 = val1 + range;
      minValue = val2;
      barsRange.push([val1, val2]);
    }
    console.log(barsRange);
    return barsRange;
  };

  createBarraRange();

  let heigthRanges = [];

  const counterAirbnbRange = () => {
    for (let j = 0; j < barsRange.length; j++) {
      let count = 0;
      for (let i = 0; i < pricesSorted.length; i++) {
        if (
          pricesSorted[i] < barsRange[j][1] &&
          pricesSorted[i] >= barsRange[j][0]
        ) {
          count++;
        }
      }
      heigthRanges.push(count);
    }
    return heigthRanges;
  };

  counterAirbnbRange();

  let maxHeightReference = Math.max(...heigthRanges);

  const heightEquivalences = (max, current) => {
    let percentaje = current * (100 / max);
    return percentaje;
  };

  const identifyIndex = (minPrice, maxPrice) => {
    for (let i = 0; i < barsRange.length; i++) {
      if (barsRange[i][0] === minPrice) {
        setIndexMin(i);
      }
      if (barsRange[i][0] === maxPrice) {
        setIndexMax(i);
      }
    }
  };

  const identifyMaxIndex = (minPrice, maxPrice) => {
    let indexMin = 0;
    let indexMax = 0;
    for (let i = 0; i < barsRange.length; i++) {
      if (barsRange[i][0] === minPrice) {
        indexMin = i;
      }
      if (barsRange[i][1] === maxPrice) {
        indexMax = i;
      }
    }
    return indexMin;
  };

  const graphPrices = () => {
    return (
      <div className={styles.graphContainer}>
        {heigthRanges.map((heigthRange, i) => (
          <div
            key={i}
            style={{
              width: "12px",
              height:
                "" + heightEquivalences(maxHeightReference, heigthRange) + "%",
              backgroundColor: "#222",
              borderTopRightRadius: "2px",
              borderTopLeftRadius: "2px",
              marginRight: "1.25px",
              flexShrink: 0,
            }}
          ></div>
        ))}
      </div>
    );
  };

  return <div>{graphPrices()}</div>;
}

export { GraphPriceSlider };
