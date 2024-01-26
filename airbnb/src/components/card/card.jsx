import { Title } from "../title";
import { Score } from "../score";
import styles from "./index.module.css";
import { Subtitle } from "../subtitle";
import { PriceFormatter } from "../priceFormatter/priceFormatter";

function Card({ notifySelection }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.image}>
        <img
          src="https://a0.muscache.com/im/pictures/31fb1db6-ad71-4e4c-84e1-485eeffe4cb9.jpg?im_w=720"
          alt="La calera"
        />
      </div>
      <div className={styles.headerInfo}>
        <Title text={"La Calera, Colombia"} />
        <Score value={4.94} />
      </div>
      <div className={styles.bodyInfo}>
        <Subtitle text={"A 20 kilómetros de distancia"} typeColor={false} />
        <Subtitle text={"4-9 de febrero"} typeColor={false} />
      </div>
      <PriceFormatter priceUSD={52} currency={"COP"} />
    </div>
  );
}

export { Card };
