import { useContact } from "../context/ContactContext";
import { usePrice } from "../context/PriceContext";
import { useCart } from "../context/CartContext"; // Importa el contexto del carrito
import { useRouter } from "next/router";

export default function Envio() {
  const { contactData } = useContact();
  const { price } = usePrice(); // Aunque tienes un contexto de precio, lo reemplazaremos con el cálculo del carrito
  const { cartItems } = useCart(); // Obtén los productos del carrito
  const router = useRouter();

  const handleBackToContact = () => {
    router.push("/Contact");
  };

  const handleGoToPayment = () => {
    router.push("/FormaPago");
  };

  const calcularSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <div className="envio-container">
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
        <span>Envío</span> {" > "}
        <span>Pago</span>
      </nav>

      <div className="envio-content">
        {/* Columna izquierda */}
        <div className="envio-left">
          {/* Información de contacto */}
          <div className="info-box">
            <h3>Contacto</h3>
            <div className="info-details">
              <p>Email: <span>{contactData.email || "No especificado"}</span></p>
              <a href="/Contact" className="edit-link">Editar</a>
            </div>
          </div>

          {/* Información de dirección */}
          <div className="info-box">
            <h3>Dirección de envío</h3>
            <div className="info-details">
              <p>
                {contactData.nombre} {contactData.apellidos}
              </p>
              <p>
                {contactData.direccion}, {contactData.numeroExterior}
              </p>
              <p>
                {contactData.ciudad}, {contactData.codigoPostal}
              </p>
              <p>
                {contactData.municipio}, {contactData.region}
              </p>
              <a href="/Contact" className="edit-link">Editar</a>
            </div>
          </div>

          {/* Método de envío */}
          <div className="shipping-method">
            <h3>Método de envío</h3>
            <label className="radio-label">
              <input type="radio" id="standard" name="shipping" defaultChecked />
              <span>Envío estándar (Gratis)</span>
            </label>
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className="envio-right">
          <div className="order-summary">
            <h3>Resumen del Pedido</h3>
            {cartItems.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.imagen} alt={item.nombre} className="product-image" />
                <div>
                  <p>Producto: {item.nombre}</p>
                  <p>Cantidad: {item.cantidad}</p>
                  <p>Precio: <strong>${item.precio * item.cantidad}</strong></p>
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
              <span><strong>${calcularSubtotal()}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="nav-buttons">
        <button onClick={handleBackToContact} className="btn-secondary">
          Regresar a Contacto
        </button>
        <button onClick={handleGoToPayment} className="btn-primary">
          Ir al Pago
        </button>
      </div>
    </div>
  );
}
