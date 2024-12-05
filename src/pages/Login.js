import React from "react";
import "./Login.css";
import Image from "IvanVic07/proyecto-topicos/public/AromAura1.png"; // Asegúrate de colocar la imagen en la carpeta `assets`

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-section">
        <img src={Image} alt="Decorative" className="login-image" />
      </div>
      <div className="form-section">
        <div className="logo-container">
          <img src="IvanVic07/proyecto-topicos/public/Screenshot 2024-12-04 203543.png" alt="Logo" className="logo" />
        </div>
        <h2>Login to your Account</h2>
        <button className="google-login">Continue with Google</button>
        <p className="or-divider">or Sign in with Email</p>
        <form>
          <label>Email</label>
          <input type="email" placeholder="mail@website.com" />
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
          <div className="remember-forgot">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href="/">Forgot your password?</a>
          </div>
          <button type="submit" className="submit-btn">Iniciar sesión</button>
        </form>
        <p className="signup-text">
          No tienes una cuenta? <a href="/">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
