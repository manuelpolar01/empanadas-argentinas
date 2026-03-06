import { useContext } from "react";
import { Link } from "react-router-dom";

import { GiCow } from "react-icons/gi";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext) || {};
  const quantity = cartQuantity ? cartQuantity() : 0;

  return (
    <Link to="/cart" className="cart-widget">
      <GiCow style={{fontSize:'60px', marginRight:'30px'}}/>
      {quantity > 0 && <span className="cart-count">{quantity}</span>}
    </Link>
  );
};

export default CartWidget;