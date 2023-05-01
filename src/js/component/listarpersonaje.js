// en listarpersonajes.js

import React from 'react';

class ListarPersonajes extends React.Component {
  render() {
    const personajes = this.props.personajes.map((personaje) => (
      <div key={personaje.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{personaje.nombre}</h5>
          <p className="card-text">{personaje.descripcion}</p>
          <button onClick={() => this.props.mostrarDetalle(personaje)}>
            Ver detalle
          </button>
          <button onClick={() => this.props.agregarFavorito(personaje)}>
            Agregar a favoritos
          </button>
        </div>
      </div>
    ));
    return (
      <div>
        <h2>Personajes de Harry Potter</h2>
        {personajes}
      </div>
    );
  }
}

export default ListarPersonajes;
