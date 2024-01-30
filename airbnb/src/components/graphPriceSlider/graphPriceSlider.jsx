import styles from "./index.module.css";

function GraphPriceSlider({ data }) {

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

  let noDuplicates = pricesSorted.filter((item, index) => {
    return pricesSorted.indexOf(item) === index;
  });

  console.log(noDuplicates);

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
    return barsRange;
  };

  let rangesBar= createBarraRange();
  console.log(rangesBar);

  let heigthRanges = [];

  
  const counterAirbnbRange = () => {
    for (let j = 0; j < barsRange.length; j++) {
      let count = 0;
      for (let i = 0; i < pricesSorted.length; i++) {
        if (
          pricesSorted[i] < barsRange[j][1] &&
          pricesSorted[i] > barsRange[j][0]
        ) {
          count++;
        }
      }
      heigthRanges.push(count);
    }
    console.log(heigthRanges)
  };

  counterAirbnbRange();
  
  return <div className={styles.graphContainer}>Hola</div>;
}

export { GraphPriceSlider };
