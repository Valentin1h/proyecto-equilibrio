import React from "react";
import "../estilos/Habitos.css";

export default function Habitos() {
  return (
    <section className="habitos">
      <div className="habitos-contenedor">
        <h1>Tus Hábitos</h1>
        <p>Organizá tus rutinas y hacé seguimiento de tus progresos.</p>

        <div className="habitos-lista">
          <div className="habito-card">
            <h3>🧘 Meditar 10 minutos</h3>
            <p>Un momento para desconectar y respirar.</p>
            <button className="btn-habito">Marcar como hecho</button>
          </div>

          <div className="habito-card">
            <h3>💧 Tomar 2L de agua</h3>
            <p>Mantené tu cuerpo hidratado durante el día.</p>
            <button className="btn-habito">Marcar como hecho</button>
          </div>

          <div className="habito-card">
            <h3>🚶‍♂️ Caminar 30 minutos</h3>
            <p>Un poco de movimiento para mejorar tu energía.</p>
            <button className="btn-habito">Marcar como hecho</button>
          </div>
        </div>
      </div>
    </section>
  );
}
