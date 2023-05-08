// listarhechizos.js

import React, { useContext } from "react";
import { Context } from '../store/appContext';
import CardHechizos from "./cardhechizos.js";

function ListarHechizos({ showAll }) {
  const { store } = useContext(Context);
  const { hechizos } = store;

  const displayedHechizos = showAll ? hechizos : hechizos.slice(0, 4);

  const hechizosCards = displayedHechizos.map((hechizo, index) => (
    <div key={hechizo.id} className="col-md-3 mb-4">
      <CardHechizos item={hechizo} index={index} />
    </div>
  ));

  return (
    <div>
      <div className="container">
        <div className="row">
          {hechizosCards}
        </div>
      </div>
    </div>
  );
}

export default ListarHechizos;

