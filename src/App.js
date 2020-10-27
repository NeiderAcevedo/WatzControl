import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import paginaInicio from "../src/Pages/Pages_InicioPP";
import paginaIniciarSesion from "../src/Pages/Pages_InicioSe";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={paginaInicio} />
          <Route exact path="iniSesion" component={paginaIniciarSesion} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
