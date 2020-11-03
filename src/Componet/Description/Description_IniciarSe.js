import React from "react";
import "../../styles.css";

function Description_InicioSe() {
  return (
    <div class="dropdown-menu">
      <form class="px-4 py-3">
        <div class="form-group">
          <label for="exampleDropdownFormEmail1"> Correo Electronico</label>
          <input
            type="email"
            class="form-control"
            id="exampleDropdownFormEmail1"
            placeholder="correo@ejemplo.com"
          >
            {" "}
          </input>
        </div>

        <div class="form-group">
          <label for="exampleDropdownFormPassword1">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="exampleDropdownFormPassword1"
            placeholder="contraseña"
          >
            {" "}
          </input>
        </div>

        <div class="form-group">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck">
              {" "}
            </input>
            <label class="form-check-label" for="dropdownCheck">
              Remember me
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="http/">
        New around here? Sign up
      </a>
      <a class="dropdown-item" href="http/">
        Forgot password?
      </a>
    </div>
  );
}

export default Description_InicioSe;
