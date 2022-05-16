import React, { useEffect, useState } from 'react'

import { arrayProductos } from '../arrayproductos/data.js'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()


    useEffect(() => {
        getDetailPromise      
        .then(data =>  {
          setDetail(data)
          setLoading(false)
        } ) 
        .catch(err =>   console.log(err) )
        
    },[])

    const getDetailPromise = new Promise((res,rej) => {
        setTimeout(() => {
          const productoFiltrado = arrayProductos.find(e => e.id == itemId)
          res(productoFiltrado)
        }, (2000));
    })
  


  return (
     
     

    
    <div >
      { loading ? <ReactLoading color='red' type='spin'/> :
       <div className='itemdetail-container'>
    <ItemDetail   /* paso los detalles como props a ItemDetail */ item={detail} />  
    </div>
       }
    </div>
  
    
  )
}

export default ItemDetailContainer