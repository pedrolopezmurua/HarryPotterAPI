// ./component/menufavoritos.js

import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStop } from "@fortawesome/free-solid-svg-icons";


function MenuFavoritos() {
  const { store, actions } = useContext(Context);

  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    if (store.favoritos.length > 0) {
      setDropdownItems(
        store.favoritos.map((favorito, index) => (
          <li key={index} style={{ borderLeft: "10px", borderRight: "10px", width: "190px" }}>
            <div className="d-flex align-items-center justify-content-between">
              <Link to={`/detallepersonajes/${index}`}>{favorito}</Link>
              <FontAwesomeIcon
                icon={faStop}
                className="text-white"
                style={{
                  cursor: "pointer",
                  fontSize: "24px",
                  width: "10px",
                  height: "10px",
                  border: "2px solid #000",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  textAlign: "center"
                }}
                onClick={() => actions.eliminarFavorito(index)}
              />

            </div>
          </li>
        ))
      );
    } else {
      setDropdownItems([]);
    }
  }, [store.favoritos, actions]);

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="favoritos-dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width: "190px" }}
        >
          Favoritos
        </button>
        <ul className="dropdown-menu" aria-labelledby="favoritos-dropdown">
          {dropdownItems}
        </ul>
      </div>
    </div>
  );
}

export default MenuFavoritos;