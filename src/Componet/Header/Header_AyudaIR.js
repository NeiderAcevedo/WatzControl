import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Header_AyudaIR() {
  return (
    <div>


      <button type="button" className="volver">
      <Link className="Botones"  to="iniciarSe">
        Volver
       </Link>

      </button>
      <div className="franjaPP"></div>
    </div>
  );
}
export default Header_AyudaIR;