import styles from "./index.module.css";

function CardFilter({ text, icon, description, notifyClick, width, height }) {
  return (
    <button
      className={styles.cardContainer}
      style={{ width: width, heigh: height }}
      onClick={(e) => notifyClick(e)}
    >
      <span>{icon}</span>
      <span className={styles.textContainer}>
        {text}
        <span className={styles.descriptionContainer}>{description}</span>
      </span>
    </button>
  );
}

export { CardFilter };
