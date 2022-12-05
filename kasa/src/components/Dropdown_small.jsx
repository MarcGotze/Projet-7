import React from "react";
import useCollapse from "react-collapsed";

const Dropdown = ({ content, title }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="aboutBox-S ">
      <div className="collapsible-S">
        <div className="collapsible-S__header" {...getToggleProps()}>
          {isExpanded ? title : title}
          <img
            className={isExpanded ? "collapsible-S__up" : "collapsible-S__down"}
            src="../images/ARROW_D.png"
            alt="Flèche"
          />
        </div>
        <div {...getCollapseProps()}>
          <div className="collapsible-S__content">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;