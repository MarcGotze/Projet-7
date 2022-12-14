import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("logements.json").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="bannerWrapper">
          <Banner bannerContent={"./images/HOME_BANNER.png"} />
          <h3 className="banner__txt">Chez vous, partout et ailleurs</h3>
        </div>
        <section className="card__box">
          {data.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </section>
      </div>
        <Footer />
    </div>
  );
};

export default Home;
