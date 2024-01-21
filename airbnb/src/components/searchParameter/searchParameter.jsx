import styles from './index.module.css'

function SearchParameter ({title, subtitle}) {
  return(
    <div className={styles.boxSeparator}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  )
}

export { SearchParameter}