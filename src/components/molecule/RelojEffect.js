import { useState, useEffect } from "react";

function Reloj({ hora }) {
  return (
    <>
      <h3 className="clock2">{hora}</h3>
      <style jsx>{`
        .clock2 {
          font-family: "Courier New", Courier, monospace;
          font-size: 4rem;
          color: rgb(1, 255, 255);
          padding: 10px 20px;
          justify-content: center;
          text-align: center;
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
      <div className="digitalContainer">
        <h2 className="titulo">Reloj Digital</h2>
        {esVisible && <Reloj hora={hora} />}
        <div className="button-container2">
          <button className="start2" onClick={() => setEsVisible(true)}>
            Iniciar
          </button>
          <button className="stop2" onClick={() => setEsVisible(false)}>
            Detener
          </button>
        </div>
      </div>

      <style jsx>{`
        .digitalContainer {
          background-size: cover;
          width: 30%;
        }
        .titulo {
          text-align: center;
          color: rgb(7, 4, 25);
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-size: 1rem;
        }
        .clock2 {
          font-family: "Courier New", Courier, monospace;
          font-size: 4rem;
          color: rgb(1, 255, 255);
          padding: 10px 20px;
          justify-content: center;
          text-align: center;
        }
        .clock2 {
          justify-content: center;
        }
        .button-container2 {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 20px;
        }
        .start2,
        .stop2 {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          color: rgb(0, 254, 255);
          cursor: pointer;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
        }
        .start2 {
          background-color: rgb(3, 44, 76);
        }
        .stop2 {
          background-color: rgb(3, 44, 76);
        }
        .start2:hover {
          background-color: rgb(3, 70, 99);
        }
        .stop2:hover {
          background-color: rgb(3, 70, 99);
        }
      `}</style>
    </>
  );
};

export default RelojEffect;
