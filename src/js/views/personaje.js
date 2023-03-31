import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import personaje from '../../img/personajes.png'
import hechizo from '../../img/hechizos.jpeg'

export const Personaje = () => (
<div className="container text-center">
    <div className="p-5 row ">
        <div className="col col-lg-6 text-center">
            <h1 className="text-dark col p-5" style={{ fontSize: "50px", fontFamily: "sans-serif", color:"gray" }}>Aquí están todos los personajes de Harry Potter.</h1>
            <p style={{ fontSize: "20px"}}> ¡Adéntrate en el emocionante mundo de Harry Potter y conoce a los personajes más increíbles del universo mágico! Desde el valiente Harry y sus amigos Ron y Hermione, hasta los villanos más malvados, como el temido Lord Voldemort y sus seguidores, los mortífagos. Prepárate para una aventura mágica llena de diversión y emoción con los personajes que han cautivado a millones de fans en todo el mundo.</p>
        </div>
        <div className="col col-lg-6 text-center">
            <img src={ personaje } style={{ width: "800px", height: "550px" }}/>
        </div>
    </div>
</div>
);
