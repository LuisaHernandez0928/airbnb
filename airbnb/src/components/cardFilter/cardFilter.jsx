import styles from "./index.module.css";

function CardFilter({ text, icon, description, notifyClick }) {
  return (
    <button className={styles.cardContainer} onClick={() => notifyClick()}>
      <span>{icon}</span>
      <span className={styles.textContainer}>
        {text}
        <span className={styles.descriptionContainer}>{description}</span>
      </span>
    </button>
  );
}

export { CardFilter };
