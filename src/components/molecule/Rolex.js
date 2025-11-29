import { useState, useEffect } from "react";

function Reloj({ hora }) {
  const segundos = hora.getSeconds();
  const minutos = hora.getMinutes();
  const horas = hora.getHours();

  const segundoGrado = segundos * 6;
  const minutoGrado = minutos * 6 + segundos / 10;
  const horaGrado = horas * 30 + minutos / 2;

  return (
    <>
      <div className="clock-container">
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${segundoGrado}deg)` }}
        ></div>
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minutoGrado}deg)` }}
        ></div>
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${horaGrado}deg)` }}
        ></div>
        <div className="center-point"></div>
      </div>

      <style jsx>{`
        .clock-container {
          width: 200px;
          height: 200px;
          border: 8px solid rgb(18, 18, 24);
          border-radius: 50%;
          position: relative;
          margin: 20px auto;
          background: rgb(240, 241, 243);
        }
        .hand {
          position: absolute;
          background-color: rgb(76, 62, 68);
          transform-origin: bottom;
          bottom: 50%;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 6px;
        }
        .second-hand {
          width: 2px;
          height: 90px;
          background-color: #fb0216;
        }
        .minute-hand {
          width: 4px;
          height: 70px;
        }
        .hour-hand {
          width: 6px;
          height: 50px;
        }
        .center-point {
          width: 10px;
          height: 10px;
          background-color: rgb(173, 113, 62);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}

const RelojEf = () => {
  const [hora, setHora] = useState(new Date());
  const [esVisible, setEsVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (esVisible) {
      temporizador = setInterval(() => {
        setHora(new Date());
      }, 1000);
    }

    return () => clearInterval(temporizador);
  }, [esVisible]);

  return (
    <>
      <div className="analogoContainer">
        <h2 className="title">Reloj Analógico</h2>
        {esVisible && <Reloj hora={hora} />}
        <div className="button-container">
          <button className="button start" onClick={() => setEsVisible(true)}>
            Iniciar
          </button>
          <button className="button stop" onClick={() => setEsVisible(false)}>
            Detener
          </button>
        </div>
      </div>

      <style jsx>{`
        .analogoContainer {
          background-size: cover;
          width: 30%;
        }
        .title {
          font-family:
            Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
          font-size: 1rem;
          text-align: center;
          color: rgb(68, 62, 62);
        }
        .button-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 20px;
        }
        .button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }
        .button.start {
          background-color: rgb(114, 81, 46);
          color: #fff;
        }
        .button.stop {
          background-color: rgb(114, 81, 46);
          color: #fff;
        }
        .button:hover {
          background-color: rgb(170, 133, 83);
          opacity: 0.9;
        }
      `}</style>
    </>
  );
};

export default RelojEf;
