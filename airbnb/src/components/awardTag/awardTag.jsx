import { Title } from "../title";
import styles from "./index.module.css";

function AwardTag({ typeAward }) {
  return (
    <button className={styles.awardContainer}>
      <Title text={typeAward} />
    </button>
  );
}

export { AwardTag };
