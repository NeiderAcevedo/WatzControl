import React from "react";
import "../../src/styles.css";
import Header from "../Componet/Header/Header_inicioPP";
import Description from "../Componet/Description/Description_InicioPP";
import footer from "../Componet/Footer/Footer_InicioPP";
import Footer_InicioPP from "../Componet/Footer/Footer_InicioPP";

function Inicio() {
  return (
    <> 
    <div className= "fondo">
      <Header/>
      <Description/>
      <Footer/>
    </div>
    </>
  );
}