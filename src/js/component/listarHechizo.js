import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Context } from '../store/appContext';

const ListarHechizo = () => {
  const { store } = useContext(Context);

  return (
    <Container className="container">
      <div className="row justify-content-center">
        
        {store.hechizos?.results?.map((hechizo, index) => (
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
    </Container>
  );
};

export default ListarHechizo;