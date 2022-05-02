import React from "react";
import ItemCount from "../ItemCount/ItemCount";

import "./Item.css";

const Item = ({producto}) => {
  console.log(producto);

  // prop que se llama producto que va a tener todos los datos de la pelicula




  return (
  <div className='card-container'>
    <div className='item-container'>
    <h2> {producto.name} </h2>
    <img src={producto.img}/> 
    <h3> {producto.stock}</h3>
    <div classname={ItemCount}>
   
    </div>
    </div>
    

  </div> )
};

export default Item;
