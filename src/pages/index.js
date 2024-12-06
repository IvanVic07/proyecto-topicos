import React from "react";
import Link from "next/link";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Usa el contexto del carrito
import styles from "../styles/index.module.css";

const Index = () => {
  const { addToCart } = useCart(); // Función para añadir productos al carrito

  const productos = [
    {
      nombre: "Lavanda Francesa",
      imagen: "https://aromaria.mx/cdn/shop/files/lavender_1200x_f439e7e4-ec72-4374-8270-5af524d7a5bd_1000x.jpg?v=1732143732",
      precio: 900,
    },
    {
      nombre: "Árbol de Té",
      imagen: "https://aromaria.mx/cdn/shop/products/GTBamboo_f8d1aab5-9b86-40f4-9e3c-852154b5bc2e_1200x1200.jpg?v=1732142903",
      precio: 900,
    },
    {
      nombre: "Romero",
      imagen: "https://aromaria.mx/cdn/shop/products/goodN_1000x.jpg?v=1732143423",
      precio: 900,
    },
    {
      nombre: "Menta",
      imagen: "https://aromaria.mx/cdn/shop/products/FrozenV_1000x.jpg?v=1732143306",
      precio: 900,
    },
    {
      nombre: "Humidificador para sala",
      imagen: "https://aromaria.mx/cdn/shop/products/HappyHome2_1000x.png?v=1676500614",
      precio: 18000,
    },
    {
      nombre: "Humidificador para recamara",
      imagen: "https://aromaria.mx/cdn/shop/files/2022_Happy_Place_1000x.png?v=1726082155",
      precio: 7500,
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.logo}>DifuAura</div>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/Productos">Productos</Link>
            </li>
            <li>
              <a href="/Blog">Aprende</a>
            </li>
          </ul>
        </nav>
        <div className={styles.navIcons}>
          <Link href="/Register">
            <FaUser className={styles.icon} aria-label="Perfil de usuario" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className={styles.icon} aria-label="Carrito de compras" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <div>
            <h1 className={styles.heroTitle}>DifuAura</h1>
            <button className={styles.heroButton}>Descubre nuestra colección</button>
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <main>
        <section id="productos" className={styles.productos}>
          <h2>Productos</h2>
          <p>Ordena para ti o para tus seres queridos</p>
          <div className={styles.productosGrid}>
            {productos.map((producto, index) => (
              <div key={index} className={styles.productoCard}>
                <img src={producto.imagen} alt={producto.nombre} />
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <div className={styles.productoActions}>
                  <button
                    className={styles.addToCartButton}
                    onClick={() => addToCart(producto)} // Añade al carrito
                  >
                    Añadir al carrito
                  </button>
                  <Link href={`/producto/${index}`}>
                    <button className={styles.viewMoreButton}>Ver más</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios Section */}
        <section id="beneficios" className={styles.beneficios}>
          <div className={styles.beneficiosContent}>
            <div className={styles.texto}>
              <h1>Beneficios y más</h1>
              <p className={styles.subtitulo}>Hecho para ti y tu hogar.</p>
              <p>
                Descubre nuestras esencias en aceite y transforma tu bienestar con aromas diseñados para equilibrar cuerpo y mente.
                Conoce los beneficios terapéuticos que cada esencia tiene para ofrecerte.
              </p>
              <button className={styles.beneficiosButton}>Ver más</button>
            </div>
            <div className={styles.imagen}>
              <img
                src="https://www.elfinanciero.com.mx/resizer/v2/AIC3U4RJQFDSVDSYBQNVAOUWWM.jpeg?smart=true&auth=f9f9482cc3597d1019c41f9458936ccd859458bc2eed36836ea912e0a88833e0&width=1600&height=900"
                alt="Beneficios"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
