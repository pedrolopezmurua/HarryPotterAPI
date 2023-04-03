import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Context } from '../store/appContext';

const ListarPersonaje = () => {
  const { store } = useContext(Context);

  return (
    <Container className="container">
      <div className="row justify-content-center">
        {store.personajes?.length > 0 ? (
          store.personajes?.results?.map((personaje, index) => (
            <div className="col-md-4 mb-4" key={personaje.name}>
              <div className="card h-100">
                <img
                  src={personaje.image}
                  alt={personaje.name}
                  className="card-img-top"
                />
                <div className="card-header">
                  <h2>{personaje.name}</h2>
                </div>
                <div className="card-body">
                  <p className="card-text">Especie: {personaje.species}</p>
                  <p className="card-text">
                    Fecha de nacimiento: {personaje.dateOfBirth}
                  </p>
                  <p className="card-text">Género: {personaje.gender}</p>
                  <p className="card-text">Casa: {personaje.house}</p>
                  <p className="card-text">Varita: {personaje.wand}</p>
                  <p className="card-text">Patronus: {personaje.patronus}</p>
                </div>
                <div className="card-footer">
                  <a
                    href="/"
                    type="button"
                    className="btn btn-outline-secondary btn-lg"
                  >
                    Volver
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay personajes para mostrar.</p>
        )}
      </div>
    </Container>
  );
};

export default ListarPersonaje;
