import React from "react";
import "../../styles/styles.css";

const personajes = [
  {
    imagen: "https://ik.imagekit.io/hpapi/harry.jpg",
    nombre: "Harry Potter",
    especie: "Humano",
    fecha_nacimiento: "31 de julio de 1980",
    género: "Masculino",
    descripción: "El niño que sobrevivió, famoso por derrotar a Lord Voldemort.",
    casa: "Gryffindor",
    varita: "Saúco, 28 cm, núcleo de pelo de cola de unicornio",
    patronus: "Ciervo"
  },
  {
    imagen: "https://ik.imagekit.io/hpapi/hermione.jpg",
    nombre: "Hermione Granger",
    especie: "Humano",
    fecha_nacimiento: "19 de septiembre de 1979",
    género: "Femenino",
    descripción: "La brillante estudiante que siempre tiene la respuesta correcta.",
    casa: "Gryffindor",
    varita: "Vid, 19 cm, núcleo de pelo de cabeza de león",
    patronus: "Nutria"
  },
  {
    imagen: "https://ik.imagekit.io/hpapi/ron.jpg",
    nombre: "Ron Weasley",
    especie: "Humano",
    fecha_nacimiento: "1 de marzo de 1980",
    género: "Masculino",
    descripción: "El amigo leal que siempre está dispuesto a ayudar.",
    casa: "Gryffindor",
    varita: "Sauce, 14 pulgadas, nervio de corazón de dragón",
    patronus: "Jack Russell Terrier"
  }
];

const ListarPersonajes = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {personajes.map((personaje) => (
          <div className="col-md-4 mb-4" key={personaje.nombre}>
            <div className="card h-100">
              <img
                src={personaje.imagen}
                alt={personaje.nombre}
                className="card-img-top"
              />
              <div className="card-header">
                <h2>{personaje.nombre}</h2>
              </div>
              <div className="card-body">
                <p className="card-text">Especie: {personaje.especie}</p>
                <p className="card-text">
                  Fecha de nacimiento: {personaje.fecha_nacimiento}
                </p>
                <p className="card-text">Género: {personaje.género}</p>
                <p className="card-text">Descripción: {personaje.descripción}</p>
                <p className="card-text">Casa: {personaje.casa}</p>
                <p className="card-text">Varita: {personaje.varita}</p>
                <p className="card-text">Patronus: {personaje.patronus}</p>
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

export default ListarPersonajes;
