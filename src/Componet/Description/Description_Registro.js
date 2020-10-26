import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Description_Registro() {
  return (
    <form>
      <div className="container">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Nombre
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Correo Eletrónico
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">
            Contraseña
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
      </div>
      <button type="button" class="Regresar">
        <Link className="Botones" to="Funcionusuario">
          Registrarse{" "}
        </Link>
      </button>
    </form>
  );
}
export default Description_Registro;
