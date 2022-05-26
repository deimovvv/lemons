import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-links">
        <div className="footer-container">
          <ul>
            <h1>Sobre nosotros</h1>
          </ul>
          <ul>
            <h1> Ubicacion</h1>
            <p>Norberto de la riestra</p>
          </ul>
          <ul>
            <h1>Contacto</h1>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
