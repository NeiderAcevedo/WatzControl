import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Description_Ayuda() {
  return (
    <div>
      <button type="button" className="ButtonAyuda">
      <Link classname="Botones" to="PagesFormulario2">
        Soy Nuevo En La Página
        </Link>
      </button>

      <button type="button" className="ButtonAyuda">
      <Link classname="Botones" to="PagesFormulario2">
        ¿Por Qué Debo Registrarme?
     </Link>
      </button>

      <button type="button" className="ButtonAyuda">
      <Link classname="Botones" to="PagesFormulario2">
        Información De La Página
        </Link>
      </button>

      <button type="button" className="ButtonAyuda">
      <Link classname="Botones" to="PagesFormulario2">
        Notificar Error
        </Link>
      </button>

      <button type="button" className="ButtonAyuda">
      <Link classname="Botones" to="PagesFormulario2">
        Recuperar Historial
        </Link>
      </button>
    </div>
  );
}

export default Description_Ayuda;
