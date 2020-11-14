import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import paginaInicio from "../src/Pages/Pages_InicioPP";
import Pages_InicioSe from "../src/Pages/Pages_InicioSe";
import Pages_Ayuda from "../src/Pages/Pages_Ayuda";
import Pages_consumoMes from "../src/Pages/Pages_ConsumoMes";
import Pages_EditLista from "../src/Pages/Pages_EditLista";
import Pages_Formulario from "../src/Pages/Pages_Formulario";
import Pages_Historial from "../src/Pages/Pages_Historial";
import Pages_InfoPagina from "../src/Pages/Pages_InfoPagina";
import Pages_NotiError from "../src/Pages/Pages_NotiError";
import Pages_PPrincipal from "../src/Pages/Pages_PPrincipal";
import Pages_PorQ from "../src/Pages/Pages_PorQ";
import Pages_RecuHistorial from "../src/Pages/Pages_RecuHistorial";
import Pages_RegistroU from "../src/Pages/Pages_RegistroU";
import Pages_SNuevoP from "../src/Pages/Pages_SNuevoP";
import Pages_Informacion from "../src/Pages/Pages_Informacion";
import Pages_AyudaIR from "../src/Pages/Pages_AyudaIR";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={paginaInicio} />
          <Route exact path="/iniciarSe" component={Pages_InicioSe} />
          <Route exact path="/PagesAyuda" component={Pages_Ayuda} />
          <Route exact path="/pagesConsumoMes" component={Pages_consumoMes} />
          <Route exact path="/PagesEditLista" component={Pages_EditLista} />
          <Route exact path="/PagesFormulario" component={Pages_Formulario} />
          <Route exact path="/PagesHistorial" component={Pages_Historial} />
          <Route exact path="/PagesInfoPagina" component={Pages_InfoPagina} />
          <Route exact path="/PagesNotiError" component={Pages_NotiError} />
          <Route exact path="/PagesPPrincipal" component={Pages_PPrincipal} />
          <Route exact path="/PagesPorQ" component={Pages_PorQ} />
          <Route exact path="/PagesRecuHistorial" component={Pages_RecuHistorial}/>
          <Route exact path="/PagesRegistroU" component={Pages_RegistroU} />
          <Route exact path="/PagesSNuevoP" component={Pages_SNuevoP} />
          <Route exact path="/PagesInformacion" component={Pages_Informacion} />
          <Route exact path="/PagesAyudaIR" component={Pages_AyudaIR}/>

        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
