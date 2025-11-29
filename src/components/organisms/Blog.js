import { useState, useEffect } from "react";
import RelojEffect from "../molecule/RelojEffect";
import RelojEf from "../molecule/Rolex";

const datos = {
  digital: <RelojEffect />,
  analogico: <RelojEf />,
  comentarios:
    "comentarios: ¡Qué interesante! Me encantaría aprender más sobre la historia de los relojes.",
};

const Blog = () => {
  const [recurso, setRecurso] = useState("digital");
  const [contenido, setContenido] = useState("");

  useEffect(() => {
    setContenido(datos[recurso]);
  }, [recurso]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-title">¿Quien creó el Primer Reloj?</div>
        <div className="button-container">
          <button className="nav-button" onClick={() => setRecurso("digital")}>
            Digital
          </button>
          <button
            className="nav-button"
            onClick={() => setRecurso("analogico")}
          >
            Analogico
          </button>
          <button
            className="nav-button"
            onClick={() => setRecurso("comentarios")}
          >
            Comentarios
          </button>
        </div>
      </nav>
      <div className="content-container">
        <h2 className="blog-title">{recurso.toUpperCase()}</h2>
        <p className="blog-content">{contenido}</p>
      </div>

      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: linear-gradient(to right, #141212, #c57805);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .navbar-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #a02390;
        }
        .button-container {
          display: flex;
          gap: 10rem;
        }
        .nav-button {
          background-color: #aedcb0;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .nav-button:hover {
          background-color: #45a049;
        }
        .content-container {
          padding: 3rem;
          margin: 2rem auto;
          background: transparent;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(244, 240, 240, 0.1);
        }
        .blog-title {
          font-size: 2em;
          color: rgb(93, 128, 129);
        }
        .blog-content {
          font-size: 2rem;
          box-shadow: 0 4px 8px rgba(229, 201, 201, 0.1);
          color: #918484;
          background-color: transparent;
        }
      `}</style>
    </>
  );
};

export default Blog;
