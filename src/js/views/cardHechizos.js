import React from "react";
import { CardHechizo } from "../component/cardHechizo";

export const CardHechizos = () => {
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

  return (
    <div>
      {hechizos.map((hechizo) => (
        <CardHechizo
          key={hechizo.nombre}
          nombre={hechizo.nombre}
          descripcion={hechizo.descripcion}
          nivel={hechizo.nivel}
        />
      ))}
    </div>
  );
};
