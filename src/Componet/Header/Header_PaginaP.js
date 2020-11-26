import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.jpg";



function Header_PaginaP() {
  return (
    <div className="PP">
      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>

      <button type="button" className="ayuda">
        <Link className="Botones" to="PagesAyuda">
          Ayuda{" "}
        </Link>
      </button>

      <button type="button" className="cerrarS">
        <Link className="Botones" to="/">
          Cerrar Sesión{" "}
        </Link>
      </button>

      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_PaginaP;
