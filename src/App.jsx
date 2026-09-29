import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

import Hero from "./components/hero/Hero";
import QuienesSomos from "./components/quienesSomos/QuienesSomos";
import Productos from "./components/productos/Productos";
import DetalleProducto from "./components/productos/DetalleProducto";
import Contacto from "./components/contacto/Contacto";

import FormularioProductoContainer from "./components/productos/FormularioProductoContainer";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />

        <Route path="/productos/nuevo" element={<FormularioProductoContainer />} />

        {/* CARRITO */}
        <Route path="/carrito" element={<h1>Carrito de Compras</h1>}/>
      </Route>
    </Routes>
  );
};

export default App;
