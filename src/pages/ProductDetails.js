import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import logo from "IvanVic07/proyecto-topicos/public/logo.png"; // Asegúrate de tener esta imagen en la carpeta `/public`
import styles from "styles/ProductDetails.css"; // Tus estilos

const ProductDetail = () => {
  const router = useRouter();
  const { id, nombre, precio, imagen } = router.query; // Obtener datos del producto desde la URL

  return (
    <div className={styles.productPage}>
      {/* Encabezado */}
      <header className={styles.navbar}>
        <Image src={logo} alt="Difuaura Logo" width={120} height={40} />
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="/Productos">Productos</a>
            </li>
            <li>
              <a href="/Blog">Aprende</a>
            </li>
          </ul>
        </nav>
        <div className={styles.navIcons}>
          <span className={styles.icon}>🛒</span>
          <span className={styles.icon}>👤</span>
        </div>
      </header>

      {/* Detalles del producto */}
      <main className={styles.productContainer}>
        {/* Imagen y descripción */}
        <div className={styles.productLeft}>
          <Image src={imagen} alt={nombre} width={400} height={400} className={styles.productImage} />
          <p className={styles.productDescription}>
            Este producto está diseñado para tu bienestar y satisfacción.
          </p>
          <p className={styles.freeShipping}>🚚 Envío gratis</p>
        </div>

        {/* Detalles y opciones */}
        <div className={styles.productRight}>
          <h1>{nombre}</h1>
          <p className={styles.price}>${precio}</p>
          <div className={styles.quantity}>
            <label>Cantidad</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <button className={styles.addToCart}>Añadir al carrito</button>

          <div className={styles.productDetails}>
            <p>
              <strong>Detalles:</strong> Producto artesanal con materiales
              naturales y diseño único.
            </p>
            <p>
              <strong>Garantía:</strong> 1 año de garantía en defectos de
              fabricación.
            </p>
          </div>
        </div>
      </main>

      {/* Pie de página */}
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <Image src={logo} alt="Difuaura Logo" width={120} height={40} />
          <p>Aromas, difusores y humidificadores. El bienestar para tu hogar.</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Descubre más</h3>
          <p>Aromas</p>
          <p>Humidificadores</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Sobre nosotros</h3>
          <p>Productos</p>
          <p>Contacto</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
