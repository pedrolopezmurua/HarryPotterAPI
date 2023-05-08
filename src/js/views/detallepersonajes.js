// detallepersonaje.js

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../store/appContext'

function DetallePersonaje () {
  const { index } = useParams(); 
  const { store } = useContext(Context);
  const { personajes } = store;

  const item = personajes[parseInt(index)];

  const imageStyle = {
    objectFit: 'cover',
    maxHeight: '380px',
    background: !item.image ? 'gray' : ''
  }

  const ImageComponent = item.image ? (
    <img
      src={item.image}
      alt={item.name}
      className='img-fluid'
      style={imageStyle}
    />
  ) : (
    <div className='img-fluid' style={{ ...imageStyle, height: '380px' }}></div>
  )

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h2 className="mb-4">Ficha del Personaje</h2>
      <div className='card'>
        <div className='card-body d-flex flex-row'>
          <div className="col-md-4 d-flex align-items-center mb-3" style={{ marginRight: '50px' }}>
            {ImageComponent}
          </div>
          <div className="col-md-8">
            <h3 className='card-title text-center mb-3'>{item.name}</h3>
            <p><strong>Alternate Names:</strong> {item.alternate_names.join(', ')}</p>
            <p><strong>Species:</strong> {item.species}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>House:</strong> {item.house}</p>
            <p><strong>Date of Birth:</strong> {item.dateOfBirth}</p>
            <p><strong>Wizard:</strong> {item.wizard ? 'Yes' : 'No'}</p>
            <p><strong>Ancestry:</strong> {item.ancestry}</p>
            <p><strong>Wand:</strong> {item.wand.wood} wood with a {item.wand.core} core, {item.wand.length} inches long</p>
            <p><strong>Hogwarts Student:</strong> {item.hogwartsStudent ? 'Yes' : 'No'}</p>
            <p><strong>Actor:</strong> {item.actor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetallePersonaje;