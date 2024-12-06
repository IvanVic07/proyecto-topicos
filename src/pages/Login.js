import React, { useState } from "react";
import { ref, get, child } from "firebase/database"; // Firebase funciones
import database from "../firebaseConfig"; // Configuración de Firebase
import { useRouter } from "next/router"; // Hook para redirección
import styles from "../styles/Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Hook de redirección

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    try {
      // Referencia a la base de datos
      const dbRef = ref(database);

      // Verifica si el email y contraseña existen
      const snapshot = await get(child(dbRef, `users/${email.replace(/\./g, "_")}`));
      if (snapshot.exists()) {
        const userData = snapshot.val();
        if (userData.password === password) {
          alert("¡Inicio de sesión exitoso!");
          router.push("/"); // Redirige a la página principal
        } else {
          setError("Contraseña incorrecta.");
        }
      } else {
        setError("Usuario no encontrado. Por favor regístrate primero.");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Ocurrió un error. Intenta nuevamente.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formSection}>
        <h2 className={styles.title}>Iniciar sesión en tu cuenta</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.form} onSubmit={handleLogin}>
          <label htmlFor="email" className={styles.formLabel}>Correo electrónico</label>
          <input
            id="email"
            className={styles.inputField}
            type="email"
            placeholder="Ej. usuario@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className={styles.formLabel}>Contraseña</label>
          <input
            id="password"
            className={styles.inputField}
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.submitBtn} type="submit">Iniciar sesión</button>
        </form>
        <p className={styles.registerText}>
          ¿No tienes una cuenta? <a href="/Register" className={styles.registerLink}>Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}
