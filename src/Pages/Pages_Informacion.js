import React from "react";
import "../../src/styles.css";
import Header from "../Componet/Header/Header_Informacion";
import Description from "../Componet/Description/Description_Informacion";
import Footer from "../Componet/Footer/Footer_Informacion";

function Pages_Informacion() {
  return (
    <>
      <div className="pages1">
        <Header />
        <Description />
        <Footer />
      </div>
    </>
  );
}

export default Pages_Informacion;