import React from "react";
import "../../styles.css";
import logo from "../../images/logo.jpg";

function Footer_Formulario() {
  return (
    <div className="fr">
      <div className="redSocial">
        <a className="facebook" href="https://www.facebook.com/">
          Facebook
        </a>
        <a className="instagram" href="https://www.instagram.com/">
          Instagram
        </a>
        <a className="twitter" href="https://twitter.com/login?lang=es">
          Twitter
        </a>
      </div>
      <div className="logoF">
        <img className="logoFU" src={logo} />
      </div>

      <p className="inicioPP2">(031) 346687 WatzControl@proyect.com</p>
      <p className="inicioPP3">Copyright© ©2020</p>
    </div>
  );
}
export default Footer_Formulario;
