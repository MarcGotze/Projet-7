import React from "react";
import useCollapse from "react-collapsed";

function Dropdown() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className="aboutBox">
      <div className="collapsible">
        <div className="collapsible__header" {...getToggleProps()}>
          {isExpanded ? "Fiabilité" : "Fiabilité"}
          <img
            className="collapsible__arrow"
            src="./images/ARROW_D.png"
            alt="Flèche"
          />
        </div>
        <div {...getCollapseProps()}>
          <div className="collapsible__content">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
      </div>

      <div className="collapsible">
        <div className="collapsible__header" {...getToggleProps()}>
          {isExpanded ? "Respect" : "Respect"}
          <img
            className="collapsible__arrow"
            src="./images/ARROW_D.png"
            alt="Flèche"
          />
        </div>
        <div {...getCollapseProps()}>
          <div className="collapsible__content">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertrubation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
      </div>

      <div className="collapsible">
        <div className="collapsible__header" {...getToggleProps()}>
          {isExpanded ? "Service" : "Service"}
          <img
            className="collapsible__arrow"
            src="./images/ARROW_D.png"
            alt="Flèche"
          />
        </div>
        <div {...getCollapseProps()}>
          <div className="collapsible__content">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </div>
      </div>

      <div className="collapsible">
        <div className="collapsible__header" {...getToggleProps()}>
          {isExpanded ? "Sécurité" : "Sécurité"}
          <img
            className="collapsible__arrow"
            src="./images/ARROW_D.png"
            alt="Flèche"
          />
        </div>
        <div {...getCollapseProps()}>
          <div className="collapsible__content">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
