import { useEffect, useState, useRef } from "react";
import styles from "./index.module.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [maxInput, setMaxInput] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const modifyMaxSlider = (e) => {
    if (e.target.value === "") {
      setMaxVal(max);
      setMaxInput(e.target.value);
    } else if (e.target.value <= minVal) {
      setMaxVal(minVal + 1);
      setMaxInput(e.target.value);
    } else if (e.target.value >= max) {
      setMaxVal(max);
      setMaxInput(e.target.value);
    } else if (!Number(e.target.value)) {
      setMaxVal(max);
      setMaxInput(max);
    } else {
      setMaxInput(e.target.value);
      setMaxVal(e.target.value);
    }
  };

  const modifyMinSlider = (e) => {
    e.target.value === ""
      ? setMinVal(min)
      : setMinVal(
          Number(e.target.value) ? Number(e.target.value) : e.target.value
        );
  };

  useEffect(() => {
    minValRef.current = minVal;
    maxValRef.current = maxVal;
  }, [minVal, maxVal]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = Math.round(((minVal - min) / (max - min)) * 100);
    const maxPercent = Math.round(
      ((maxValRef.current - min) / (max - min)) * 100
    );
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, min, max]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = Math.round(
      ((minValRef.current - min) / (max - min)) * 100
    );
    const maxPercent = Math.round(
      ((maxValRef.current - min) / (max - min)) * 100
    );

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, min, max]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal});
  }, [minVal, maxVal, onChange]);

  return (
    <div className={styles.container}>
      <div className={styles.barraConlosCirculos}>
        <input
          type="range"
          min={min}
          max={max}
          step={9}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className={styles.thumb + " " + styles.thumbLeft}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={9}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
            setMaxInput(value);
          }}
          className={styles.thumb + " " + styles.thumbRight}
        />
        <div className={styles.slider}>
          <div className={styles.sliderTrack} />
          <div ref={range} className={styles.sliderRange} />
        </div>
      </div>
      <div className={styles.inputSlider}>
        <div className={styles.inputLeftValue}>
          <div className={styles.fontFormat}>Minimo</div>
          <div className={styles.priceFormat}>
            <span aria-hidden="true">$</span>
            <input
              type="text"
              value={minVal}
              onChange={(e) => modifyMinSlider(e)}
            />
          </div>
        </div>
        <div className={styles.separator}>___</div>
        <div className={styles.inputRightValue}>
          <div className={styles.fontFormat}>Maximo</div>
          <div className={styles.priceFormat}>
            <span aria-hidden="true">$</span>
            <input
              type="text"
              value={maxInput}
              onChange={(e) => modifyMaxSlider(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MultiRangeSlider };
