import React from "react";
import ListarPersonaje from "../component/listarPersonaje";
import "../../styles/home.css";

const DetallePersonajes = () => {
  return (
    <div>
      <h1>Personajes de Harry Potter</h1>
      <ListarPersonaje />
    </div>
  );
};

export default DetallePersonajes;
