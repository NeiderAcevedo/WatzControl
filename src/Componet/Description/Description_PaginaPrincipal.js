import React from "react";
import "../../styles.css";

function Description_PaginaPrincipal(){
 return (
<div> 

  
  <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" 
      id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
       aria-expanded="false">
      Introduzca Tiempo
     </button>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="/">Minutos</a>
        <a className="dropdown-item" href="/">Horas</a>
      </div>
    </div>
     <p> </p>

    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" 
    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
    aria-expanded="false">
    Tipo De Moneda
     </button>

    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
       <a className="dropdown-item" href="/"> COL </a>
       <a className="dropdown-item" href="/"> USD </a>
     </div>
     </div>
     <p> </p>


</div>
 );
}

export default Description_PaginaPrincipal