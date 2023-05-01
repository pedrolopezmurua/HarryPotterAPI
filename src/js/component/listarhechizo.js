// en listarhechizos.js

import React from 'react';

class ListarHechizos extends React.Component {
  render() {
    const hechizos = this.props.hechizos.map((hechizo) => (
      <div key={hechizo.id} className="card">
        <div className="card-body">
          <h5 className="card-title">{hechizo.nombre}</h5>
          <p className="card-text">{hechizo.descripcion}</p>
          <button onClick={() => this.props.mostrarDetalle(hechizo)}>
            Ver detalle
          </button>
          <button onClick={() => this.props.agregarFavorito(hechizo)}>
            Agregar a favoritos
          </button>
        </div>
      </div>
    ));
    return (
      <div>
        <h2>Hechizos de Harry Potter</h2>
        {hechizos}
      </div>
    );
  }
}

export default ListarHechizos;
