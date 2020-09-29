import React from "react";
import "../../src/styles.css";
import logo from "../../images/Logo_WC.png";

function Footer_InicioPP() {
  return (
    <div>
      <div className="logo"> 
      <img src={logo}/>
      </div>
      <p className="inicioPP">WatzControl</p>
      <p className="inicioPP1">(031) 346687 WatzControl@proyect.com</p>
      <p className="inicioPP2">Copyright© ©2020</p>
    </div>
  );
}
export default Footer_InicioPP;
