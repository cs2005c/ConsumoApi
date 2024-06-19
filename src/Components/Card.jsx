import React from "react";

function Card() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="color_izquierda">
            <span>Acá va Nombre Moneda y Fecha</span>
          </div>

          <div className="color_derecha">
            <span>Acá va el Valor en pesos de la Moneda</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
