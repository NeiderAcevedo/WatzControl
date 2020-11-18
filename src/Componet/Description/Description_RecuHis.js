import React from "react";
import "../../styles.css";

function Description_RecuHis() {
  return (
    <div className="Res">
      <h2 className="RecuHH1"> Recuperar Historial </h2>
      <h2 className="RecuHH1"> Ingresar El Correo Del Usuario </h2>

      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <button type="button" className="Button_RecuHis">
        Recuperar Historial
      </button>
    </div>
  );
}
export default Description_RecuHis;
