import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import paginaInicio from "../src/Pages/Pages_InicioPP";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={paginaInicio} />
      
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
