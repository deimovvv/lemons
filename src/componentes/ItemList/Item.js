import React from "react";
import ItemCount from "../ItemCount/ItemCount";

import "./Item.css";

const Item = ({producto}) => {
  console.log(producto);


  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`);
  };

  return (
  <div className='card-container'>
    <h2> {producto.name} </h2>
    <img src={producto.img}/> 
    <h3> {producto.stock}</h3>
    <div classname={ItemCount}>
    <ItemCount  onAdd={onAdd} />
    </div>
    

  </div> )
};

export default Item;
