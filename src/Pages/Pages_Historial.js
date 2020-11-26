import React from "react";
import "../../src/styles.css";
import Header from "../Componet/Header/Header_Historial";
import Description2 from "../Componet/Description/Description_Calendar";
import Description from "../Componet/Description/Description_Historial";
import Footer from "../Componet/Footer/Footer_Historial";

function Pages_Historial() {
  return (
    <>
      <div className="pages12">
        <Header />
        <Description2/>
        <Description />
        <Footer />
      </div>
    </>
  );
}
export default Pages_Historial;
