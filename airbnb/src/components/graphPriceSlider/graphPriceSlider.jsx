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

  let noDuplicates = pricesSorted.filter((item,index)=>{
    return pricesSorted.indexOf(item) === index;
  })

  let distance = maxValue - minValue;

  let barsAmount = 45;

  let range =Math.round(distance / barsAmount); 
  let barsRange = [];

  const createBarraRange = () => {
    for (let i = 0; i <= barsAmount; i++) {
      let dinamyBar=[]
      dinamyBar.push(noDuplicates[i])
      dinamyBar.push(noDuplicates[i] + range)
      barsRange.push(dinamyBar)
    }
    console.log(barsRange)
  };


  return <div className={styles.graphContainer}>{createBarraRange()}</div>;
}

export { GraphPriceSlider };
