import React from "react";
import { CardPersonaje } from "../component/cardPersonaje";

export const CardPersonajes = () => {
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
        <CardPersonaje
          key={personaje.nombre}
          nombre={personaje.nombre}
          descripcion={personaje.descripcion}
          imagen={personaje.imagen}
        />
      ))}
    </div>
  );
};