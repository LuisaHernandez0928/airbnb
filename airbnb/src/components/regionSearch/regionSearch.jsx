import styles from './index.module.css'
import {Subtitle} from '../subtitle'

function RegionSearch({location}) {
  return (<div className={styles.cardRegion}>
    <img className={styles.mapaRegion} src="mapaMundi.png" alt="mapa"/>
    <Subtitle text={location} />
  </div>)
}

export {RegionSearch}