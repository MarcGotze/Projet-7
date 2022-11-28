import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Footer from "../components/Footer";

const Logement = () => {
  const params = useParams();
  const [logements, setLogements] = useState([]);
  const [logement, setLogement] = useState({});

  useEffect(() => {
    axios.get("../logements.json").then((res) => {
      setLogements(res.data);
    });
  }, []);

  useEffect(() => {
    const logement = logements.find((element) => element.id === params.id);
    if(logement){
      setLogement(logement);
    }
  }, [logements, params.id]);

  return (
    <div>
      <div className="wrapper item">
        <Header />
        <Carrousel />
        <h2 className="item__title">{logement.title}</h2>
        <p className="item__city">{logement.location}</p>
        <Tag />
      </div>
      <Footer />
    </div>
  );
};

export default Logement;