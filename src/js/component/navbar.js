import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <div className="container-fluid">
			<a className="navbar-brand" href="#">
			  <img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/1024px-Harry_Potter_wordmark.svg.png"
				alt="Harry Potter logo"
				width="100"
				height="30"
				className="d-inline-block align-text-top"
			  />
			</a>
			<button
			  className="navbar-toggler"
			  type="button"
			  data-bs-toggle="collapse"
			  data-bs-target="#navbarNav"
			  aria-controls="navbarNav"
			  aria-expanded="false"
			  aria-label="Toggle navigation"
			>
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
			  <ul className="navbar-nav ms-auto">
				<li className="nav-item">
				  <a className="nav-link active" aria-current="page" href="#">
					personajes
				  </a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#">
					otros
				  </a>
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
	  );
	