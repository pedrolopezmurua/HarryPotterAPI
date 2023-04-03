import React from "react";
import ListarPersonaje from "../component/listarPersonaje";
import "../../styles/home.css";

const DetallePersonajes = () => {
  return (
    <Container>
      <h1>Personajes de Harry Potter</h1>
      <ListarPersonaje />
    </Container>
  );
};

export default DetallePersonajes;
