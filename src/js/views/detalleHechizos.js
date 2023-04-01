import React, { useState } from "react";
import ListarHechizo from "../component/listarHechizo";

const DetalleHechizos = () => {
  const [hechizoSeleccionado, setHechizoSeleccionado] = useState(null);

  const handleClick = (hechizo) => {
    setHechizoSeleccionado(hechizo);
  };

  return (
    <div>
      <h1>Hechizos de Harry Potter</h1>
      <ListarHechizo>
        {hechizos.map((hechizo) => (
          <CardHechizo
            key={hechizo.nombre}
            hechizo={hechizo}
            onClick={() => handleClick(hechizo)}
          />
        ))}
      </ListarHechizo>
      {hechizoSeleccionado && (
        <div>
          <h2>{hechizoSeleccionado.nombre}</h2>
          <p>{hechizoSeleccionado.descripcion}</p>
          <p>Nivel: {hechizoSeleccionado.nivel}</p>
        </div>
      )}
    </div>
  );
};

export default DetalleHechizos;
