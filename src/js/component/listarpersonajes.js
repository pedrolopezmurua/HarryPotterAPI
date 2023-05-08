// en listarpersonajes.js

import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import CardPersonajes from './cardpersonajes.js';

function ListarPersonajes({ showAll }) {
  const { store } = useContext(Context);
  const { personajes } = store;

  const displayedPersonajes = showAll ? personajes : personajes.slice(0, 4);

  const personajesCards = displayedPersonajes.map((personaje, index) => (
    <div key={personaje.id} className="col-md-3 mb-4">
      <CardPersonajes item={personaje} index={index} />
    </div>
  ));

  return (
    <div>
      <div className="container">
        <div className="row">
          {personajesCards}
        </div>
      </div>
    </div>
  );
}

export default ListarPersonajes;

