import React from "react";
import "./ProductDetails.css";
import productImage from "IvanVic07/proyecto-topicos/public/AromAuraProduct.png"; // Imagen del producto
import logo from "IvanVic07/proyecto-topicos/public/Screenshot 2024-12-04 203543.png"; // Logo de Difuaura

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Encabezado */}
      <header className="header">
        <img src={logo} alt="Difuaura Logo" className="logo" />
        <nav>
          <ul>
            <li>Productos</li>
            <li>Aprende</li>
            <li>Contáctanos</li>
          </ul>
        </nav>
        <div className="icons">
          <span className="icon">🛒</span>
          <span className="icon">👤</span>
        </div>
      </header>

      {/* Contenido del producto */}
      <main className="product-container">
        {/* Imagen y descripción */}
        <div className="product-left">
          <img src={productImage} alt="Product" className="product-image" />
          <p className="product-description">
            All hand-made with natural materials, Humidifics is made for your
            pleasure moments.
          </p>
          <p className="free-shipping">🚚 FREE SHIPPING</p>
        </div>

        {/* Detalles y opciones */}
        <div className="product-right">
          <h1>Moonday for 80m²</h1>
          <p className="price">$10,000</p>
          <div className="quantity">
            <label>Quantity</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <button className="add-to-cart">+ Add to cart</button>

          <div className="product-details">
            <p><strong>Wax:</strong> Top grade soy wax that delivers a smoke-less, consistent burn.</p>
            <p><strong>Fragrance:</strong> Premium quality ingredients with natural essential oils.</p>
            <p><strong>Burning Time:</strong> 70-75 hours</p>
            <p><strong>Dimension:</strong> 10cm x 5cm</p>
            <p><strong>Weight:</strong> 400g</p>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className="footer">
        <div className="footer-section">
          <img src={logo} alt="Difuaura Logo" className="footer-logo" />
          <p>Aromas, difusores y humidificadores. El bienestar para tu hogar</p>
        </div>
        <div className="footer-section">
          <h3>Discovery</h3>
          <p>Aromas</p>
          <p>Humidificadores</p>
        </div>
        <div className="footer-section">
          <h3>Sobre nosotros</h3>
          <p>Hub</p>
          <p>Productos</p>
        </div>
        <div className="footer-section">
          <h3>Info</h3>
          <p>Contáctanos</p>
          <p>Políticas de privacidad</p>
          <p>Términos y condiciones</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
