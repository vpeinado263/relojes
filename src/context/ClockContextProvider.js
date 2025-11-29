import { createContext, useContext, useState } from "react";

const initialClocks = [
  {
    id: 1,
    title: "Abraham-Louis Breguet",
    description: "Uno de los pioneros en relojes de precisión.",
  },
  {
    id: 2,
    title: "Christiaan Huygens",
    description: "Inventor del primer reloj de péndulo.",
  },
  {
    id: 3,
    title: "Daniel Quare",
    description: "Inventor del reloj de repetición de cuartos.",
  },
  {
    id: 4,
    title: "John Harwood",
    description: "Pionero en relojes automáticos.",
  },
  {
    id: 5,
    title: "Franz Ketterer",
    description: "Conocido por sus contribuciones en relojes de cuco.",
  },
];

export const ClockContext = createContext();

const ClockContextProvider = ({ children }) => {
  const [clocks, setClocks] = useState(initialClocks);

  return (
    <ClockContext.Provider value={{ clocks, setClocks }}>
      {children}
    </ClockContext.Provider>
  );
};

export default ClockContextProvider;

export const useClock = () => useContext(ClockContext);
