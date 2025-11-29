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
      <div className="clock">
        {/* Agujas */}
        <div
          className="hand hour"
          style={{ transform: `rotate(${horaGrado}deg)` }}
        />
        <div
          className="hand minute"
          style={{ transform: `rotate(${minutoGrado}deg)` }}
        />
        <div
          className="hand second"
          style={{ transform: `rotate(${segundoGrado}deg)` }}
        />

        {/* Centro */}
        <div className="center"></div>

        {/* Marcas */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="mark hour-mark"
            style={{ transform: `rotate(${i * 30}deg)` }}
          />
        ))}

        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="mark minute-mark"
            style={{ transform: `rotate(${i * 6}deg)` }}
          />
        ))}
      </div>

      <style jsx>{`
        .clock {
          width: 260px;
          height: 260px;
          margin: 20px auto;
          border-radius: 50%;
          background: radial-gradient(#1a1a1a, #000);
          position: relative;
          border: 4px solid #d4af37; /* dorado */
          box-shadow:
            inset 0 0 20px rgba(255, 215, 0, 0.2),
            0 0 20px rgba(212, 175, 55, 0.5);
        }

        .hand {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform-origin: bottom;
          border-radius: 6px;
        }

        .hour {
          width: 6px;
          height: 65px;
          background: #d4af37;
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
        }

        .minute {
          width: 4px;
          height: 90px;
          background: #e6e6e6;
        }

        .second {
          width: 2px;
          height: 100px;
          background: #ff3a3a;
          box-shadow: 0 0 6px rgba(255, 0, 0, 0.8);
        }

        .center {
          width: 14px;
          height: 14px;
          background: #d4af37;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.7);
        }

        .mark {
          position: absolute;
          left: 50%;
          top: 0;
          transform-origin: center 130px;
          background: transparent;
        }

        .hour-mark {
          width: 4px;
          height: 14px;
          background: #d4af37;
          transform-origin: center 126px;
        }

        .minute-mark {
          width: 2px;
          height: 6px;
          background: #888;
          transform-origin: center 128px;
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
      <div className="container">
        <h2 className="title">Reloj Analógico</h2>
        {esVisible && <Reloj hora={hora} />}
        <div className="buttons">
          <button className="btn start" onClick={() => setEsVisible(true)}>
            Iniciar
          </button>
          <button className="btn stop" onClick={() => setEsVisible(false)}>
            Detener
          </button>
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 350px;
          margin: auto;
          padding: 1rem;
          text-align: center;
          background: transparent;
        }

        .title {
          color: #d4af37;
          font-family: "Georgia", serif;
          font-size: 1.4rem;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .btn {
          padding: 0.6rem 1.4rem;
          font-size: 1rem;
          color: #d4af37;
          background: transparent;
          border: 1px solid #d4af37;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s ease;
          font-family: "Montserrat", sans-serif;
        }

        .btn:hover {
          background: #d4af37;
          color: #000;
          box-shadow: 0 0 12px rgba(212, 175, 55, 0.5);
        }
      `}</style>
    </>
  );
};

export default RelojEf;
