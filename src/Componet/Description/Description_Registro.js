import React from "react";
import "../../styles.css";
import { Link } from "react-router-dom";
function Description_Registro() {
  return (
    <div>
    <form className="DI"> 
    <div className= "container">
    <div className="form-group">
    <label htmlFor="exampleInputEmail1">Nombre</label>
    <input type="name" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>
   <div className="form-group">
    <label htmlFor="exampleInputEmail1">Apellido</label>
    <input type="name" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Correo Electronico</label>
    <input type="email" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted"></small>
  </div>

  <div className="form-group">
        <label htmlFor="exampleInputPassword1">Contraseña</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>

       <button type="submit" className="Boton_inicio"> 
       <Link className="Botones"  to="PagesFormulario">
       Registrarse</Link>
        </button>
  </div>
  
  </form>
  
    <div className="render">
    <a className="LinkR" href="https://kn2hk.csb.app/iniciarSe">
          Ya Tengo Una Cuenta!!
        </a>
    </div>  

  </div>
 
  );
}
export default Description_Registro;
