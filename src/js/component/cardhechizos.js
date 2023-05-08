// cardhechizos.js

import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import FavoritoPersonajes from './favoritopersonajes';
import { Context } from "../store/appContext"; // Importa Context desde appContext

function CardHechizos({ item, index }) { // Agrega "index" como propiedad
  const { actions } = useContext(Context); // Utiliza useContext para acceder a las acciones

  const imageStyle = {
    objectFit: "cover",
    maxHeight: "380px",
  };

  const handleButtonClick = (name) => { 
    actions.addFavorito(name);
  };

  return (
    <div className="card h-100">
      <img
        src={"https://img.freepik.com/vector-premium/fondo-magico-abstracto-azul-claro_153082-666.jpg"}
        alt={item.name}
        className="card-img-top img-fluid float-start"
        style={imageStyle}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <div className="d-flex justify-content-between">
          <Link
            to={`/detallehechizos/${index}`} 
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

export default CardHechizos;
