import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Footer from "../components/Footer";

const Logement = () => {
  const params = useParams();
  const [logements, setLogements] = useState([]);
  const [logement, setLogement] = useState({});
  const [tags, setTags] = useState([]);
  const [id, setId] = useState("");
  const [equipments, setEquipments] = useState ([]);
  const [description, setDescription] = useState ({});
  const [host, setHost] = useState ({});
  const [pictures, setPictures] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("../logements.json").then((res) => {
      setLogements(res.data);
    });
  }, []);

  useEffect(() => {
    const logement = logements.find((element) => element.id === params.id);
    if(logement){
      setLogement(logement);
      setTags(logement.tags);
      setEquipments(logement.equipments);
      setDescription(logement.descritpiton);
      setHost(logement.host);
      setId(logement.id);
      setPictures(logement.pictures);
    }
  }, [logements, params.id]);

  console.log(pictures);

  // useEffect (() => {
  //   if (id != params.id){
  //     console.log("/notfound");
  //   }
  // }, []);

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