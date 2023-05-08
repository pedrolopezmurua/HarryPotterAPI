// card.js

import React, { useContext } from "react"; // Importa useContext
import { Link } from "react-router-dom";
import FavoritoPersonajes from './favoritopersonajes';
import { Context } from "../store/appContext"; // Importa Context desde appContext


function CardPersonajes({ item, index }) { // Agrega "index" como propiedad
  const { actions } = useContext(Context); // Utiliza useContext para acceder a las acciones

  const imageStyle = {
    objectFit: "cover",
    maxHeight: "380px",
    background: !item.image ? "gray" : "",
  };

  const ImageComponent = item.image ? (
    <img
      src={item.image}
      alt={item.name}
      className="card-img-top img-fluid"
      style={imageStyle}
    />
  ) : (
    <div
      className="card-img-top img-fluid"
      style={{ ...imageStyle, height: "380px" }}
    ></div>
  );

  const handleButtonClick = (name) => { 
    actions.addFavorito(name);
  };

  return (
    <div className="card h-100">
      {ImageComponent}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <div className="d-flex justify-content-between">
          <Link
            to={`/detallepersonajes/${index}`}
            className="btn btn-primary btn-sm"
            style={{ fontSize: "12px", padding: "12px 4px" }}
          >
            Más información
          </Link>
          <FavoritoPersonajes characterName={item.name} onButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default CardPersonajes;

