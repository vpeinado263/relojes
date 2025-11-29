import { useState, useEffect } from "react";

function Reloj({ hora }) {
  return (
    <>
      <div className="clock-display">{hora}</div>

      <style jsx>{`
        .clock-display {
          font-family: "Courier New", monospace;
          font-size: 3.5rem;
          color: #00f3ff;
          text-align: center;
          padding: 1rem 2rem;
          border: 2px solid rgba(0, 243, 255, 0.4);
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.65);
          box-shadow: 0 0 25px rgba(0, 243, 255, 0.3);
          backdrop-filter: blur(4px);
        }
      `}</style>
    </>
  );
}

const RelojEffect = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [esVisible, setEsVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (esVisible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    }

    return () => clearInterval(temporizador);
  }, [esVisible]);

  return (
    <>
      <div className="digital-container">
        <h2 className="titulo">Reloj Digital</h2>

        {esVisible && <Reloj hora={hora} />}

        <div className="button-container">
          <button className="btn start" onClick={() => setEsVisible(true)}>
            Iniciar
          </button>
          <button className="btn stop" onClick={() => setEsVisible(false)}>
            Detener
          </button>
        </div>
      </div>

      <style jsx>{`
        .digital-container {
          width: 100%;
          max-width: 380px;
          margin: 2rem auto;
          padding: 1.5rem;
          background: linear-gradient(to bottom, #0b0e10, #101820);
          border-radius: 15px;
          border: 1px solid rgba(0, 243, 255, 0.2);
          box-shadow: 0 0 18px rgba(0, 243, 255, 0.15);
        }

        .titulo {
          text-align: center;
          color: #00eaff;
          font-family: "Montserrat", sans-serif;
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .button-container {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .btn {
          padding: 0.6rem 1.4rem;
          font-size: 1rem;
          color: #00eaff;
          background: transparent;
          border: 1px solid #00eaff;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s ease;
          font-family: "Montserrat", sans-serif;
        }

        .btn:hover {
          background: #00eaff;
          color: #0a0f10;
          box-shadow: 0 0 12px rgba(0, 238, 255, 0.6);
        }
      `}</style>
    </>
  );
};

export default RelojEffect;
