import React, { useState } from "react";
import "../estilos/Sueno.css";

export default function Sueno() {
  const [horasDormidas, setHorasDormidas] = useState("");
  const objetivo = 8; // Horas recomendadas por día

  // Calcular diferencia con el objetivo
  const diferencia = objetivo - horasDormidas;

  return (
    <section className="sueno">
      <div className="sueno-contenedor">
        <h1>Control del Sueño 😴</h1>
        <p>
          Llevar un registro del descanso te ayuda a mantener equilibrio y
          energía durante el día.
        </p>

        <div className="registro">
          <label htmlFor="horas">¿Cuántas horas dormiste anoche?</label>
          <input
            type="number"
            id="horas"
            min="0"
            max="24"
            placeholder="Ej: 7"
            value={horasDormidas}
            onChange={(e) => setHorasDormidas(Number(e.target.value))}
          />
        </div>

        <div className="resultado">
          {horasDormidas === "" ? (
            <p>Ingresá tus horas para ver el resultado 💤</p>
          ) : horasDormidas >= objetivo ? (
            <p className="bien">
              ¡Excelente! Dormiste {horasDormidas} horas, alcanzaste tu objetivo
              👏
            </p>
          ) : (
            <p className="alerta">
              Dormiste {horasDormidas} horas, te faltaron {diferencia} horas 😴
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
