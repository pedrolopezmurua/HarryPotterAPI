import React from "react";
import "../../styles/styles.css";

const hechizos = [
  {
    nombre: "Expecto Patronum",
    descripcion: "Hechizo utilizado para repeler a los dementores.",
    nivel: "Intermedio",
  },
  {
    nombre: "Aberto",
    descripcion: "Opens locked doors",
    nivel: "Intermedio",
  },
  {
    nombre: "Accio",
    descripcion: "Summons objects",
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
    <div className="container">
      <div className="row justify-content-center">
        {hechizos.map((hechizo) => (
          <div className="col-md-4 mb-4" key={hechizo.nombre}>
            <div className="card h-100">
              <div className="card-header">
                <h2>{hechizo.nombre}</h2>
              </div>
              <div className="card-body">
                <p className="card-text">Descripción: {hechizo.descripcion}</p>
                <p className="card-text">Nivel: {hechizo.nivel}</p>
              </div>
              <div className="card-footer">
                <a href="/" type="button" className="btn btn-outline-secondary btn-lg">
                  Volver
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListarHechizo;