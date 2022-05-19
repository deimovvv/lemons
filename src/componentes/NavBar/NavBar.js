import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { facartshopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/lemonslogo2.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <div className="container-all">
        <h1>Descubri los nuevos colores de nuestros tejidos</h1>{" "}
      </div>
      <div className="nav-container">
        {/* Botón de menú  */}
        {/*  <div className="menu-botton">
      <FontAwesomeIcon icon={faBars} size="lg" color="black"/>
      <span>Menu</span>
      </div> */}

        <header>
          <img src={Logo} className="nav-brand" />
        </header>

        {/* links de navegación */}
        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <Link to={"/"}> Inicio</Link>
          </li>
          <li className="nav__items">
            <Link to={"/items"}> Catalogo</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/otoño"}>Otoño</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/verano"}>Verano</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/invierno"}> Invierno</Link>
          </li>

          <li className="nav__items">
            <Link to={"/category/primavera"}> Primavera</Link>
          </li>

          <CartWidget />
        </ul>

        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle">
            <div className="indicator"></div>
          </label>
        </div>
      </div>
    </>
  );
};

export default NavBar;
