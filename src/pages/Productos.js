import React from "react";
import Link from "next/link"; 
import Image from "next/image"; 
import { FaUser, FaShoppingCart } from "react-icons/fa"; 
import styles from "../styles/Productos.module.css"; 


export default function Productos() {
 
  const productos = [
    {
      categoria: "Aromas",
      descripcion: "Diseñadas y creadas por Difuaura",
      items: [
        { nombre: "Lavanda Francesa", precio: "$ 900", imagen: "https://aromaria.mx/cdn/shop/files/lavender_1200x_f439e7e4-ec72-4374-8270-5af524d7a5bd_1000x.jpg?v=1732143732" },
        { nombre: "Árbol Té", precio: "$ 900", imagen: "https://aromaria.mx/cdn/shop/products/GTBamboo_f8d1aab5-9b86-40f4-9e3c-852154b5bc2e_1200x1200.jpg?v=1732142903" },
        { nombre: "Romero", precio: "$ 900", imagen: "https://aromaria.mx/cdn/shop/products/goodN_1000x.jpg?v=1732143423" },
        { nombre: "Menta", precio: "$ 900", imagen: "https://aromaria.mx/cdn/shop/products/FrozenV_1000x.jpg?v=1732143306" },
        { nombre: "Bergamota", precio: "$ 900", imagen: "https://aromaria.mx/cdn/shop/products/Behappy_6b5318eb-b7b7-46eb-94ce-2042e587534a_1000x.jpg?v=1732143046" },
        { nombre: "Acordes Cítricos", precio: "$ 900", imagen: "https://aromaria.mx/cdn/shop/products/MrBig_196b4912-69dc-4e7d-9dfb-e97ef317ff02_1000x.jpg?v=1732143473" },
        { nombre: "Canela-Clavo", precio: "$ 900", imagen: "https://aromaria.mx/cdn/shop/products/sweetcinnamonmemories_1000x.jpg?v=1637692038" },
        { nombre: "Jazmín", precio: "$ 900", imagen: "https://aromaria.mx/cdn/shop/products/Palmera_1200x1200.jpg?v=1732143543" },
      ],
    },
    {
      categoria: "Humidificadores",
      descripcion: "Diseñadas por Difuaura",
      items: [
        { nombre: "Humidificador para sala", precio: "$ 18000", imagen: "https://aromaria.mx/cdn/shop/products/HappyHome2_1000x.png?v=1676500614" },
        { nombre: "Humidificador para recamara", precio: "$ 6000", imagen: "https://aromaria.mx/cdn/shop/files/2022_Happy_Place_1000x.png?v=1726082155" },
        { nombre: "Combo doble", precio: "$ 13200", imagen: "https://aromaria.mx/cdn/shop/products/HappyPlaces_1000x.jpg?v=1668739945" },
        { nombre: "Humidificador para sala y recamara", precio: "$ 25500", imagen: "https://aromaria.mx/cdn/shop/files/HAPY_HOME_Y_HAPPY_PLACE_1000x.png?v=1730483756" },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <header className={styles.navbar}>
      <Link href="/">
        <Image src="/logo.png" alt="Logo de DifuAura" width={120} height={40} />
      </Link>
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
          <FaUser className={styles.icon} aria-label="Perfil de usuario" />
          <FaShoppingCart className={styles.icon} aria-label="Carrito de compras" />
        </div>
      </header>

      {/* Productos */}
      {productos.map((categoria, index) => (
        <section key={index} className={styles.seccion}>
          <h2 className={styles.categoria}>{categoria.categoria}</h2>
          <p className={styles.descripcion}>{categoria.descripcion}</p>
          <div className={styles.grid}>
            {categoria.items.map((producto, idx) => (
              <div key={idx} className={styles.card}>
                <img src={producto.imagen} alt={producto.nombre} className={styles.imagen} />
                <h3 className={styles.nombre}>{producto.nombre}</h3>
                <p className={styles.precio}>{producto.precio}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
