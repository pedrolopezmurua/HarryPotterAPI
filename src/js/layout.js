import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Personaje } from "./views/personaje"; //web personaje
import { Hechizo } from "./views/hechizo"; //web hechizo

import { CardHechizos } from "./views/cardHechizos"; //vista hechizo
import { CardPersonajes } from "./views/cardPersonajes"; // Vista personaje


import { CardPersonaje } from "./component/cardPersonaje"; // componentes Personaje
import { CardHechizo } from "./component/cardHechizo"; // componentes Hechizo

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/personaje" element={<Personaje />} />
						<Route path="/hechizo" element={<Hechizo />} />
						<Route path="/cardPersonaje" element={<CardPersonajes />} />
						<Route path="/cardHechizos" element={<CardHechizos />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
