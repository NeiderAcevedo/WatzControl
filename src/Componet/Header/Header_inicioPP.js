import React from "react";
import "../../src/styles.css";
import Logo_WC from "../../images/Logo_WC.png";

function Header_inicioPP() {
  return (
    <div>
      <div className="logoH">
        <image src={Logo_WC} />
      </div>
      <h1 className="NombreAPP">WatzControl</h1>
      <div>
        <button type="button" className="Button_inicioPP">
          Iniciar Sesión
        </button>
        <button type="button" className="Buton_inicioPP">
          Registrarse
        </button>
      </div>
    </div>
  );
}
export default Header_inicioPP;
