import React from "react";
import { useState, useEffect } from "react";

function MiApi() {
  const [data, setData] = useState([]);

  const url = "https://mindicador.cl/api";

  useEffect(() => {
    LeeIndicadores();
  }, []);

  const LeeIndicadores = async () => {
    const response = await fetch(url);
    const data = await response.json();
    /*  setData(`${data.uf.codigo} - ${data.uf.valor}`); */
    /* console.log(data.uf.nombre);
    console.log(data.uf.valor);
    console.log(data.uf.codigo);
    console.log(data); */
    setData(data);
    /*  {
      Object.keys(data).map((key, index) => (
        <tr key={index}>
          <td>{key}</td>

          <td>{data[key].valor}</td>
        </tr>
      ));
    } */
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Indicador</th>

            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(data).map((key, index) => (
            <tr key={index}>
              <td>{key}</td>

              <td>{data[key].valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;
