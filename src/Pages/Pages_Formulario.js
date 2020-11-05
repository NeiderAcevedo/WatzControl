import React from "react";
import "../../src/styles.css";
import Header from "../Componet/Header/Header_Formulario";
import Description from "../Componet/Description/Description_Formulario";
import Footer from "../Componet/Footer/Footer_Formulario"

function Pages_Formulario (){
  return (
    <> 
    <div className="pages2">
        <Header />
        <Description />
        <Footer />
      </div>
    
    </>
  );
}

export default Pages_Formulario;