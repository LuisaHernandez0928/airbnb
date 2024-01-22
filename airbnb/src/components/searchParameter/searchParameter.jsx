import { Subtitle } from "../subtitle";
import { Title } from "../title";
import styles from "./index.module.css";

function SearchParameter({ title, subtitle, itemSelected }) {

  const notifySelected = (title) => {
    itemSelected(title);
  };

  return (
    <div className={styles.boxSeparator} onClick={() => notifySelected(title)}>
      <Title text={title} />
      <Subtitle text={subtitle} />     
    </div>
  );
}

export { SearchParameter };
