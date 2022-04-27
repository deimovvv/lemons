import React from "react";
import { arrayProductos } from "../arrayproductos/data";
import ItemCount from "../ItemCount/ItemCount";
import Item from "./Item";
import './ItemList.css'

const ItemList = (props) => {
  console.log(props.items);

  return (
    <div className="product-list-container">
      

        {props.items.map((item) => { 
        // genero array de componentes item
          return (
             <div className='card-container1'>
            <Item producto={item}/>
            </div>
          ) 
           
        })
        }
      
      
    </div>
  );
};

export default ItemList;
