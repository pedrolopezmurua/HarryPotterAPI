import React from "react";
import "../../styles/home.css";
import { CardHechizo } from "../component/cardHechizo";
import hechizo from '../../img/hechizos.jpeg'

export const Hechizo = () => (
<div className="container text-center">
    <div className="p-5 row ">
        <div className="col col-lg-6 text-center">
            <h1 className="text-dark col p-5" style={{ fontSize: "50px", fontFamily: "sans-serif", color:"gray" }}>Aquí están todos los hechizos de Harry Potter.</h1>
            <p style={{ fontSize: "20px"}}> ¡Agarra tu varita y prepárate para lanzar algunos hechizos mágicos increíbles! Desde el famoso "Expelliarmus" para desarmar a tus oponentes, hasta el encantamiento "Wingardium Leviosa" para hacer levitar objetos, los hechizos de Harry Potter son emocionantes y divertidos de aprender. ¡Incluso puedes intentar lanzar el temido "Avada Kedavra", pero ten cuidado de no acabar en Azkaban! Sumérgete en un mundo lleno de hechizos increíbles y conviértete en un maestro de la magia.
</p>
        </div>
        <div className="col col-lg-6 text-center">
            <img src={ hechizo } style={{ width: "800px", height: "550px" }}/>
        </div>
    </div>
</div>


);
