import React from "react";
import "../../src/styles.css";
import Logo_WC from "../../images/Logo_WC.png";

function Footer_InicioPP() {
  return (
    <div>
      <div className="logo">
        <img src={Logo_WC} />
      </div>
      <p className="inicioPP">WatzControl</p>
      <p className="inicioPP1">(031) 346687 WatzControl@proyect.com</p>
      <p className="inicioPP2">Copyright© ©2020</p>
    </div>
  );
}
export default Footer_InicioPP;
