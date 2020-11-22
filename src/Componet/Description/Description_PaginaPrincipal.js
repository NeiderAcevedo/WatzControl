import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Description_PaginaPrincipal() {
  return (
    <div >
       
    <div class="btn-group" role="group">
    <button  /* className="buttonDes" */ id="btnGroupDrop1" type="button" 
      class="btn btn-secondary dropdown-toggle" 
       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ajustes
    </button>
    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <a class="dropdown-item" href="https://kn2hk.csb.app/PagesPPrincipal">Editar Cuenta</a>
      <a class="dropdown-item" href="https://kn2hk.csb.app/PagesPPrincipal">Historial Mes</a>
      <a class="dropdown-item" href="https://kn2hk.csb.app/PagesPPrincipal">Historial</a>
    </div>
  </div>

      <form className="AligTex">
        <div className="DesplegablePP" class="">

         <div  class="row">
         <div class="col-1"> </div>
          <div class="col-10 my-2">
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">
              Preference{" "}
            </label>
            <select  className="PDI" class="custom-select mr-sm-1" id="inlineFormCustomSelect">
              <option selected>Seleccione Electrodoméstico</option>
              <option value="1">Aire Acondicionado</option>
              <option value="2">Aspiradora</option>
              <option value="3">Batidora</option>
              <option value="4">Cafetera Eléctrica</option>
              <option value="5">Cepillo Eléctrico</option>
              <option value="6">Freidora</option>
              <option value="7">Horno Eléctrico</option>
              <option value="8">Lavadora</option>
              <option value="9">Tostadora</option>
              <option value="10">Router Internet</option>
              <option value="11">Sandwichera</option>
              <option value="12">Lustradora</option>
              <option value="13">Microondas</option>
              <option value="14">MiniBar</option>
              <option value="15">Olla Arrocera</option>
              <option value="16">Nevera</option>
              <option value="17">Ventilador</option>
              <option value="18">Celular</option>
              <option value="19">Cocinas de Vitrocerámica</option>
              <option value="20">Barra de Sonido</option>
              <option value="21">Computador Portatil</option>
              <option value="22">Computador de Mesa</option>
              <option value="23">Televisor</option>
              <option value="24">Proyector</option>
              <option value="25">DVD</option>
              <option value="26">Impresora</option>
              <option value="27">Tenaza Risadora de Cabello</option>
              <option value="28">Secador Cabello</option>
              <option value="29">Maquina de Afeitar</option>
              <option value="30">Plancha Cabello</option>
            </select>
          </div>
        </div>
        <div class="col-1"> </div>
       </div>


        <div className="DesplegablePP" class="">
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">
              Preference
            </label>
            <select className="PDI" class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Seleccione Tipo de Tiempo</option>
              <option value="1">Horas</option>
              <option value="2">Minutos</option>
            </select>
          </div>
        </div>
       
        <div className="PaginPin">
        <input className="NombreApellido" type="text" placeholder="Introduzca Tiempo" />
        <p> </p>
      </div>
        

        <div className="DesplegablePP" class="">
          <div class="col-auto my-1">
            <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">
              Preference
            </label>
            <select className="PDI" class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Seleccione Tipo De Moneda</option>
              <option value="1">Usd-Dolar</option>
              <option value="2">Col-PesosCol</option>
            </select>
          </div>
        </div>

        <div className="PaginPin">
          
        <input  className="NombreApellido" type="text" placeholder="Tiempo Total" />
        <p> </p>
      </div>
     
      <div> 
      <button type="button" className="Siguiente">
      <Link classname="Botones" to="PagesPPrincipal">
      Calcular
      </Link>
      </button>
      </div>

      </form>

    </div>
  );
}

export default Description_PaginaPrincipal;
