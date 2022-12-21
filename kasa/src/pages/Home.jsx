import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("logements.json")
      .then(res => res.json())
      .then(body => setData(body));
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="bannerWrapper">
          <Banner bannerContent={"./images/HOME_BANNER.png"} bannerTitle={"Chez vous, partout et ailleurs"}/>
        </div>
        <section className="card__box">
          {data.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </section>
      </div>
        <Footer />
    </>
  );
};

export default Home;
