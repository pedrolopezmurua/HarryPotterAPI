import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import Home from './views/home';

import Personaje from "./views/personaje";
import Hechizo from "./views/hechizo";
import DetalleHechizos from "./views/detalleHechizos";
import DetallePersonajes from "./views/detallePersonajes";


import Navbar from "./component/navbar";
import Footer from "./component/footer";

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
          <Route path="/personaje" element={<Personaje />} />
          <Route path="/hechizo" element={<Hechizo />} />
          <Route path="/detallehechizos/:id" element={<DetalleHechizos />} />
          <Route path="/detallepersonajes/:id" element={<DetallePersonajes />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
