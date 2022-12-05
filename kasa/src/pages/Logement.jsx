import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Footer from "../components/Footer";
import Dropdown_small from "../components/Dropdown_small";

const Logement = () => {
  const params = useParams();
  const [logements, setLogements] = useState(null);
  const [logement, setLogement] = useState({});
  const [tags, setTags] = useState([]);
  const [rating, setRating] = useState ("");
  const [host, setHost] = useState ({});
  const [pictures, setPictures] = useState([]);
  const [description, setDescription] = useState("");
  const [equipments, setEquipments] = useState([]);
  let navigate = useNavigate();

  //Récupération des données du json via un axios.get
  useEffect(() => {
    axios.get("../logements.json").then((res) => {
      setLogements(res.data);
    });
  }, []);

  //Settings des données dans les states et gestion des erreurs
  useEffect(() => {
    //Si logements est null, on break
    if (logements === null){
      return;
    }

    //Sinon on continue l'execution du code afin de récupérer les données
    const logement = logements.find((element) => element.id === params.id);
    if(logement){
      setLogement(logement);
      setTags(logement.tags);
      setRating(logement.rating)
      setHost(logement.host);
      setPictures(logement.pictures);
      setDescription(logement.description);
      setEquipments(logement.equipments);

    //Si logement n'est pas un truthy, alors nous sommes redirigé vers notfound  
    } else {
      navigate("/notfound");
    }
  }, [logements, params.id]);

  console.log(description);
  return (
    <div>
      <div className="wrapper item">
        <Header />
        <div>
          <Carrousel pictures={pictures}/>
        </div>
        <div className="logementWrapper">
          <div className="logementTitle">
            <h2 className="item__title">{logement.title}</h2>
            <p className="item__city">{logement.location}</p>
          </div>

          <div className="host">
            <p className="host__name">{host.name}</p>
            <img className="host__picture" src={host.picture} alt="Photo de l'hôte" />
          </div>
        </div>

        <div className="logementWrapper">
          <div className="tagContainer">
            {tags.map((tag) => (
              <Tag tag={tag} />
            ))}
          </div>
          <div className="starsContainer">
            <Rating rating={rating} />
          </div>
        </div>
        
        <div className="logementWrapper marginTop">
              <Dropdown_small key="Description" content={description} title="Description" />
              <Dropdown_small key="Equipments" content={equipments} title="Equipements" />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Logement;