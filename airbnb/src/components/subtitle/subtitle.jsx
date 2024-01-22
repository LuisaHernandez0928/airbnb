import styles from './index.modules.css'

function Subtitle({text}) {
  return (<div className={styles.subtitle}>{text}</div>)
}

export {Subtitle}