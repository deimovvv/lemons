import  { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import './footer.css'



const Footer = () => {

  
  return (
      <> 
    <div className='footer-links'>
    <div className="footer-container">
            <ul>
              
                        <h1>Sobre nosotros</h1>
                   
                
                <li>
                    <a href="#">
                        <h1>--</h1>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <h1>--</h1>
                    </a>
                </li>
                
           
            </ul>
            <ul>

                        <h1> Ubicacion</h1>
                  
                
                   
                        <h4>Norberto de la riestra</h4>
                    
                
               
               
            </ul>
            <ul>
               
                        <h1>Contacto</h1>
                 
                
        
               
            </ul>
        </div>
   
      
    </div>
    </>
  )
}

export default Footer