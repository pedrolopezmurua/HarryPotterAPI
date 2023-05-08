// hechizos.js

import React from 'react';
import ListarHechizos from '../component/listarhechizos.js';

function Hechizos() {
  return (
    <div>
     <h2 style={{ fontSize: '36px', marginBottom: '50px', textAlign: 'center' }}>Hechizos de Harry Potter</h2>
      <ListarHechizos showAll={true} />
    </div>
  );
}

export default Hechizos;
