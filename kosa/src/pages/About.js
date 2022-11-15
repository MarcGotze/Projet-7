import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Banner />
        <Dropdown />
      </div>
      <Footer />
    </div>
  );
};

export default About;
