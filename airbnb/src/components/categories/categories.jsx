import { useState } from "react";
import { Subtitle } from "../subtitle";
import styles from "./index.module.css";

function Categories({ image, name, notifySelection }) {
  const [selected, setSelected] = useState(false);

  const [colorSubtitle, setColorSubtitle] = useState("");

  const notifyCategory = (e) => {
    notifySelection(e.target.innerText);
    console.log(e);
    setSelected(true);
    setColorSubtitle("black");
  };

  console.log(colorSubtitle);

  return (
    <div
      className={selected ? styles.selectedStyle : styles.categoryContainer}
      onClick={(e) => notifyCategory(e)}
    >
      <img className={styles.image} src={image} alt={name} />
      <Subtitle text={name} typeColor={colorSubtitle} />
    </div>
  );
}

export { Categories };
