// ./component/favoritopersonajes.js

import React, { useState } from 'react'; // Importa useState
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const FavoritoPersonajes = ({ characterName, onButtonClick }) => {
  const [isFavorite, setIsFavorite] = useState(false); // Agrega el estado local isFavorite

  const handleClick = () => {
    onButtonClick(characterName);
    setIsFavorite(!isFavorite); // Cambia el estado de isFavorite al hacer clic
  };

  return (
    <div
      style={{
        backgroundColor: isFavorite ? '#2f2f2f' :'#D3D3D3',
      }}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", border: "2px solid #000000", padding: "13px" }} />
    </div>
  );
};

export default FavoritoPersonajes;

