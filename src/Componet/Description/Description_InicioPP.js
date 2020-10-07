import React from "react";
import "../../src/styles.css";
import Bombillo from "../../images/Bombillo.jpg";
import Consumo from "../../images/Consumo.jpg";

function Description_InicioPP() {
  return (
    <div>
      <p className="TexCabeza">
        Bienvenid@ a WatzControl, la página Web donde podrás calcular el consumo
        y valor de todo el consumo de electricidad en tu casa.
      </p>
      <div className="TextoIzq">
        Es una Página WEB para los habitantes del corregimiento santa elena que
        tienen un alto consumo de energía y por ello una pérdida de dinero y
        recursos, se llama WatzControl y es una calculadora personalizada que
        mediante unos parámetros específicos calcula la cantidad de energía
        consumida. a diferencia de Boltio: muestra y calcula kilovatio por hora.
        My Use: es una App que ofrece consejos útiles para ahorrar en Energía,
        Gas y Agua. Standby Check: es una App que muestra una visión general del
        consumo de energía mientras dormimos. Nuestro Producto calcula el total
        consumido por cada electrodoméstico, dando como resultado datos más
        precisos sobre lo consumido al mes.
      </div>

      <div className="Imagen">
        <image className="Principal" src={Consumo} />
        <image className="Principal1" src={Bombillo} />
      </div>
    </div>
  );
}

export default Description_InicioPP;
