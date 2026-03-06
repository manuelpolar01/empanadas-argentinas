import React, { useContext } from 'react'

import EmptyCart from './EmptyCart'
import CartView from './CartView'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const {cart}= useContext(CartContext)
  return (
    <div>
      {cart.length? <CartView/> : <EmptyCart/>}
    </div>
  )
}

export default Cart
