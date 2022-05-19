import React from "react";
import carticon from "../../assets/cart-shopping-solid.svg";
import "./cartwidget.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

const {getQuantity} = useContext(CartContext)

  return (
    <div>
        { getQuantity() ?  
      <Link to='/cart'>
        
        <div className='widget-container'>
        <img src={carticon} className="icon" />
        
        <span className='cantidad'> {getQuantity()} </span>
        </div>
      </Link>
      :
      <>

       </>
      }
    </div>
  );
};

export default CartWidget;
