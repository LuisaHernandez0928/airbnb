import { useState } from "react";
import styles from "./index.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function CheckBox() {
  const [selectedOption, setSelectedOption] = useState(false);

  if (!selectedOption) {
    return (
      <div
        className={styles.checkBox}
        onClick={() => setSelectedOption(!selectedOption)}
      ></div>
    );
  } else {
    return (
      <CheckBoxIcon
        sx={{ fontSize: 30 }}
        onClick={() => setSelectedOption(!selectedOption)}
      />
    );
  }
}
export { CheckBox };
