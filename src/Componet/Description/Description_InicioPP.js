import React from "react";
import "../../src/styles.css";
import Bombillo from "../../images/Bombillo.jpg";
import Consumo from "../../images/Consumo.jpg";

function Description_InicioPP() {
  return (
    <div>
      <p className="TexCabeza">
        Bienvenid@ a WatzControl, la página Web donde podrás 
        calcular el consumo y valor de todo el consumo 
        de electricidad en tu casa.
      </p>
         <div className="problema">
          <h1>Problema </h1>
        </div>

      <div className="Texto1"> 
          El corregimiento Santa Elena pasa  por una crisis energetica en 
          los ultimos tiempos, esto debido al uso inadecuado por parte de 
          los habitantes del corregimiento, y por otro lado debido que los 
          habitantes ya pasan mayor parte de su tiempo en sus casas, ocacionanado 
          el alto consumo del recurso energetico, y un total a pagar demasiado costoso.
      </div>

        <div className="vision">
          <h1>Visión </h1>
        </div>
        
      <div className="Texto2">
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
