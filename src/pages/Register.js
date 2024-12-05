import React from "react";
import "./Register.css";
import Image from "IvanVic07/proyecto-topicos/public/AromAura2.png"; // Asegúrate de colocar la imagen en la carpeta `assets`

const Register = () => {
  return (
    <div className="register-container">
      {/* Sección izquierda: Imagen y descripción */}
      <div className="left-section">
        <div className="logo-container">
          <img src="IvanVic07/proyecto-topicos/public/Screenshot 2024-12-04 203543.png" alt="Logo" className="logo" />
        </div>
        <h1>Aromas, difusores y humidificadores.</h1>
        <p>El bienestar para tu hogar</p>
        <img src={Image} alt="Decorative" className="register-image" />
      </div>

      {/* Sección derecha: Formulario de registro */}
      <div className="right-section">
        <h2>Crear una cuenta</h2>
        <form className="register-form">
          <label>Nombre y apellido</label>
          <input type="text" placeholder="Ej. Rodolfo Rivera" />

          <label>Correo electrónico</label>
          <input type="email" placeholder="Ej. Hey@rodolfoRivera.co" />

          <label>Contraseña</label>
          <input type="password" placeholder="Escribe una contraseña" />

          <label>Repite contraseña</label>
          <input type="password" placeholder="Repite la contraseña" />

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Acepto los términos y condiciones de servicio
            </label>
          </div>

          <button type="submit" className="register-btn">
            Registrarme
          </button>
          <button className="login-btn">Ya tengo cuenta</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
