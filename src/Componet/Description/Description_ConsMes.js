import React from "react";
import "../../styles.css";


function Description_ConsMes (){
  return (
   <div className="">
     <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Tipo</th>
      <th scope="col">Tiempo</th>
      <th scope="col">KW</th>
      <th scope="col">Costo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nevera</th>
      <td>24h</td>
      <td>5</td>
      <td>$800</td>
    </tr>
    <tr>
      <th scope="row">Televisor</th>
      <td>3h</td>
      <td>1.01</td>
      <td>$0.150</td>
    </tr>
    <tr>
      <th scope="row">Celular</th>
      <td>30 min</td>
      <td>0.1</td>
      <td>$0.012</td>
    </tr>
    <tr>
      <th scope="row">Computador</th>
      <td>12h</td>
      <td>2</td>
      <td>$100</td>
    </tr>
    <tr>
      <th scope="row">Tostador</th>
      <td>5 min</td>
      <td>0.012</td>
      <td>$0.012</td>
    </tr>
    <tr>
      <th scope="row">Lavadora</th>
      <td>1h</td>
      <td>3</td>
      <td>$400</td>
    </tr>
    <tr>
      <th scope="row">Secador</th>
      <td>10 min</td>
      <td>0.132</td>
      <td>0.0012</td>
    </tr>
    <tr>
      <th scope="row">Audifonos</th>
      <td>20 min</td>
      <td>1</td>
      <td>$150</td>
    </tr>
    <tr>
      <th scope="row">Bombillos</th>
      <td>8</td>
      <td>2.002</td>
      <td>$300</td>
    </tr>



    <tr>
      <th scope="row">Total Día</th>
      <td colspan="3" >$1.750</td>
    </tr>
    <tr>
      <th scope="row">Total Mes</th>
      <td colspan="3" >$45.450</td>
    </tr>
  </tbody>
</table>

    

   </div>

  );
}

export default Description_ConsMes;