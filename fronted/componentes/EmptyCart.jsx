import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div style={{textAlign:'center',padding:'30px'}}>
      <h2> tu carrito esta vacio </h2>
      <h3> te invitamos a ver nuestros productos</h3>
      <div style={{marginTop:'15px'}}>
      <Link className ='btn btn-dark' to='/'>volver home</Link>
     </div>
    </div>
  )
}

export default EmptyCart
