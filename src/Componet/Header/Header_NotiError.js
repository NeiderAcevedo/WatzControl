import React from "react";
import "../../styles.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

function Header_NotiError() {
  return (
    <div>
      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>
      
      <button type="button" className="volver">
      <Link classname="Botones" to="PagesAyuda">
        Volver
      </Link>
      </button>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_NotiError;
