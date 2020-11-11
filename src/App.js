import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import paginaInicio from "../src/Pages/Pages_InicioPP";
import Pages_InicioSe from "../src/Pages/Pages_InicioSe";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={paginaInicio} />

          <Route exact path="iniciarSe" component={Pages_InicioSe} />
      
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
