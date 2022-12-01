import React, { useState } from "react";

const Carrousel = ({pictures}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "25px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${pictures[currentIndex]})`,
  };
  console.log(pictures[0]);
  console.log(pictures[1]);
  return (
    <div className="containerStyles">
      <div style={slideStyles}></div>
    </div>
  )
};

export default Carrousel;
