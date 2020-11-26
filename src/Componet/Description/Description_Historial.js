import React from "react";
import "../../styles.css";
import { Bar } from "react-chartjs-2";

function Description_Historial() {
  const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    datasets: [
      {
        label: "Consumo",
        backgroundColor: "#FFEB3B",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "#FFF9C4",
        hoverBorderColor: "#212121",
        data: [
          50.0,
          48.5,
          47.0,
          51.0,
          48.0,
          45.0,
          49.0,
          60.0,
          50.25,
          44.0,
          42.0,
          48.2
        ]
      }
    ]
  };
  const opciones = {
    maintainsAspectRatio: false,
    responsive: true
  };

  return (
    <div>
      <div
        className="DiagramaBarras"
        style={{ width: "100%", height: "250px" }}
      >
        <Bar data={data} options={opciones} />
      </div>

      <div className="TablaHistorial" style={{ width: "99%", height: "900px" }}>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Artefacto</th>
              <th scope="col">Tiempo</th>
              <th scope="col">Kwh</th>
              <th scope="col">Costo$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Nevera</th>
              <td>720 h</td>
              <td>50</td>
              <td>17.000</td>
            </tr>
            <tr>
              <th scope="row">Celular</th>
              <td>90 h</td>
              <td>20</td>
              <td>7.200</td>
            </tr>
            <tr>
              <th scope="row">Bombillo</th>
              <td>620 h</td>
              <td>50</td>
              <td>1.400</td>
            </tr>
            <tr>
              <th scope="row">Microondas</th>
              <td>10 h</td>
              <td>75</td>
              <td>9.000</td>
            </tr>
            <tr>
              <th scope="row">Televisor</th>
              <td>48 h</td>
              <td>16</td>
              <td>4.500</td>
            </tr>
            <tr>
              <th scope="row">Horno</th>
              <td>5 h</td>
              <td>6</td>
              <td>1.000</td>
            </tr>
            <tr>
              <th scope="row">Plancha Ropa</th>
              <td> 50 min</td>
              <td>8</td>
              <td>500</td>
            </tr>
            <tr>
              <th scope="row">Secador Cabello</th>
              <td>20 min</td>
              <td>2</td>
              <td>300</td>
            </tr>
            <tr>
              <th scope="row">Equipo Sonido</th>
              <td>3 h</td>
              <td>6</td>
              <td>1.250</td>
            </tr>
            <tr>
              <th scope="row">Aire Acondicionado</th>
              <td>15 h</td>
              <td>4.9</td>
              <td>5.000</td>
            </tr>
            <tr>
              <th scope="row">Audifonos</th>
              <td>30 min</td>
              <td>1.8</td>
              <td>150</td>
            </tr>
            <tr>
              <th scope="row">Bateria portatil</th>
              <td>4 h</td>
              <td>8</td>
              <td>2.200</td>
            </tr>
            <tr>
              <th scope="row">Lavadora</th>
              <td>9h</td>
              <td>19</td>
              <td>10.000</td>
            </tr>
            <tr>
              <th scope="row">Total</th>
              <td>1.531,86</td>
              <td>266.7</td>
              <td>59.500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Description_Historial;
