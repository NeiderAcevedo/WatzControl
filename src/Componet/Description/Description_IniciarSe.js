import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

/* import { Link } from "react-router-dom"; */

function Description_InicioSe() {
  return (
    <div className="BackG">
      <form className="iniseM">
        <div className="container">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <button type="submit" className="Boton_inicio">
          <Link className="Botones" to="PagesPPrincipal">
            Iniciar
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Description_InicioSe;
