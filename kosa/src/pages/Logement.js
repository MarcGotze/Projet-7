import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Footer from "../components/Footer";

const Logement = () => {
  const logementId = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("../logements.json").then((res) => setData(res.data));
  }, []);

  const logement = data.find((element) => element.id === logementId.id);

  console.log(data);
  console.log(logementId);
  console.log(logement);

  return (
    <div>
      <div className="wrapper item">
        <Header />
        <Carrousel />
        <h2 className="item__title">Test test test</h2>
        <p className="item__city">Test, test</p>
        <Tag />
      </div>
      <Footer />
    </div>
  );
};

export default Logement;
