import React from "react";
import "../../src/styles.css";
import Header from "../Componet/Header/Header_PaginaP";
import Description from "../Componet/Description/Description_PaginaPrincipal";
import Footer from "../Componet/Footer/Footer_PaginaP";

function Pages_PPrincipal() {
  return (
    <>
      <div className="pages5">
        <Header />
        <Description />
        <Footer />
      </div>
    </>
  );
}

export default Pages_PPrincipal;
