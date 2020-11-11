import React from "react";
import "../../src/styles.css";
import Description from "../Componet/Description/Description_IniciarSe";
import Header from "../Componet/Header/Header_IniciarSesion"
import Footer from "../Componet/Footer/Footer_IniciarSesion";

function Pages_InicioSe() {
  return (
    <>
      <div className="pages2">
        <Description />
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default Pages_InicioSe;
