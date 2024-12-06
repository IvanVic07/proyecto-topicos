import { useState, useEffect } from "react";
import { useContact } from "../context/ContactContext";
import { useRouter } from "next/router";
import { ref, update } from "firebase/database"; // Importa Firebase
import database from "../firebaseConfig"; // Configuración de Firebase

export default function Contact() {
  const { setContactData } = useContact();
  const router = useRouter(); // Usamos el hook useRouter para redirección
  const [loggedInUser, setLoggedInUser] = useState(null); // Usuario logueado
  const [formData, setFormData] = useState({
    email: "",
    nombre: "",
    apellidos: "",
    direccion: "",
    numeroExterior: "",
    ciudad: "",
    codigoPostal: "",
    municipio: "",
    region: "",
  });

  useEffect(() => {
    // Obtiene el usuario logueado desde localStorage
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedInUser(user);
      setFormData({ ...formData, email: user.email }); // Precarga el email del usuario
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loggedInUser) {
      alert("Debe iniciar sesión para guardar la información.");
      return;
    }

    setContactData(formData); // Guarda los datos en el contexto

    try {
      // Actualiza la información del usuario en la base de datos
      const userKey = loggedInUser.email.replace(/\./g, "_"); // Reemplaza puntos en el email
      const userRef = ref(database, `users/${userKey}/contactInfo`);
      await update(userRef, formData); // Guarda los datos bajo el nodo contactInfo
      alert("Información de contacto guardada con éxito.");
      router.push("/Envio"); // Redirige a la página de Envío.js
    } catch (error) {
      console.error("Error al guardar la información:", error);
      alert("Hubo un error al guardar la información. Intenta de nuevo.");
    }
  };

  return (
    <div className="contact-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="DifuAura" />
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <a href="/cart">Carrito</a> {'>'}
        <span>Detalles</span> {'>'}
        <span>Envío</span> {'>'}
        <span>Pago</span>
      </nav>

      {/* Formulario de contacto */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contacto</h2>
        <input
          type="email"
          name="email"
          placeholder="Email o número celular"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <h2>Dirección de envío</h2>
        <div className="input-group">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="input-field"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            className="input-field"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          className="input-field"
          value={formData.direccion}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="numeroExterior"
          placeholder="Número Exterior"
          className="input-field"
          value={formData.numeroExterior}
          onChange={handleChange}
          required
        />
        <div className="input-group">
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            className="input-field"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="codigoPostal"
            placeholder="Código Postal"
            className="input-field"
            value={formData.codigoPostal}
            onChange={handleChange}
            required
          />
          <select
            name="municipio"
            className="input-field"
            value={formData.municipio}
            onChange={handleChange}
            required
          >
            <option value="">Municipio</option>
            <option value="Municipio 1">Municipio 1</option>
            <option value="Municipio 2">Municipio 2</option>
          </select>
        </div>
        <select
          name="region"
          className="input-field"
          value={formData.region}
          onChange={handleChange}
          required
        >
          <option value="">Región</option>
          <option value="Región 1">Región 1</option>
          <option value="Región 2">Región 2</option>
        </select>

        <div className="checkbox-container">
          <input type="checkbox" id="save-info" />
          <label htmlFor="save-info">
            Guardar esta información para futuras compras
          </label>
        </div>

        {/* Botones */}
        <div className="buttons">
          <a href="/cart" className="btn-secondary">
            Regresar al carrito
          </a>
          <button type="submit" className="btn-primary">
            Ir al envío
          </button>
        </div>
      </form>
    </div>
  );
}
