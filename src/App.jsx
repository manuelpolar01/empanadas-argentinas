import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { CartProvider } from "../context/CartContext";
import Home from "../fronted/componentes/Home";
import CheckoutHookForm from "../fronted/componentes/CheckoutHookForm";
import Cart from "../fronted/componentes/Cart";
import NavbarBootstrap from "../fronted/componentes/NavbarBootstrap";
import FooterPeru from "../fronted/componentes/FooterPeru";
import Productos from "../fronted/componentes/productos";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavbarBootstrap />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:categoria" element={<Productos />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutHookForm modo = "checkout"/>} />
            <Route path="/pedido" element={<CheckoutHookForm modo ="pedido"/>} />
          </Routes>
        
      </CartProvider>
      <FooterPeru/>
    </BrowserRouter>
  );
}

export default App;