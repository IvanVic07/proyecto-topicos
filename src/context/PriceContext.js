import { createContext, useContext, useState } from 'react';

// Creamos el contexto
const PriceContext = createContext();

// Componente proveedor para el contexto
export const PriceProvider = ({ children }) => {
  const [price, setPrice] = useState(100);  

  return (
    <PriceContext.Provider value={{ price, setPrice }}>
      {children}
    </PriceContext.Provider>
  );
};

// Hook para acceder al precio
export const usePrice = () => useContext(PriceContext);
