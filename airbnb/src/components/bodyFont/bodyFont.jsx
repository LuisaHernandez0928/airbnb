import styles from './index.module.css'

function BodyFont({text, use}) {
  return (<div className={use==="search" ? styles.searchResults : styles.estandar}>{text}</div>)
}

export {BodyFont};