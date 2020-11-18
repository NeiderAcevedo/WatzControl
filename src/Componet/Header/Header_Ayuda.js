import React from "react";
import "../../styles.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

function Header_Ayuda() {
  return (
    <div>
      <h1 className="NombreAPP">WatzControl</h1>
      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>

      <button type="button" className="volver">
      <Link classname="Botones" to="PagesPPrincipal">
        Volver
        </Link>
      </button>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_Ayuda;
