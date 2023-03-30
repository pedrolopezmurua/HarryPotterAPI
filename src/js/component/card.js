import React, { Component } from "react";

export const Card = () => (
    <div className="container-fluid p-4">
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card">
            <img
              src="https://gossipvehiculo.com/wp-content/uploads/2021/04/1-2021_Mercedes_G63_001-source_Cropped.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body d-flex justify-content-between flex-column">
              <h5 className="card-title">Nombre Personaje 1</h5>
              <p className="card-text">
                <p>Genero : hombre</p>
                <p>Color Pelo: Amarillo</p>
                <p>Color de Ojos: cafe</p>  
              </p>
              <div className="d-flex justify-content-around">
                <a href="#" className="btn btn-outline-primary px-3 mr-2">
                  Learn more!
                </a>
                <div>
                  <a>
                    <i className="fas fa-heart border border-warning fa-2x p-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

