import React from "react";

const Banner = ({ bannerContent, bannerTitle }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={bannerContent} alt="paysage sauvage" />
      <h3 className="banner__txt">{bannerTitle}</h3>
    </div>
  );
};

export default Banner;
