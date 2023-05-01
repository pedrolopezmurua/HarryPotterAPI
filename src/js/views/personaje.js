// personaje.js

import React from 'react';

class Personaje extends React.Component {
render() {
const personaje = this.props.personaje;
return (
<div className="card">
<div className="card-body">
<h5 className="card-title">{personaje.nombre}</h5>
<p className="card-text">{personaje.descripcion}</p>
<p className="card-text">Edad: {personaje.edad}</p>
<p className="card-text">Casa: {personaje.casa}</p>
</div>
</div>
);
}
}

export default Personaje;