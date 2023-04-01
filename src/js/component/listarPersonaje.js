import React from "react";

const personajes = [
  {
    nombre: "Harry Potter",
    descripcion: "El niño que sobrevivió, famoso por derrotar a Lord Voldemort.",
    casa: "Gryffindor",
  },
  {
    nombre: "Hermione Granger",
    descripcion: "La brillante estudiante que siempre tiene la respuesta correcta.",
    casa: "Gryffindor",
  },
  {
    nombre: "Ron Weasley",
    descripcion: "El amigo leal que siempre está dispuesto a ayudar.",
    casa: "Gryffindor",
  },
];

const ListarPersonaje = () => {
  return (
    <div>
      {personajes.map((personaje) => (
        <div key={personaje.nombre}>
          <h2>{personaje.nombre}</h2>
          <p>{personaje.descripcion}</p>
          <p>Casa: {personaje.casa}</p>
        </div>
      ))}
    </div>
  );
};

export default ListarPersonaje;
