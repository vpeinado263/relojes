//Paso 1 - Importar la funcion creadora de contexto (createContext())
import { createContext, useContext, useState } from "react";

//Paso 2 - crear el contexto (aca La nave)
export const ClockContext = createContext();

//Paso 3 - Definir la prop a despachar (aka El paquete)
const ClockContextProvider = ({ children }) => {
  const [clocks, setClocks] = useState([
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
  ]);

  //Paso 4 - Invocar al proveedor del context (aca El flaco de la gorra)
  //Paso 5 - Colocar la prop en value (aca Ponerle el paquete en la mano al flaco)
  //Paso 6 - DEfinir los children (aca la lista de componente que pueden acceder al paqute)

  return (
    <ClockContext.Provider value={{ clocks }}>{children}</ClockContext.Provider>
  );
};

export default ClockContextProvider;
