import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { arrayProductos } from "../arrayproductos/data.js";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'
/* import { useParams } from 'react-router-dom'; */


const ItemDetail = (props) => {
  const { name, id, description, talle, price, img } = props.item;

  // useContext es un hook react para traer contexto
  const { addToCart } = useContext(CartContext);

  

    

 
  const [purchaseCompleted, setPurchaseCompleted] = useState(false) // estado que indica si el usuario hizo la compra o no
  
  const onAdd = (count) => {
    setPurchaseCompleted(true)
    addToCart(props.item, count)
  }

  return (
    <div className="detail-container">
      <div className="grid-container">
        <div className="image-container">
          {" "}
          <img src={img} />{" "}
        </div>
        <div className="data-container">
          <h1> {name} </h1>

          <div className="descripcion-container">
            <p> {description} </p>
            <p> {talle} </p>
            <p className='p'> {price} </p>
          </div>
          <div className="Itemcount-container">
            {/* {count ? <strong>verdadero</strong> : <strong>falso</strong>}
    { count && <strong> Se renderea </strong>} */}

                {purchaseCompleted ? (
                   <Link 
                   to='/items' className='addCarrito' >
                      Terminar Compra
                   </Link>
                ): <ItemCount className="itemcount" onAdd={onAdd}/>  
              }    
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
