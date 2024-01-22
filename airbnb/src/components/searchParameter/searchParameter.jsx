import styles from "./index.module.css";

function SearchParameter({ title, subtitle, itemSelected }) {

  const notifySelected = (title) => {
    itemSelected(title);
  };

  return (
    <div className={styles.boxSeparator} onClick={() => notifySelected(title)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>      
    </div>
  );
}

export { SearchParameter };
