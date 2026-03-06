import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import CartWidget from "./CartWidget";
import "../css/navbar.css";

const NavbarBootstrap = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo">
          Empanadas Argentina
        </NavLink>

        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={open ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/productos/carne">Carne</NavLink>
          <NavLink to="/productos/pollo">Pollo</NavLink>
          <NavLink to="/productos/verduras">Verduras</NavLink>
          <CartWidget />
        </nav>
      </div>
    </header>
  );
};

export default NavbarBootstrap;