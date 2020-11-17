import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Description_Formulario() {
  return (
  <div className="FormularioPart1">

     <h1 className="NombreAPP"> WatzControl</h1>
     <h5 className="NombreAPP"> Validación De Datos Del Usuario </h5>

     <h> Ingresar Nombre Completo </h>
      <div className="NomApe">
        <input className="NombreApellido" type="text" placeholder="Nombre Completo" />
        <p> </p>
      </div>
       <h> Seleccione Estrato Social </h>
<div className="Nomcomlete">
  <div class="form-row align-items-center">
    <div class="col-auto my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option className="form-check-input" selected>  Estrato Social</option>
        <option value="1">Estrato 1</option>
        <option value="2">Estrato 2</option>
        <option value="3">Estrato 3</option>
        <option value="4">Estrato 4</option>
        <option value="3">Estrato 5 y 6</option>
      </select>
    </div>
  </div>
</div>
  
  

  <div> 
    <button type="button" className="Siguiente">
    <Link classname="Botones" to="PagesFormulario2">
      Siguiente
    </Link>
    </button>
   </div>
</div>
);
}
export default Description_Formulario;
  