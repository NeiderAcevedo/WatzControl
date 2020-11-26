import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

registerLocale("es", es);

class Description_Calendar extends Component {
  state = {
    fecha: new Date("2020", "10", "26")
  };

  onChange = (fecha) => {
    this.setState({ fecha: fecha });
  };

  mostrarFecha = (fecha) => {
    alert(fecha);
  };

  render() {
    return (
      <>
        <div className="contenedor">
          <div className="center">
            <DatePicker
              selected={this.state.fecha}
              onChange={this.onChange}
              loccale="es"
              className="pickers"
              dateFormat="dd-MMMM-yyyy"
            />
            <br />
            <br />

            <input
              type="button"
              value="Mostrar fecha"
              className="btn btn -primary"
              onClick={() => this.mostrarFecha(this.state.fecha)}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Description_Calendar;
