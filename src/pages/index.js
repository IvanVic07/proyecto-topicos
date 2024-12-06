import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Importa el hook useRouter
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // Usa el contexto del carrito
import styles from "../styles/index.module.css";

const Index = () => {
  const router = useRouter(); // Inicializa el hook de navegación
  const { addToCart } = useCart(); // Función para añadir productos al carrito
  const [loggedInUser, setLoggedInUser] = useState(null); // Estado para verificar el usuario autenticado

  useEffect(() => {
    // Verifica si hay un usuario autenticado
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const handleHeroButtonClick = () => {
    router.push("/Productos"); // Navega a la página /Productos
  };

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
          <Link href={loggedInUser ? "/Perfil" : "/Register"}>
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
            <button
              className={styles.heroButton}
              onClick={handleHeroButtonClick} // Llama a la función para redirigir
            >
              Descubre nuestra colección
            </button>
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
      </main>
    </div>
  );
};

export default Index;
