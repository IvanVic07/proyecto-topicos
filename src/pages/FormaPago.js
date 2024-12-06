import { useContact } from "../context/ContactContext";
import { useCart } from "../context/CartContext"; // Importa el contexto del carrito
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function FormaPago() {
  const { contactData } = useContact();
  const { cartItems } = useCart(); // Accede a los productos del carrito
  const router = useRouter();
  const paypalButtonContainerRef = useRef(null); // Referencia al contenedor de PayPal

  // Calcula el subtotal del carrito
  const calcularSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  useEffect(() => {
    const total = calcularSubtotal(); // Calcula el total dinámico

    // Limpia el contenedor antes de renderizar los botones
    if (paypalButtonContainerRef.current) {
      paypalButtonContainerRef.current.innerHTML = "";
    }

    if (window.paypal && paypalButtonContainerRef.current) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total.toFixed(2), // Usar el total dinámico
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(function (details) {
            alert("Pago realizado con éxito");
            router.push(
              `/ConfirmacionPedido?amount=${details.purchase_units[0].amount.value}`
            );
          });
        },
        onError: (err) => {
          alert("Hubo un error con el pago: " + err);
        },
      }).render(paypalButtonContainerRef.current); // Renderiza el botón dentro de su contenedor
    }
  }, [cartItems, router]); // Ejecuta el efecto si cambian los productos o el router

  const handleBackToEnvio = () => {
    router.push("/Envio");
  };

  return (
    <div className="formapago-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="DifuAura" />
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <a href="/cart">Carrito</a> {" > "}
        <a href="/details">Detalles</a> {" > "}
        <a href="/envio">Envío</a> {" > "}
        <span>Pago</span>
      </nav>

      <div className="formapago-content">
        {/* Información de Contacto */}
        <div className="info-box">
          <h3 className="section-title">Información de Contacto</h3>
          <div className="info-details">
            <p>
              <strong>Email:</strong> {contactData.email || "No especificado"}
            </p>
            <a href="/contact" className="edit-link">
              Editar
            </a>
          </div>
        </div>

        {/* Información de Dirección */}
        <div className="info-box">
          <h3 className="section-title">Dirección de Envío</h3>
          <div className="info-details">
            <p>
              <strong>Nombre:</strong> {contactData.nombre} {contactData.apellidos}
            </p>
            <p>
              <strong>Dirección:</strong> {contactData.direccion},{" "}
              {contactData.numeroExterior}
            </p>
            <p>
              <strong>Ciudad:</strong> {contactData.ciudad},{" "}
              <strong>Código Postal:</strong> {contactData.codigoPostal}
            </p>
            <p>
              <strong>Municipio:</strong> {contactData.municipio},{" "}
              <strong>Región:</strong> {contactData.region}
            </p>
            <a href="/contact" className="edit-link">
              Editar
            </a>
          </div>
        </div>

        {/* Resumen del Pedido */}
        <div className="formapago-summary">
          <h3 className="section-title">Resumen del Pedido</h3>
          {cartItems.map((item, index) => (
            <div key={index} className="order-item">
              <img src={item.imagen} alt={item.nombre} className="product-image" />
              <div>
                <p>
                  <strong>Producto:</strong> {item.nombre}
                </p>
                <p>
                  <strong>Cantidad:</strong> {item.cantidad}
                </p>
                <p>
                  <strong>Precio:</strong> ${item.precio * item.cantidad}
                </p>
              </div>
            </div>
          ))}
          <div className="summary-line">
            <span>Subtotal:</span>
            <span>${calcularSubtotal()}</span>
          </div>
          <div className="summary-line">
            <span>Envío:</span>
            <span>Gratis</span>
          </div>
          <div className="summary-line total">
            <span>Total:</span>
            <span>
              <strong>${calcularSubtotal()}</strong>
            </span>
          </div>
        </div>

        {/* Botón de PayPal */}
        <div
          id="paypal-button-container"
          ref={paypalButtonContainerRef}
          className="formapago-buttons"
        ></div>

        {/* Botón de Regreso */}
        <div className="formapago-buttons">
          <button onClick={handleBackToEnvio} className="btn-secondary">
            Regresar al Envío
          </button>
        </div>
      </div>
    </div>
  );
}
