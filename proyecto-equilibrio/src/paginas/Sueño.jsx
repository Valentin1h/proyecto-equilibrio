import React, { useState } from "react";
import "../estilos/Sueño.css";
import useSueño from "../estados/useSueño";

export default function Sueño() {
  const [fecha, setFecha] = useState("");
  const [horas, setHoras] = useState("");
  const { registros, agregarRegistro, eliminarRegistro } = useSueño();

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (fecha && horas) {
      agregarRegistro(fecha, horas);
      setFecha("");
      setHoras("");
    }
  };

  return (
    <div className="pagina-sueno">
      <h1>Registro de Sueño</h1>

      <form onSubmit={manejarSubmit} className="form-sueno">
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <input
          type="number"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
          placeholder="Horas dormidas"
          min="0"
          max="24"
        />
        <button type="submit">Agregar</button>
      </form>

      <ul className="lista-registros">
        {registros.map((r) => (
          <li key={r.fecha}>
            <span>
              {r.fecha}: {r.horas} horas
            </span>
            <button onClick={() => eliminarRegistro(r.fecha)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
