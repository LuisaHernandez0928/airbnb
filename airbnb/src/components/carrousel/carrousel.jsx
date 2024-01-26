import React, { useState } from "react";
import styles from "./index.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    console.log(currentImage);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carrouselContainer}>
      <button onClick={() => prevImage()}>
        <div className={styles.buttonArrows}>
          <ArrowBackIosIcon sx={{ fontSize: 12 }} />
        </div>
      </button>
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <button onClick={() => nextImage()}>
        <div className={styles.buttonArrows}>
          <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
        </div>
      </button>
    </div>
  );
}

export { Carousel };
