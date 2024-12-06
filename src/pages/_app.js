import "@/styles/globals.css";
import "../styles/cart.css";
import "../styles/contact.css";
import "../styles/envio.css";
import "../styles/formapago.css";
import "../styles/confirmacionpedido.css";
import "../styles/Register.module.css";
import "../styles/ProductDetails.css";
import "../styles/ShippingForm.css";

import { PriceProvider } from "../context/PriceContext";
import { ContactProvider } from "../context/ContactContext";
import { CartProvider } from "../context/CartContext"; // Importa el contexto del carrito

export default function App({ Component, pageProps }) {
  return (
    <PriceProvider>
      <ContactProvider>
        <CartProvider> {/* Envuelve la aplicación con el contexto del carrito */}
          <Component {...pageProps} />
        </CartProvider>
      </ContactProvider>
    </PriceProvider>
  );
}
