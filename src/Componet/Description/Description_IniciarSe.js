import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Description_InicioSe() {
  return (
    <form>
      <div className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
      <button type="submit" className="Boton-inicio">
        <Link className="iniSesion" to="Iniciousuario">
          Iniciar
        </Link>
      </button>
    </form>
  );
}

export default Description_InicioSe;
