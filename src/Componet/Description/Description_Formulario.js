import React from "react";
import "../../styles.css";

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
  
   <div className="FormuText">
  <h5>  
     A Continuación tendrás que  llenar el formulario 
     de acuerdo a los electrodomésticos que 
     tengas en tu hogar.
  </h5>

  <h >
     Es de suma importancia diligenciar  el 
     formulario correctamente para así 
     prestar un muy buen servicio.
  </h>
  </div>
  
<div className="SeleccionFormulario">
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
   Aire Acondicionado
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Armario Climatisador De Vino
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Aspiradora
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Batidora
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Cafetera Eléctrica
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Campana Extractora
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Cepillo Eléctrico
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Estufa 
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Freidora
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Hervidor Eléctrico de Agua
  </label>
</div>
</div>

<div> 
<button type="button" className="Siguiente">
       Siguiente
      </button>
</div>
</div>
);
}
export default Description_Formulario;
  