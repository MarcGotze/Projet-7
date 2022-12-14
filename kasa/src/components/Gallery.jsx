import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Gallery = ({pictures}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length -1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  const slideStyles = {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "25px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${pictures[currentIndex]})`,
  };
  
  return (
    <section className="containerStyles">
      <div className="arrow-box">
        <BiChevronLeft className={pictures.length > 1 ? "left-arrow" : "hidden-arrow"} onClick={prevSlide} />
        <BiChevronRight className={pictures.length > 1 ? "right-arrow" : "hidden-arrow"} onClick={nextSlide} />
      </div>
      <div style={slideStyles}></div>
    </section>
  )
};

export default Gallery;
