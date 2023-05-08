// detallehechisos.js

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

function DetalleHechizos () {
  const { index } = useParams(); 
  const { store } = useContext(Context);
  const { hechizos } = store;

  const item = hechizos[parseInt(index)];

 
  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4">Ficha del Hechizo</h2>
      <div className='card'>
        <div className='card-body d-flex flex-row'>
          <div className="col-md-4 d-flex align-items-center mb-3" style={{ marginRight: '50px' }}>
            <img
              src={"https://img.freepik.com/vector-premium/fondo-magico-abstracto-azul-claro_153082-666.jpg"}
              alt={item?.name || ''}
              className='img-fluid'
              style={{ objectFit: 'cover', maxHeight: '380px' }}
            />
          </div>
          {item ? (
            <div className="col-md-8">
              <h3 className='card-title text-center mb-3'>{item.name}</h3>
              <p><strong>Descripción:</strong> {item.description}</p>
            </div>
          ) : (
            <div className="col-md-8">
              <p>No se encontró ningún hechizo con el índice especificado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetalleHechizos;
