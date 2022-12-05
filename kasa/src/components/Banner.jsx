import React from "react";

const Banner = ({ bannerContent }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={bannerContent} alt="paysage sauvage" />
    </div>
  );
};

export default Banner;
