import React from "react";

const Tag = ({tag}) => {
  return (
    <div className="tag">
      <p className="tag__content">{tag}</p>
    </div>
  );
};

export default Tag;
