import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Header_Informacion (){
  return (
    <div>
      
     <button type="button" className="BInformacion">
     <Link classname="Botones" to="/">
        Volver
        </Link>
      </button>
      <div className="franjaPP"></div>
      
    </div>
  );
}

export default Header_Informacion;