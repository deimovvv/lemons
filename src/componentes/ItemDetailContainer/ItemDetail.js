import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { arrayProductos } from "../arrayproductos/data.js";
import "./ItemDetail.css";
import { CartContext } from "../context/CartContext";
/* import { useParams } from 'react-router-dom'; */


const ItemDetail = (props) => {
  const { name, id, description, talle, price, img } = props.item;

  // useContext es un hook react para traer contexto
  const { addToCart } = useContext(CartContext);

  console.log(addToCart);

  const [count, setCount] = useState(true);

  const onAdd = (count) => {
    addToCart(props.item, count)
  };

  

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
            <p> {price} </p>
          </div>
          <div className="Itemcount-container">
            {/* {count ? <strong>verdadero</strong> : <strong>falso</strong>}
    { count && <strong> Se renderea </strong>} */}
            <ItemCount className="itemcount" onAdd={onAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
