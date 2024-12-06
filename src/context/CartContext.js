import React, { createContext, useState, useContext } from "react";

// Crea el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para añadir un producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Comprueba si el producto ya está en el carrito
      const existingItem = prevItems.find((item) => item.nombre === product.nombre);
      if (existingItem) {
        // Incrementa la cantidad si el producto ya existe
        return prevItems.map((item) =>
          item.nombre === product.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Agrega el producto al carrito
        return [...prevItems, { ...product, cantidad: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto   
export const useCart = () => useContext(CartContext);
