import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";

function Header_inicioPP() {
  return (
    <div >
      <h1 className="NombreAPP">WatzControl</h1>

      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>
      <div className="franja">
       
      <button type="button" className="Button_inicioPP">
          <Link classname="Botones" to="PagesInformacion">
          Información 
          </Link>
        </button>

        <button type="button" className="Button_inicioPP">
          <Link classname="Botones" to="iniciarSe">
          Iniciar Sesión
          </Link>
        </button>

        <button type="button" className=" Button_inicioPPR">
         <Link classname="Botones" to="PagesRegistroU">
          Registrarse
          </Link>
        </button>

      </div>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_inicioPP;
