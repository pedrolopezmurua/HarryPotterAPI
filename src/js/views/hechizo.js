// hechizo.js

import React from "react";

class Hechizo extends React.Component {
  render() {
    const hechizo = this.props.hechizo;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{hechizo.nombre}</h5>
          <p className="card-text">{hechizo.descripcion}</p>
          <p className="card-text">Tipo: {hechizo.tipo}</p>
          <p className="card-text">Efecto: {hechizo.efecto}</p>
        </div>
      </div>
    );
  }
}

export default Hechizo;
