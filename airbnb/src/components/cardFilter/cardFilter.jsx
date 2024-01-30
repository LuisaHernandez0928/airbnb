import styles from "./index.module.css";

function CardFilter({ text, icon, description, notifyClick }) {
  return (
    <button className={styles.cardContainer} onClick={() => notifyClick()}>
      <span>{icon}</span>
      <span className={styles.textContainer}>
        {text}
        {description}
      </span>
    </button>
  );
}

export { CardFilter };
