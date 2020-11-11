import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

function Header_inicioPP() {
  return (
    <div>
      <h1 className="NombreAPP">WatzControl</h1>

      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>
      <div className="franja">

        <button type="button" class=
        "btn btn-outline-secondary Button_inicioPP">
          <Link  to="iniciarSe">
          Iniciar Sesión
          </Link>
        </button>

        <button type="button" class=
        "btn btn-outline-secondary Button_inicioPPR">
         <Link  to="Registro">
          Registrarse
          </Link>
        </button>

      </div>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_inicioPP;
