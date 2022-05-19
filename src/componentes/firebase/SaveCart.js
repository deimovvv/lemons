/* import React from 'react'
import { CartContext } from "../context/CartContext"; 
import { useContext, useState } from "react";
import { addDoc, getFirestore } from '@firebase/firestore';

const SaveCart = () => {


    const { cart} = useContext(CartContext);

    const saveCart = () => {
        const order = {
            name: 'juan perez',
            phone: '22222222',
            email: 'adasd@gmail.com'
        
        }
    }

    const cartsToSave = {
        // buyer
        order: user,
        // items
        carts: cart,
        total: cart.length
    }
    console.log(cartsToSave);

    const db = getFirestore()

    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection)


  return (
    <div>SaveCart</div>
  )
}

export default SaveCart */