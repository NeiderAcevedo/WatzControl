import React from "react";
import "../../src/styles.css";
import Header from "../Componet/Header/Header_inicioPP";
import Franjas from "../Componet/Franjas/franja_InicioPP";
import Description from "../Componet/Description/Description_InicioPP";
import Footer from "../Componet/Footer/Footer_InicioPP";

function InicioPP() {
  return (
    <>
      <div className="pages1">
        <Header />
        <Franjas/> 
        <Description />
        <Footer/>
      </div>
    </>
  );
}

export default InicioPP;
