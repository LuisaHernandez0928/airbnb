import React, { useState } from "react";
import styles from './index.module.css'

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>&lt;</button>
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <button onClick={nextImage}>&gt;</button>
    </div>
  );
}

export { Carousel };
