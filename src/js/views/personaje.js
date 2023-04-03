
import React,{useContext, useEffect} from "react";
import ListarPersonaje from "../component/listarPersonaje";
import personaje from '../../img/personajes.png';
import { Container, Row } from 'react-bootstrap';


const Personaje = () => (
  <Container>
    <div className="container text-center">
      <div className="p-5 row">
        <div className="col col-lg-6 text-center">
          <h1 className="text-dark col p-5" style={{ fontSize: "50px", fontFamily: "sans-serif", color:"gray" }}>Aquí están todos los personajes de Harry Potter.</h1>
          <p style={{ fontSize: "20px"}}> ¡Descubre los personajes más icónicos de Harry Potter! Desde el niño que sobrevivió, Harry Potter, hasta la brillante estudiante Hermione Granger y el amigo leal Ron Weasley. Conoce a todos los personajes y descubre en qué casa de Hogwarts pertenecen.
          </p>
        </div>
        <div className="col col-lg-6 text-center">
          <img src={personaje} alt="Personajes de Harry Potter" style={{ width: "800px", height: "550px" }}/>
        </div>
      </div>
    </div>
      <ListarPersonaje />
  </Container>
);

export default Personaje;
