import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Count from "./Count";
import "../css/card.css";
import { CartContext } from "../../context/CartContext";

const Detail = ({ item }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAdd = (qty) => {
    addToCart(item, qty);
    setAdded(true);
  };

  return (
    <div className="card-product">
      <img src={item.image} alt={item.name} className="product-img" />
      <div className="card-body">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <strong>€ {item.price}</strong>

        {!added ? (
          <Count onAdd={handleAdd} />
        ) : (
          <>
        
      <div style={{display:'flex', width:'80%',alignItems:'center',justifyContent:'space-between'}}>
           <Link className='btn btn-dark' to='/menu'> seguir comprando</Link>
           <Link className='btn btn-dark' to='/cart'> ir al carrito</Link>
      </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;