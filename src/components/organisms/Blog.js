import { useState, useEffect } from "react";
import RelojEffect from "../molecule/RelojEffect";
import RelojEf from "../molecule/Rolex";

const datos = {
  digital: <RelojEffect />,
  analogico: <RelojEf />,
  comentarios: (
    <p>
      <strong>Comentarios:</strong> ¡Qué interesante! Me encantaría aprender más
      sobre la historia de los relojes.
    </p>
  ),
};

const Blog = () => {
  const [recurso, setRecurso] = useState("digital");
  const [contenido, setContenido] = useState(null);

  useEffect(() => {
    setContenido(datos[recurso]);
  }, [recurso]);

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-title">¿Quién creó el primer reloj?</h1>

        <div className="button-container">
          <button className="nav-button" onClick={() => setRecurso("digital")}>
            Digital
          </button>

          <button className="nav-button" onClick={() => setRecurso("analogico")}>
            Analógico
          </button>

          <button
            className="nav-button"
            onClick={() => setRecurso("comentarios")}
          >
            Comentarios
          </button>
        </div>
      </nav>
      <section className="content-container">
        <h2 className="blog-title">{recurso.toUpperCase()}</h2>
        <div className="blog-content">{contenido}</div>
      </section>

      <style jsx>{`
        /* NAVBAR */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 2rem;
          background-color: #0d0d0d;
          border-bottom: 1px solid rgba(255, 215, 0, 0.4);
          font-family: "Merriweather", serif;
        }

        .navbar-title {
          font-size: 1.6rem;
          color: #f5f5f5;
          letter-spacing: 1px;
        }

        .button-container {
          display: flex;
          gap: 1rem;
        }

        .nav-button {
          padding: 0.6rem 1.2rem;
          background: transparent;
          color: gold;
          border: 1px solid gold;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: 0.3s ease;
          font-family: "Merriweather", serif;
        }

        .nav-button:hover {
          background: gold;
          color: #0d0d0d;
        }

        /* CONTENIDO */
        .content-container {
          padding: 3rem;
          max-width: 800px;
          margin: 3rem auto;
          background-color: #111;
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.15);
        }

        .blog-title {
          color: gold;
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          text-align: center;
          font-family: "Merriweather", serif;
        }

        .blog-content {
          font-size: 1.2rem;
          color: #e0e0e0;
          line-height: 1.8;
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Blog;
