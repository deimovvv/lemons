import React, { useEffect, useState } from 'react'
import { arrayProductos } from '../arrayproductos/data.js'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])


    useEffect(() => {
        getDetailPromise      
        .then(data => setDetail(data[0])) 
        .catch(err =>   console.log(err) )
        
    },[])

    const getDetailPromise = new Promise((res,rej) => {
        setTimeout(() => {
          res(arrayProductos)
        }, (2000));
    })



  return (
    
   <ItemDetail   /* paso los detalles como props a ItemDetail */ item={detail} />  
    
  )
}

export default ItemDetailContainer