import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import styles from "../styles/Blog.module.css";

export default function Blog() {
  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
  <Link href="/">
    <Image src="/logo.png" alt="Logo de DifuAura" width={120} height={40} />
  </Link>
  <ul className={styles.navLinks}>
    <li>
      <Link href="/Productos">Productos</Link>
    </li>
  </ul>
  <div className={styles.navIcons}>
    <FaUser className={styles.icon} aria-label="Perfil de usuario" />
    <FaShoppingCart className={styles.icon} aria-label="Carrito de compras" />
  </div>
</nav>


      <header className={styles.header}>
        <h1>Aromaterapia</h1>
        </header>

      {/* Sección 1 */}
      <section className={styles.section}>
        <img src="https://cdn1.costatic.com/assets/img/guide_achat/articles/aromaterapia-guia-rapida-para-principiantes_263e5c1df10b7f5b.jpg" alt="Aromaterapia y sus beneficios" />
        <div>
          <h2>La aromaterapia y sus beneficios</h2>
          <p>
            La aromaterapia aplicada al hogar puede traer múltiples beneficios,
            ya que tiene un potencial curativo gracias a su capacidad de promover
            la relajación y generar una sensación de alegría.
          </p>
        </div>
      </section>

      {/* Sección 2 */}
      <section className={`${styles.section} ${styles.reverse}`}>
        <img src="https://ambrosiaspabcn.com/wp-content/uploads/2020/12/How-To-Utilise-The-Benefits-Of-Aromatherapy-This-Winter.jpg" alt="Aromaterapia, ¿qué es?" />
        <div>
          <h2>Aromaterapia, ¿qué es?</h2>
          <p>
            La aromaterapia es una disciplina que aprovecha las propiedades de
            ciertos aromas extraídos de plantas para restablecer el equilibrio
            del cuerpo y de la mente.
          </p>
        </div>
      </section>

      {/* Sección de Esencias Más Usadas */}
      <div className={styles.container}>
        <h2>Esencias más usadas</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="https://shop.tiendasmadretierra.mx/cdn/shop/products/1-918HS-mKyzL._AC_SL1500.jpg?v=1654125721&width=1445" alt="Lavanda" />
            <h3>Lavanda</h3>
            <p>
              Con un aroma floral, la lavanda tiene propiedades relajantes.
              Se recomienda utilizarla en los dormitorios para conciliar el sueño.
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/30/16986786015163.jpg" alt="Romero" />
            <h3>Romero</h3>
            <p>
              Es un magnífico estimulante, ya que combate el estrés y la ansiedad.
              También mejora la concentración y la memoria.
            </p>
          </div>
          <div className={styles.card}>
            <img src="https://s3.ppllstatics.com/diariovasco/www/multimedia/202003/31/media/cortadas/gastronomia-vainilla-k89E-RAVzEeFdQPnrqbfrfjN882O-1248x770@Diario%20Vasco.jpg" alt="Vainilla" />
            <h3>Vainilla</h3>
            <p>
              La esencia de esta planta brinda armonía, ayuda a atraer energías
              positivas y es ideal para espacios grandes.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Otras Esencias */}
      <div className={styles.container}>
        <h2>Otras esencias</h2>
        <div className={styles.gridSmall}>
  <div className={styles.cardSmall}>
    <img src="https://content.elmueble.com/medio/2023/07/03/jazmin-pexels-sharath-g-7484098_00000000_4913a1fa_230703160902_1200x630.jpg" alt="Jazmín" className={styles.smallCardImage} />
    <h4>Jazmín</h4>
    <p>
      Es considerado un antidepresivo natural. Estimula el optimismo y
      ayuda al equilibrio emocional.
    </p>
  </div>
  <div className={styles.cardSmall}>
    <img src="https://agrosensemexico.com/wp-content/uploads/2020/11/limon.jpg" alt="Limón" className={styles.smallCardImage} />
    <h4>Limón</h4>
    <p>
      El olor a cítricos purifica el aire, combate la ansiedad y facilita
      la concentración.
    </p>
  </div>
  <div className={styles.cardSmall}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngGvoGILbG9Hgyb7q9l9dwurh3OIRCP0IeA&s" alt="Eucalipto" className={styles.smallCardImage} />
    <h4>Eucalipto</h4>
    <p>
      Tiene grandes propiedades para cuidar el sistema inmunológico;
      además, es antiinflamatorio.
    </p>
  </div>
</div>

      </div>
    </div>
  );
}
