import React from "react";
import "../../styles/home.css";



export const Home = () => (
<div className="container text-center">
    <div className="p-5 row ">
        <div className="col col-lg-6 text-center">
            <h1 className="text-dark col p-5" style={{ fontSize: "50px", fontFamily: "sans-serif", color:"gray" }}>Grandes aventuras junto a Harry Potter</h1>
            <p style={{ fontSize: "20px"}}> "¡Bienvenido a un mundo de magia, hechicería y aventura! Prepárate para seguir a Harry Potter en su 
      emocionante viaje en busca de la verdad sobre su pasado y el destino que le espera en el futuro. En su camino, conocerá a amigos 
      leales, enemigos peligrosos y tendrá que luchar contra el malvado Lord Voldemort. Únete a Harry, Ron y Hermione mientras aprenden
       hechizos, se enfrentan a desafíos increíbles y luchan por el bien mayor en el mundo mágico de Hogwarts!"</p>
        </div>
        <div className="col col-lg-6 text-center">
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bf023f8-3372-48d1-9d76-13637367355f/d6auue7-828a2d8c-601e-4fdd-aee4-450b301f6241.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiZjAyM2Y4LTMzNzItNDhkMS05ZDc2LTEzNjM3MzY3MzU1ZlwvZDZhdXVlNy04MjhhMmQ4Yy02MDFlLTRmZGQtYWVlNC00NTBiMzAxZjYyNDEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7V6dT_bAzFEVQhFo7Lql7n3iIMNKHSSzIbOICrjbEAE"  style={{ width: "800px", height: "550px" }}/>
        </div>
    </div>      
</div>
);
