import React from "react";
import Link from "next/link"; 
import Image from "next/image"; 
import styles from "../styles/Login.module.css"; 

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageSection}>
        <Image 
          src="/Screenshot 2024-12-04 203543.png" 
          alt="Decorative"
          className={styles.loginImage}
          width={500} 
          height={500}
        />
      </div>
      <div className={styles.formSection}>
        <div className={styles.logoContainer}>
          <Image 
            src="/Screenshot 2024-12-04 203543.png" // Ruta de la imagen en la carpeta 'public'
            alt="Logo"
            className={styles.logo}
            width={150} // Ajusta el tamaño de la imagen
            height={150} // Ajusta el tamaño de la imagen
          />
        </div>
        <h2 className={styles.title}>Login to your Account</h2>
        <button className={styles.googleLogin}>Continue with Google</button>
        <p className={styles.orDivider}>or Sign in with Email</p>
        <form>
          <label className={styles.formLabel}>Email</label>
          <input className={styles.inputField} type="email" placeholder="mail@website.com" />
          
          <label className={styles.formLabel}>Password</label>
          <input className={styles.inputField} type="password" placeholder="••••••••" />
        </form>
        <button className={styles.googleLogin}>Inicia sesion</button>
        <p className={styles.signupText}>
          No tienes una cuenta? <Link href="/">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
