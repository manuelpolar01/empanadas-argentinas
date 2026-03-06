import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          El sabor auténtico que despierta tus sentidos
        </h1>

        <p className="hero-subtitle">
          Empanadas artesanales, recién horneadas, con ingredientes frescos
          y recetas tradicionales que te harán volver por más.
        </p>

        <div className="hero-buttons">
          <Link to="/productos" className="btn-primary">
            Ver Productos
          </Link>

          <Link to="/pedido" className="btn-secondary">
            Hacer Pedido
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;