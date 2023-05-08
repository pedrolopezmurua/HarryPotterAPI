// layout.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Home from './views/home';

import Personajes from "./views/personajes.js";
import Hechizos from "./views/hechizos.js";
import DetalleHechizos from "./views/detallehechizos";
import DetallePersonajes from "./views/detallepersonajes";


import Navbar from "./component/navbar";
import Footer from "./views/footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        {/*}  <ScrollToTop /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/single/:theid" element={<Single />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/hechizos" element={<Hechizos />} />
          <Route path="/detallehechizos/:index" element={<DetalleHechizos />} />
          <Route path="/detallepersonajes/:index" element={<DetallePersonajes />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
