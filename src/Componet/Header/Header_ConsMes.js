import React from "react";
import "../../styles.css";
import logo from "../../images/logo.jpg";

function Header_ConsMes() {
  return (
    <div>
     <h1 className="NombreAPP">WatzControl</h1>

     <div className="logoH">
      <img className="logoHE" src={logo} />
      </div>
      <div className="franja">

      <button type="button" className="volver">
        Volver
      </button>
      <button type="button" className="ayuda">
        Ayuda
      </button>
      </div>

      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_ConsMes;
