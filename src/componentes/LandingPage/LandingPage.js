import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'


const LandingPage = () => {
  return (
    <div className='container-landing'>
      <h1> ¡CONOCE NUESTROS PRODUCTOS! </h1>
      <Link className='Link'to={'/items'}> Ultimos Lanzamientos</Link>
     
    </div>
  )
}

export default LandingPage