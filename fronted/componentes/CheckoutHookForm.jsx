import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CartContext } from "../../context/CartContext";

const CheckoutHookForm = ({ modo }) => {

  const esPedido = modo === "pedido";

  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const { cart, cartTotal, clear } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  // Redirigir solo si es checkout y el carrito está vacío
  if (!esPedido && cart.length === 0 && !compraFinalizada) {
    return <Navigate to="/" />;
  }

  const finalizarCompra = () => {
    clear();
    setCompraFinalizada(true);
  };

  return (
    <div style={containerStyle}>
      {compraFinalizada ? (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "#28a745" }}>
            {esPedido ? "¡Pedido enviado con éxito!" : "¡Compra realizada con éxito!"}
          </h2>

          <div style={{ marginTop: "18px" }}>
            <Link to="/" className="btn btn-dark">
              Volver al Home
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h1 style={titleStyle}>
            {esPedido ? "Realizar Pedido" : "Finalizar Compra"}
          </h1>

          <form onSubmit={handleSubmit(finalizarCompra)}>

            <input
              style={inputStyle}
              type="text"
              placeholder="Nombre completo"
              {...register("name", {
                required: "Ingrese su nombre",
                minLength: {
                  value: 5,
                  message: "Mínimo 5 caracteres",
                },
              })}
            />
            {errors.name && <span style={errorStyle}>{errors.name.message}</span>}

            <input
              style={inputStyle}
              type="text"
              placeholder="Dirección"
              {...register("address", {
                required: "Ingrese su dirección",
              })}
            />
            {errors.address && <span style={errorStyle}>{errors.address.message}</span>}

            <input
              style={inputStyle}
              type="email"
              placeholder="Correo electrónico"
              {...register("email", {
                required: "Ingrese su correo",
              })}
            />
            {errors.email && <span style={errorStyle}>{errors.email.message}</span>}

            <input
              style={inputStyle}
              type="email"
              placeholder="Confirme su correo"
              {...register("email2", {
                required: "Confirme su correo",
                validate: (value) =>
                  value === getValues("email") || "Los correos no coinciden",
              })}
            />
            {errors.email2 && <span style={errorStyle}>{errors.email2.message}</span>}

            <button style={buttonStyle} type="submit">
              {esPedido
                ? "Enviar Pedido"
                : `Finalizar Compra (€ ${cartTotal()})`}
            </button>

          </form>
        </>
      )}
    </div>
  );
};

const containerStyle = {
  maxWidth: "500px",
  margin: "3rem auto",
  padding: "2rem",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  backgroundColor: "#fff",
};

const inputStyle = {
  marginBottom: "1rem",
  padding: "0.75rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
  fontSize: "1rem",
};

const errorStyle = {
  color: "red",
  fontSize: "0.9rem",
  marginBottom: "0.5rem",
};

const buttonStyle = {
  padding: "0.75rem",
  borderRadius: "8px",
  fontSize: "1rem",
  backgroundColor: "#28a745",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  width: "100%",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "1.5rem",
  color: "#343a40",
};

export default CheckoutHookForm;