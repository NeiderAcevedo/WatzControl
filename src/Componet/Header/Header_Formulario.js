import React from "react";
import "../../styles.css";
import logo from "../../images/logo.jpg";

function Header_Formulario() {
  return (
    <div>
      
      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>
      
      <button type="button" className="volver">
        Volver
      </button>
      <button type="button" className="ayuda">
        Ayuda
      </button>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_Formulario;
