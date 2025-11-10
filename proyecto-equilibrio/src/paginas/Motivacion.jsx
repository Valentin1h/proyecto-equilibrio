import React, { useEffect, useState } from "react";
import "../estilos/Motivacion.css";

const FALLBACK_PHRASES = [
  {
    text: "No cuentes los días, haz que los días cuenten.",
    author: "Muhammad Ali",
  },
  {
    text: "La acción es la clave fundamental de todo éxito.",
    author: "Pablo Picasso",
  },
  {
    text: "Comienza donde estás. Usa lo que tienes. Haz lo que puedas.",
    author: "Arthur Ashe",
  },
  {
    text: "Lo que no te mata, te hace más fuerte.",
    author: "Friedrich Nietzsche",
  },
];

export default function Motivacion() {
  const [frase, setFrase] = useState("");
  const [autor, setAutor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWithRetries(url, attempts = 2, delayMs = 500) {
    let lastError;
    for (let i = 0; i < attempts; i++) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      } catch (err) {
        lastError = err;
        if (i < attempts - 1) {
          await new Promise((r) => setTimeout(r, delayMs));
        }
      }
    }
    throw lastError;
  }

  const obtenerFrase = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWithRetries(
        "https://api.quotable.io/random",
        2,
        400
      );

      setFrase(data.content || "");
      setAutor(data.author || "Anónimo");
    } catch (err) {
      console.warn("Error fetch frase:", err);

      const fallback =
        FALLBACK_PHRASES[Math.floor(Math.random() * FALLBACK_PHRASES.length)];
      setFrase(fallback.text);
      setAutor(fallback.author);
      setError(
        "No se pudo cargar la frase desde la API; mostrando alternativa local."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerFrase();
  }, []);

  return (
    <div className="motivacion">
      <h1>Motivación diaria 💪</h1>

      <div className="frase-container" aria-live="polite">
        {loading ? (
          <p className="motivacion-cargando">Cargando frase...</p>
        ) : (
          <>
            <p className="frase">“{frase}”</p>
            <p className="autor">— {autor}</p>
          </>
        )}

        {error && <p className="motivacion-error">{error}</p>}

        <div className="motivacion-acciones">
          <button
            onClick={obtenerFrase}
            disabled={loading}
            className="btn-nueva"
          >
            {loading ? "Cargando..." : "Nueva frase 🔁"}
          </button>
        </div>
      </div>
    </div>
  );
}
