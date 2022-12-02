import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Footer from "../components/Footer";

const Logement = () => {
  const params = useParams();
  const [logements, setLogements] = useState(null);
  const [logement, setLogement] = useState({});
  const [tags, setTags] = useState([]);
  const [id, setId] = useState("");
  const [equipments, setEquipments] = useState ([]);
  const [description, setDescription] = useState ({});
  const [host, setHost] = useState ({});
  const [pictures, setPictures] = useState([]);
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
      setEquipments(logement.equipments);
      setDescription(logement.descritpiton);
      setHost(logement.host);
      setId(logement.id);
      setPictures(logement.pictures);

    //Si logement n'est pas un truthy, alors nous sommes redirigé vers notfound  
    } else {
      navigate("/notfound");
    }
  }, [logements, params.id]);

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

        <div className="tagContainer">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
        <div className="dropdownContainer">

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Logement;