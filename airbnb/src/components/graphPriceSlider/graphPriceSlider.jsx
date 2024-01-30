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

  let pricesSorted = 
  airbnbs.sort(function(a, b){return a - b});

  
  console.log(pricesSorted);
  let distance = maxValue - minValue;

  let barsAmount = 45;

  let range = distance / barsAmount;
  let barsRange = [];

  const crateBarraRange = () => {
    for (let i = 0; i <= barsAmount; i++) {
      let dinamyBar=[]
      dinamyBar.push()
    }
  };

  console.log(minValue);
  console.log(maxValue);
  return <div className={styles.graphContainer}>Graph</div>;
}

export { GraphPriceSlider };
