import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Inicio from "./paginas/Inicio";
import Habitos from "./paginas/Habitos";
import Sueno from "./paginas/Sueño";
import Motivacion from "./paginas/Motivacion";
import "./estilos/App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/sueno" element={<Sueno />} />
          <Route path="/motivacion" element={<Motivacion />} />
        </Routes>
      </main>
    </Router>
  );
}
