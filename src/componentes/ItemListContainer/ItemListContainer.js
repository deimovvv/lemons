import React from 'react'
import ItemCount from '../ItemCount/ItemCount.js'

const ItemListContainer = () => {

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`);
      };

  return (
      <>
    <div>ItemListContainer</div>
    <p>productos lemnos</p>
    <ItemCount onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer