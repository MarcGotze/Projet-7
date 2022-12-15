import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <ul className="nav__ul">
        <li className="nav__homeBtn"> 
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            Accueil
          </NavLink>
        </li>
        <li className="nav__aboutBtn">
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            A Propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
