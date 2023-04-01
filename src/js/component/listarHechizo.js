import React from "react";

const hechizos = [
  {
    nombre: "Expecto Patronum",
    descripcion: "Hechizo utilizado para repeler a los dementores.",
    nivel: "Intermedio",
  },
  {
    nombre: "Expelliarmus",
    descripcion: "Hechizo utilizado para desarmar a un oponente.",
    nivel: "Principiante",
  },
];

const ListarHechizo = () => {
  return (
    <div>
      {hechizos.map((hechizo) => (
        <div key={hechizo.nombre}>
          <h2>{hechizo.nombre}</h2>
          <p>{hechizo.descripcion}</p>
          <p>Nivel: {hechizo.nivel}</p>
        </div>
      ))}
    </div>
  );
};

export default ListarHechizo;