import React, { useState } from "react";
import { ref, set } from "firebase/database"; // Firebase para guardar datos
import database from "../firebaseConfig"; // Importa la configuración de Firebase
import { useRouter } from "next/router"; // Hook para redirección
import styles from "../styles/Register.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter(); // Hook de Next.js

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (!name || !email || !password) {
      setError("Por favor completa todos los campos.");
      return;
    }

    try {
      // Reemplaza puntos en el email para usarlo como clave en Firebase
      const emailKey = email.replace(/\./g, "_");

      // Guarda los datos en Firebase
      await set(ref(database, `users/${emailKey}`), {
        name: name,
        email: email,
        password: password, // En producción, usa un hash para mayor seguridad
      });

      setSuccess("Usuario registrado exitosamente.");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Redirige al usuario a la página de Login
      router.push("/Login");
    } catch (err) {
      console.error("Error al registrar usuario:", err);
      setError("Ocurrió un error al registrar el usuario.");
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.leftSection}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <h1 className={styles.heading}>Aromas, difusores y humidificadores</h1>
        <p className={styles.description}>El bienestar para tu hogar</p>
        <img src="/AromAura2.png" alt="Decorative" className={styles.registerImage} />
      </div>

      <div className={styles.rightSection}>
        <h2 className={styles.formHeading}>Crear una cuenta</h2>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}
        <form className={styles.registerForm} onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Nombre y apellido</label>
            <input
              id="name"
              type="text"
              placeholder="Ej. Rodolfo Rivera"
              className={styles.formInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Correo electrónico</label>
            <input
              id="email"
              type="email"
              placeholder="Ej. Hey@rodolfoRivera.co"
              className={styles.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.formLabel}>Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Escribe una contraseña"
              className={styles.formInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.formLabel}>Repite contraseña</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Repite la contraseña"
              className={styles.formInput}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className={styles.terms}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label htmlFor="terms" className={styles.termsLabel}>
              Acepto los términos y condiciones de servicio
            </label>
          </div>

          <button type="submit" className={styles.registerBtn}>
            Registrarme
          </button>
          <button
            type="button"
            className={styles.loginBtn}
            onClick={() => router.push("/Login")}
          >
            Ya tengo cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
