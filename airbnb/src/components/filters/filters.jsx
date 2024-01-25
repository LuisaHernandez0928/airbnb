import { Title } from '../title';
import styles from './index.module.css'
import TuneIcon from '@mui/icons-material/Tune';

function Filters({data}) {
  return (<button className={styles.filtersContainer}>
    <TuneIcon />
    <Title text={"Filtros"}/></button>)
}

export {Filters}