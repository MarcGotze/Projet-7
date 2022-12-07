import React from "react";
import useCollapse from "react-collapsed";

const Dropdown = ({ title, content, array, dropdownStyle }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="aboutBox">
      <div className={`collapsible${dropdownStyle}`} >
        <div className={`collapsible__header${dropdownStyle}`} {...getToggleProps()}>
          {isExpanded ? title : title}
          <img
            className={isExpanded ? `collapsible__up${dropdownStyle}` : `collapsible__down${dropdownStyle}`}
            src="../images/ARROW_D.png"
            alt="Flèche"
          />
        </div>
        <div {...getCollapseProps()}>
          <div className={`collapsible__content${dropdownStyle}`}>
            {title === "Equipements" ? <ul>{Array.isArray(array) ? array.map(item => (<li key={item}>{item}</li>)) : []}</ul> : <p>{content}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
