import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card__item">
      <a href={"/logement/" + card.id}>
        <div className="card__cover--layer">
          <img className="card__cover" src={card.cover} alt={card.title} />
        </div>
        <p className="card__title">{card.title}</p>
      </a>
    </div>
  );
};

export default Card;
