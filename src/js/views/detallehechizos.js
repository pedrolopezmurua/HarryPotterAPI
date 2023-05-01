import React, { useContext } from "react";
import "../../styles/home.css";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

const DetalleHechizos = () => {
  const { id } = useParams();
  const { store } = useContext(Context);
  const idHechizo = parseInt(id) - 1; // Restamos 1 para obtener el índice del hechizo correspondiente en el arreglo
  const hechizo = store.hechizos[idHechizo];
  
  return (
    <div>
      <h1>Hechizos de Harry Potter</h1>
      <div>
        <h2>{hechizo.name}</h2>
        <p>{hechizo.description}</p>
      </div>
    </div>
  );
};

export default DetalleHechizos;
