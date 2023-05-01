import React, { useContext } from "react";
import { Context } from "../store/appContext";

const DetallePersonajes = () => {
  const { store } = useContext(Context);

  return (
    <div>
      {store.personajes.results.map((personaje, index) => (
        <div key={index}>
          <h2>{personaje.name}</h2>
          <p>{personaje.gender}</p>
          <p>{personaje.species}</p>
          <p>{personaje.house}</p>
          <p>{personaje.eyeColour}</p>
          <p>{personaje.hairColour}</p>
          <p>{personaje.image}</p>
        </div>
      ))}
    </div>
  );
};

export default DetallePersonajes;
