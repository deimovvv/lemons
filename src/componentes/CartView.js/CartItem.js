import React from 'react'
import './cartitem.css'

const CartItem = ({item, quantity, removeItem}) => {



  return (
    <div className='cart-item-container'>
        <span> {item.name} </span>
        <span> {item.price} </span>
        <img src={item.img} /> 
         
        <span>  Cantidad: {quantity} </span>
        <button onClick={() => removeItem(item.id)}> Eliminar  </button>

    </div>
  )
}

export default CartItem