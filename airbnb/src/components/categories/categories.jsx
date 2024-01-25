import styles from './index.module.css'

function Categories({notifySelection}) {
  return (<div className={styles.categoryContainer}>
    <div>Imagen</div>
    <div>Nombre</div>
  </div>)
}

export {Categories}