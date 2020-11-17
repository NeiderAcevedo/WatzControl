import React from "react";
import "../../styles.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

function Header_Formulario2() {
  return (
    <div className="forcenter">
      
      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>
      
      <button type="button" className="volver">
      <Link classname="Botones" to="PagesFormulario">
        Atrás
      </Link>
      </button>
      <button type="button" className="ayuda">
        Ayuda
      </button>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_Formulario2;