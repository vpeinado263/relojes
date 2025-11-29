//Paso 1 - importar el contexto
import { useContext } from "react";
import { ClockContext } from "../../context/ClockContextProvider";

const Clocks = () => {
  // Paso 3 - Extraer la prop del contexto usando el hook
  const { clocks } = useContext(ClockContext);

  return (
    <div>
      <h2>Relojes Históricos</h2>
      <ul>
        {clocks.map((clock) => (
          <li key={clock.id}>
            <h3>{clock.title}</h3>
            <p>{clock.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clocks;
