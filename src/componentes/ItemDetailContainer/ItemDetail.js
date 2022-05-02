import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { arrayProductos } from "../arrayproductos/data";
import './ItemDetail.css'


const ItemDetail = (props) => {
    
    const {name, description, price, img} = props.item

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`);
      }; 
      
  return (
      
    <div className='detail-container'> 
    <div className='image-container'>  <img  src={img} />  </div>
    <div className='data-container'> <h1> {name} </h1>
    <p> {description} </p>
    <p> {price} </p>
    <ItemCount className='itemcount'  onAdd={onAdd} /></div>
    
    
    
    
     </div>

   
    
  )
}

export default ItemDetail

