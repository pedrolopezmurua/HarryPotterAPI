// personajes.js

import React from 'react';
import ListarPersonajes from '../component/listarpersonajes.js';

function Personajes() {
  return (
    <div>
     <h2 style={{ fontSize: '36px', marginBottom: '50px', textAlign: 'center' }}>Personajes de Harry Potter</h2>
      <ListarPersonajes showAll={true} />
    </div>
  );
}

export default Personajes;
