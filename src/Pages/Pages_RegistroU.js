import React from "react";
import "../../src/styles.css";

import Header from "../Componet/Header/Header_Registro";
import Description from "../Componet/Description/Description_Registro";
import Footer from "../Componet/Footer/Footer_Registro"


function Pages_RegistroU (){
 return (
   <> 
    <div className="pages3">

        <Header/>
        <Description />
        <Footer />
      </div>
   </>
 );
}

export default Pages_RegistroU;