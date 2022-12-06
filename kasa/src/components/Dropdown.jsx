import React from "react";
import useCollapse from "react-collapsed";

const Dropdown = ({ title, content, array, style }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  console.log(content);
  console.log(array);
  return (
    <div className="aboutBox">
      <div className={`collapsible${style}`} >
        <div className={`collapsible__header${style}`} {...getToggleProps()}>
          {isExpanded ? title : title}
          <img
            className={isExpanded ? `collapsible__up${style}` : `collapsible__down${style}`}
            src="../images/ARROW_D.png"
            alt="Flèche"
          />
        </div>
        <div {...getCollapseProps()}>
          <div className={`collapsible__content${style}`}>
            {/* {title === "Equipements" ? <ul>{array.map(item => (<li key={item}>{item}</li>))}</ul> : <p>{content}</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
