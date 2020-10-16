import React from "react";
import "./styles.css";
import Bombillo from "../src/images/Bombillo.jpg";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      
      <div className="neider">
        <image className="Principal1" src={Bombillo.jpg} />
      </div>
    </div>
  );
}
