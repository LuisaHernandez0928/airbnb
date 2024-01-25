import styles from './index.module.css'

function Categories({image, name, notifySelection}) {
  return (<div className={styles.categoryContainer}>
    <img className={styles.image} src={image} alt={name}/>
    <div>{name}</div>
  </div>)
}

export {Categories}