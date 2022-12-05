import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="error">
          <h1 className="error__404">404</h1>
          <h3 className="error__txt">
            Oups! La page que vous demandez n'existe pas.
          </h3>
          <NavLink to="/">
            <p className="error__return">Retourner sur la page d'accueil</p>
          </NavLink>
        </div>
        <Footer />
      </div>  
    </div>
  );
};

export default Notfound;
