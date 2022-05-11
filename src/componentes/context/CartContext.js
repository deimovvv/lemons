import { createContext, useState } from "react";


// create context va a ser un objeto que va a tener varias cosas
export const CartContext = createContext({})

const {Provider} = CartContext
/* const ejemploCarrito = [
    { 
        item: {
            nombre: 'ropa',
            precio:  '$1000'
        },
        quantity: 5
    },
    {
        item: {
            nombre: 'ropa',
            precio:  '$1000'
        },
        quantity: 5
    },
    {
        item: {
            nombre: 'ropa',
            precio:  '$1000'
        },
        quantity: 5
    }
]
  */

// exportamos componente funcional del provider
// y en el param desestrucutramos los children

export const CartProvider = ({ defaultValue = [], children }) => {

    const [carrito, setCarrito] = useState(defaultValue)

    // creo una funcion que agregue algo al carrito

     const addToCart = (item, quantity ) => {
        setCarrito([...carrito, {  item: item, quantity: quantity}])}

    const clearCart = () => {
        setCarrito([])
    }

    // creo una variable que le voy a pasar a value como context con objetos y el estado, tambien el carrito del useState

    /*   const context = {
            carrito, //lista   
            addToCart, // funcion para agregar elementos a la lista
            clearCart // limpiamos lista de favoritos
        } */

  return (
     <Provider value={{carrito, addToCart}}>
         {children}
     </Provider>
  )
}


