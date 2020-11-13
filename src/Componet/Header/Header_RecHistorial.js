import React from "react";
import "../../styles.css";
import logo from "../../images/logo.jpg";


function Header_RecHistorial() {
  return (
    <div>
      <div className="logoH">
        <img className="logoHE" src={logo} />
      </div>
      
      <button type="button" className="volver">
        Volver
      </button>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_RecHistorial;
