import { Title } from "../title";
import { Score } from "../score";
import { Subtitle } from "../subtitle";
import { PriceFormatter } from "../priceFormatter/priceFormatter";
import styles from "./index.module.css";
import { AwardTag } from "../awardTag";

function Card({ notifySelection }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.image}>
        <div className={styles.tags}>
          <AwardTag typeAward={"Favorito entre huéspedes"} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "rgba(0, 0, 0, 0.5)",
              height: "24px",
              width: "24px",
              stroke: "white",
              strokeWidth: "2",
              overflow: "visible",
            }}
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        </div>

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