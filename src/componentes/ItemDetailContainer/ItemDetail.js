import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { arrayProductos } from "../arrayproductos/data";


const ItemDetail = (props) => {
    
    const {name, description, price, img} = props.item

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`);
      }; 
      
  return (
      
    <div> {name}
    <ItemCount  onAdd={onAdd} />
     </div>

   
    
  )
}

export default ItemDetail

