import React from "react";
import "../../src/styles.css";
import Header from "../Componet/Header/Header_ConsMes";
import Description from "../Componet/Description/Description_ConsMes";
import Description3 from "../Componet/Description/Description_Calendar";
import Footer from "../Componet/Footer/Footer_ConsMes";

function Pages_ConsumoMes() {
  return (
    <>
      <div className="pages14">
        <Header />
        <Description3/>
        <Description />
        <Footer />
      </div>
    </>
  );
}
export default Pages_ConsumoMes;
