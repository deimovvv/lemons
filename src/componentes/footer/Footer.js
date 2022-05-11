import  { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import './footer.css'



const Footer = () => {

    // uso contexto que va a buscar su propio provider
    const {carrito} = useContext(CartContext)

  return (
      <> 
    <div className='footer-container'>
    {carrito/* .map(c => <li> {c} </li>) */}
    <h1> Le mons </h1>
    </div>
    </>
  )
}

export default Footer