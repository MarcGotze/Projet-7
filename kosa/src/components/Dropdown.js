import React from "react";
import useCollapse from "react-collapsed";

const Dropdown = ({ content }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="aboutBox">
      <div className="collapsible">
        <div className="collapsible__header" {...getToggleProps()}>
          {isExpanded ? content.title : content.title}
          <img
            className="collapsible__arrow"
            src="./images/ARROW_D.png"
            alt="Flèche"
          />
        </div>
        <div {...getCollapseProps()}>
          <div className="collapsible__content">
            <p>{content.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
