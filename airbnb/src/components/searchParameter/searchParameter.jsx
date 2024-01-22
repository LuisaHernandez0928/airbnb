import { Subtitle } from "../subtitle";
import { Title } from "../title";
import styles from "./index.module.css";

function SearchParameter({ title, subtitle, itemSelected, notifyLocation, isInput }) {
  
  const notifySelected = (title) => {
    itemSelected(title);
  };
  const locationSearched = (e) => {
    notifyLocation(e.target.value)
  }

  return (
    <div className={styles.boxSeparator} onClick={() => notifySelected(title)}>
      <Title text={title} />
      {isInput ? <input type="text" placeholder="Explora destinos" className="subtitleFont" onChange={(e) =>locationSearched(e)}/> : <Subtitle text={subtitle} />}
    </div>
  );
}

export { SearchParameter };
