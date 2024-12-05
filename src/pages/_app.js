import "@/styles/globals.css";
import '../styles/cart.css';
import '../styles/contact.css';
import '../styles/envio.css';
import '../styles/formapago.css';
import '../styles/confirmacionpedido.css';
import "./styles/Register.css";
import "./styles/Login.css";
import "./styles/ProductDetails.css"
import "./styles/ShippingForm.css"
import { PriceProvider } from '../context/PriceContext'; 


import { PriceProvider } from "../context/PriceContext";
import { ContactProvider } from "../context/ContactContext";



export default function App({ Component, pageProps }) {
  return (
    <PriceProvider>
      <ContactProvider>
        <Component {...pageProps} />
      </ContactProvider>
    </PriceProvider>
  );
}
