import React from "react";
import "../estilos/Inicio.css";

export default function Inicio() {
  return (
    <section className="inicio">
      <div className="inicio-contenedor">
        <h1>
          Bienvenido a <span>Equilibrio</span>
        </h1>
        <p>
          Tu espacio para mejorar tus hábitos, cuidar tu descanso y mantener tu
          motivación día a día.
        </p>
        <div className="inicio-botones">
          <a href="/habitos" className="btn">
            Comenzar
          </a>
          <br />
          <a href="/motivacion" className="btn btn-secundario">
            Inspirarme
          </a>
        </div>
      </div>
    </section>
  );
}
