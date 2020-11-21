import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Description_NotiER() {
  return (
    <div className="noterr">
      <div className="NotiH1">
        <h1 className="noteRR"> Notificar Error </h1>
        <h className="NotiH2">
          Notificar un error si algunas de las funcionalidades de la página
          andan mal.
        </h>
      </div>

      <div className="Recu1">
        <div className="Recu2">
          <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>

      <h className="NotiError">
        {" "}
        Por Favor Escribir En El Campo, Los Posibles Errores o Inconvenientes
        Que Presenta El Programa
      </h>

      <p> </p>
      <input
        className="posterr" 
        class="form-control form-control-sm"
        ntype="text"
        placeholder="Posibles Errores"
      />
      <p> </p>

      <button type="button" className="Button_Noti">
        <Link classname="Botones" to="PagesAyuda">
          Notificar Error
        </Link>
      </button>
    </div>
  );
}

export default Description_NotiER;
