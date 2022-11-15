import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Banner />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
