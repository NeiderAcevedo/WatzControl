import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";

function Description_Ayuda() {
  return (
    <div className="BotonesAyuda">
      <button type="button" className="ButtonAyuda">
        <Link classname="Botones" to="PagesSNuevoP">
          Soy Nuevo En La Página
        </Link>
      </button>

      <button type="button" className="ButtonAyuda">
        <Link classname="Botones" to="PagesPorQ">
          ¿Por Qué Debo Registrarme?
        </Link>
      </button>

      <button type="button" className="ButtonAyuda">
        <Link classname="Botones" to="PagesInformacion">
          Información De La Página
        </Link>
      </button>

      <button type="button" className="ButtonAyuda">
        <Link classname="Botones" to="PagesNotiError2">
          Notificar Error
        </Link>
      </button>

      <button type="button" className="ButtonAyuda">
        <Link classname="Botones" to="PagesRecuHistorial">
          Recuperar Historial
        </Link>
      </button>
    </div>
  );
}

export default Description_Ayuda;
