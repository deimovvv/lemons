import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
/* import CartItem from "./CartItem"; */
import "./cartitem.css";

const CartView = () => {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);

  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    if (cart.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [cart.length]);

  if (!empty) {
    return (
      <div>
        {cart.map((e) => (
          <div className="cart-item-container">
            <span> {e.item.name} </span>
            <span> {e.item.price} </span>
            <img src={e.item.img} />

            <span> Cantidad: {e.quantity} </span>
            <button onClick={() => removeFromCart(e.item.id)}>
              {" "}
              Eliminar{" "}
            </button>
          </div>
        ))}
        <div> 
          <h4>Precio total: {getTotal()} </h4>
          <button> Confirmar compra </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='cart-container'>
        <h1>No hay elementos en el carrito</h1>
        <Link to="/items">
          {" "}
          <button className="button"> Volver </button>{" "}
        </Link>
      </div>
    );
  }
};

export default CartView;