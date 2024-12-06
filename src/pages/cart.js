import React from "react";
import { useCart } from "../context/CartContext"; // Usa el contexto del carrito
import Link from "next/link";
import { useRouter } from "next/router"; // Importa el hook para redirección

export default function Cart() {
  const { cartItems, updateItemQuantity, removeFromCart } = useCart(); // Obtén las funciones del contexto
  const router = useRouter(); // Inicializa el router para la navegación

  const calcularSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  const handleCheckout = () => {
    // Redirige a la página de contacto para continuar el proceso
    router.push("/Contact");
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1>Tu carrito</h1>
        <Link href="/Productos" className="back-to-shopping">
          Seguir comprando
        </Link>
      </header>

      {cartItems.length > 0 ? (
        <div className="cart-table">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="product-details">
                <img src={item.imagen} alt={item.nombre} />
                <div>
                  <h3>{item.nombre}</h3>
                  <button
                    onClick={() => removeFromCart(item.nombre)}
                    className="remove-item"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="product-price">${item.precio}</div>
              <div className="product-quantity">
                <button onClick={() => updateItemQuantity(item.nombre, item.cantidad - 1)}>
                  -
                </button>
                <span>{item.cantidad}</span>
                <button onClick={() => updateItemQuantity(item.nombre, item.cantidad + 1)}>
                  +
                </button>
              </div>
              <div className="product-total">${item.precio * item.cantidad}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">Tu carrito está vacío.</p>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <div className="subtotal">
            <span>Sub-total</span>
            <span>${calcularSubtotal()}</span>
          </div>
          <p className="tax-note">El costo de envío y los impuestos se calcularán más tarde.</p>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceder al pago
          </button>
        </div>
      )}
    </div>
  );
}
