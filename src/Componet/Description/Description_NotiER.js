import React from "react";
import "../../styles.css";

function Description_NotiER() {
  return (
    <div>
      <div className="NotiH1">
        <h1> Notificar Error </h1>
        <h2 className="NotiH2">
          Notificar un error si algunas de las funcionalidades de la página
          andan mal.
        </h2>
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

      <h2 className="NotiError">
        {" "}
        Por Favor Escribir En El Campo, Los Posibles Errores o Inconvenientes
        Que Presenta El Programa
      </h2>

      <p> </p>
      <input
        class="form-control form-control-sm"
        ntype="text"
        placeholder="Ubicacion"
      />
      <p> </p>

      <button type="button" className="Button_Noti">
        Notificar Error
      </button>
    </div>
  );
}

export default Description_NotiER;
