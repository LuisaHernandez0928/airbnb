import styles from './index.module.css'

function Subtitle({text}) {
  return (<div className={styles.subtitleFont}>{text}</div>)
}

export {Subtitle}