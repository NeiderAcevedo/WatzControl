import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";


function Header_Registro() {
  return (
    <div className="BRegistro">
      <button type="button" className="volver">
      <Link className="Botones" to="/">
   Volver 
</Link> 
      </button>
      <button type="button" className="ayuda">
      <Link className="Botones"  to="PagesAyudaIR">
        Ayuda
      </Link>
      </button>
    </div>
  );
}
export default Header_Registro;
