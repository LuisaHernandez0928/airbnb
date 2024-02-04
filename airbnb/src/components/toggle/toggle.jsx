import { useState } from "react";
import styles from "./index.module.css";

function Toggle() {
  const [activate, setActivate] = useState(false);
  if (activate) {
    return (
      <div style={{ width: "fit-content", height: "54px" }}>
        <button
          className={styles.backgroundToggleActivate}
          onClick={() => setActivate(!activate)}
        >
          <div className={styles.frontToggleActive}>
            <svg
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "12px",
                width: "12px",
                fill: "currentcolor",
              }}
            >
              <path d="m10.5 1.939 1.061 1.061-7.061 7.061-.53-.531-3-3-.531-.53 1.061-1.061 3 3 5.47-5.469z"></path>
            </svg>
          </div>
        </button>
      </div>
    );
  } else {
    return (
      <div style={{ width: "fit-content", height: "54px" }}>
        <button
          className={styles.backgroundToggleInactive}
          onClick={() => setActivate(!activate)}
        >
          <div className={styles.frontToggleInactive}></div>
        </button>
      </div>
    );
  }
}

export { Toggle };
