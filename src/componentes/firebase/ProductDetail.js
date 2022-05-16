import React, { useState,useEffect } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ProductDetail = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
        const db = getFirestore()

        const CamperaDeLana = doc(db, 'items', 'tPZ6M4MDJmBgCoYfMfYe')
        getDoc(CamperaDeLana).then( res => {
            if (res.exists()) {
                console.log(res.data());
                console.log(res.id);
                setItem(res.data())  
            }
        })
    },[])

  return (
      <> 
    <div>ProductDetail</div>
    <div>{item.title}</div>
    <div>{item.description}</div>
    </>
  )
}

export default ProductDetail