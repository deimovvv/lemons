import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='container-landing'>
      <h1> ¡CONOCE NUESTROS PRODUCTOS! </h1>
      <button to={'/items'}> Ultimos Lanzamientos</button>
    </div>
  )
}

export default LandingPage