import React, { useState } from "react";

const Carrousel = ({pictures}) => {
  const [currentIndex, setCurrentUser] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "25px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${pictures[currentIndex]})`,
  };

  return (
    <div className="containerStyles">
      <div style={slideStyles}></div>
    </div>
  )
};

export default Carrousel;
