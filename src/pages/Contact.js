import { useState } from 'react';
import { useContact } from '../context/ContactContext';
import { useRouter } from 'next/router';

export default function Contact() {
  const { setContactData } = useContact();
  const router = useRouter(); // Usamos el hook useRouter para redirección
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellidos: '',
    direccion: '',
    numeroExterior: '',
    ciudad: '',
    codigoPostal: '',
    municipio: '',
    region: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactData(formData); // Guarda los datos en el contexto
    router.push('/Envio'); // Redirige a la página de Envío.js
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
