import React, { useState } from "react";
import { useStore } from "../store/useStore";
import "../estilos/Habitos.css";

export default function Habitos() {
  const { habitos, toggleHabito, agregarHabito, eliminarHabito } = useStore();
  const [nuevoHabito, setNuevoHabito] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nuevoHabito.trim() !== "") {
      agregarHabito(nuevoHabito);
      setNuevoHabito("");
    }
  };

  return (
    <section className="habitos">
      <div className="habitos-contenedor">
        <h1>Tus Hábitos</h1>
        <p>Organizá tus rutinas y hacé seguimiento de tu progreso diario.</p>

        <form onSubmit={manejarSubmit} className="form-habito">
          <input
            type="text"
            placeholder="Agregar nuevo hábito..."
            value={nuevoHabito}
            onChange={(e) => setNuevoHabito(e.target.value)}
          />
          <button type="submit">Agregar</button>
        </form>

        <div className="habitos-lista">
          {habitos.map((h) => (
            <div
              key={h.id}
              className={`habito-card ${h.completado ? "hecho" : ""}`}
            >
              <h3>{h.nombre}</h3>
              <div className="botones-habito">
                <button onClick={() => toggleHabito(h.id)}>
                  {h.completado ? "✅ Hecho" : "Marcar como hecho"}
                </button>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarHabito(h.id)}
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
