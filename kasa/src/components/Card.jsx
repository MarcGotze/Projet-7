import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <div className="card__item">
      <Link to={"/logement/" + card.id}>
        <div className="card__cover--layer">
          <img className="card__cover" src={card.cover} alt={card.title} />
        </div>
        <p className="card__title">{card.title}</p>
      </Link>
    </div>
  );
};

export default Card;
