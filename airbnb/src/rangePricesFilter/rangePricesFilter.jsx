import { DescriptionFilter } from '../components/descriptionFilter'
import { TitleFilter } from '../components/titleFilter'
import styles from './index.module.css'

function RangePrices(){
  return (<div className={styles.rangePricesLayout}>
    <TitleFilter text={"Rango precios"} />
    <DescriptionFilter text={"Precios por noche sin incluir impuestos y tarifas"} />
  </div>)
}

export {RangePrices}