import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Perfil.module.css";

export default function Perfil() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setUserData(user);
    } else {
      router.push("/Login"); // Si no hay usuario, redirige al login
    }
  }, [router]);

  const handleEdit = () => {
    alert("Función para editar perfil aún no implementada.");
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("Sesión cerrada.");
    router.push("/");
  };

  if (!userData) {
    return <div>Cargando...</div>; // Muestra un mensaje mientras se obtienen los datos
  }

  return (
    <div className={styles.centerContainer}>
      <div className={styles.profileContainer}>
        <header className={styles.header}>
          <h1>Perfil de Usuario</h1>
        </header>

        <section className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img
              src="https://static.thenounproject.com/png/363639-200.png"
              alt="Foto de perfil"
            />
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.field}>
              <label>Nombre completo:</label>
              <p>{userData.name || "No especificado"}</p> {/* Cambia a name */}
            </div>

            <div className={styles.field}>
              <label>Correo electrónico:</label>
              <p>{userData.email || "No especificado"}</p>
            </div>
          </div>
        </section>

        <div className={styles.editButtonContainer}>
          <button className={styles.editButton} onClick={handleEdit}>
            Editar Perfil
          </button>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
