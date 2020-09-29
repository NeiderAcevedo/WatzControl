import React from "react";
import "../../src/styles.css";

function Header_inicioPP() {
  return (
    <div>
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
