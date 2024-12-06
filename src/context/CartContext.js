import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const updateItemQuantity = (nombre, nuevaCantidad) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.nombre === nombre
          ? { ...item, cantidad: nuevaCantidad > 0 ? nuevaCantidad : 1 } // Asegúrate de no permitir cantidades menores a 1
          : item
      )
    );
  };

  const addToCart = (producto) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.nombre === producto.nombre);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.nombre === producto.nombre
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prevCartItems, { ...producto, cantidad: 1 }];
    });
  };

  const removeFromCart = (nombre) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.nombre !== nombre));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, updateItemQuantity, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
