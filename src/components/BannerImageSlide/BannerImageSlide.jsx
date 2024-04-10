import { useState } from "react";
import styles from "./BannerImageSlide.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function BannerImageSlide({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    console.log("next");
  }
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    console.log("prev");
  }

  return (
    <div className={styles.container}>
      <FaChevronLeft
        onClick={handlePrevious}
        className={`${styles.arrow} ${styles["arrow-left"]}`}
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={
                currentSlide === index
                  ? styles["current-image"]
                  : `${styles["current-image"]} ${styles.slide}`
              }
            />
          ))
        : null}

      <FaChevronRight
        onClick={handleNext}
        className={`${styles.arrow} ${styles["arrow-right"]}`}
      />
    </div>
  );
}

export default BannerImageSlide;
