import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Logement from "../pages/Logement";
import Notfound from "../pages/Notfound";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
