
import React from "react";
import cardPersonajes from "../views/cardPersonajes";


    export const CardPersonaje = () => {
  const personajes = [
    {
      nombre: "Harry Potter",
      descripcion: "El famoso mago que sobrevivió a Voldemort.",
      imagen: "https://via.placeholder.com/150",
    },
    {
      nombre: "Hermione Granger",
      descripcion: "Una de las mejores amigas de Harry y la más inteligente de su año.",
      imagen: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      {personajes.map((personaje) => (
        <div key={personaje.nombre}>
          <h2>{personaje.nombre}</h2>
          <p>{personaje.descripcion}</p>
          <img src={personaje.imagen} alt={personaje.nombre} />
        </div>
      ))}
    </div>
  );
};

