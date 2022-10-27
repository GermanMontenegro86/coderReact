import React from "react";
import { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Button from "react-bootstrap/esm/Button";
import "./ItemCount.css";


const ItemCount = ({stock}) => {
  const [valor, setValor] = useState(1);
  const [estado, setEstado] = useState("");


  function agregar() {
    
    stock !== valor ? setValor(valor + 1) : setEstado("¡No hay diponibilidad!");
  }



  function quitar() {
    setEstado("");
    valor !== 0 ? setValor(valor - 1) : setEstado("");
  }

  return (
    <div>
     
      <div className="count">
      <Button variant="light" className="btnCount" onClick={quitar}>-</Button>{' '}
       
        <h1>{valor}</h1>
        
        <Button variant="light" className="btnCount" onClick={agregar}>+</Button>{' '}
        
      </div>
      <Button variant="success" className="btnAgregar" >Agregar carrito</Button>{' '}

      <h6>{estado}</h6>
    </div>
  );
};

export default ItemCount;
