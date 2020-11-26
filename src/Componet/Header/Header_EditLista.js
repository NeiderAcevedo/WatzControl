import React from "react";
import "../../styles.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

function Header_EditLista() {
  return (
    <div className="EditLista">
      <h1 className="NombreAPP">WatzControl</h1>
      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>
      
      <button type="button" className="volver">
      <Link className="Botones" to="PagesPPrincipal">
        Volver
        </Link>
      </button>
      <button type="button" className="ayuda">
      <Link className="Botones" to="PagesAyuda">
        Ayuda
        </Link>
      </button>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_EditLista;
