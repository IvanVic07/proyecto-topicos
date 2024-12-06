import styles from "../styles/Perfil.module.css";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();

  const handleEdit = () => {
    alert("Función para editar perfil aún no implementada.");
  };

  const handleGoHome = () => {
    router.push("/"); // Navegar a la página de inicio
  };

  return (
    <div className={styles.centerContainer}>
      <div className={styles.profileContainer}>
        {/* Botón para volver al índice */}
        <div className={styles.logoContainer}>
          <button className={styles.logoButton} onClick={handleGoHome}>
            <img src="/logo.png" alt="Logo" className={styles.logoImage} />
          </button>
        </div>

        {/* Encabezado */}
        <header className={styles.header}>
          <h1>Perfil de Usuario</h1>
        </header>

        {/* Sección de perfil */}
        <section className={styles.profileSection}>
          {/* Foto de perfil */}
          <div className={styles.profileImage}>
            <img
              src="https://static.thenounproject.com/png/363639-200.png"
              alt="Foto de perfil"
            />
          </div>

          {/* Información del usuario */}
          <div className={styles.profileInfo}>
            <div className={styles.field}>
              <label>Nombre completo:</label>
              <p>Juan Pérez</p>
            </div>

            <div className={styles.field}>
              <label>Dirección:</label>
              <p>Calle Falsa 123, Ciudad</p>
            </div>

            <div className={styles.field}>
              <label>Sexo:</label>
              <p>Masculino</p>
            </div>

            <div className={styles.field}>
              <label>Correo electrónico:</label>
              <p>juan.perez@example.com</p>
            </div>
          </div>
        </section>

        {/* Botón de editar perfil */}
        <div className={styles.editButtonContainer}>
          <button className={styles.editButton} onClick={handleEdit}>
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
}
