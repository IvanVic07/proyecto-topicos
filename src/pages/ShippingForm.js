import React, { useState } from "react";
import "./ShippingForm.css"; // Import the CSS file for styles

const ShippingForm = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    firstName: "",
    lastName: "",
    address: "",
    exteriorNumber: "",
    city: "",
    postalCode: "",
    municipality: "",
    region: "",
    saveInfo: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic to send data to an API or handle form submission
  };

  return (
    
    <div className="container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label>Email o número celular</label>
          <input
            type="text"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            className="input"
          />
        </div>

        <h2>Dirección de envío</h2>
        <div className="row">
          <div className="inputGroup">
            <label>Nombre</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label>Apellidos</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        <div className="inputGroup">
          <label>Dirección</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="row">
          <div className="inputGroup">
            <label>Número Exterior</label>
            <input
              type="text"
              name="exteriorNumber"
              value={formData.exteriorNumber}
              onChange={handleChange}
              className="input"
            />
          </div>
        </div>

        <div className="row">
          <div className="inputGroup">
            <label>Ciudad</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label>Código Postal</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="inputGroup">
            <label>Municipio</label>
            <select
              name="municipality"
              value={formData.municipality}
              onChange={handleChange}
              className="input"
            >
              <option value="">Seleccione</option>
              <option value="Municipio1">Municipio 1</option>
              <option value="Municipio2">Municipio 2</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="inputGroup">
            <label>Región</label>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="input"
            >
              <option value="">Seleccione</option>
              <option value="Region1">Región 1</option>
              <option value="Region2">Región 2</option>
            </select>
          </div>
        </div>

        <div className="checkboxGroup">
          <input
            type="checkbox"
            name="saveInfo"
            checked={formData.saveInfo}
            onChange={handleChange}
          />
          <label>Guardar esta información para futuras compras</label>
        </div>

        <div className="buttonGroup">
          <button type="button" className="buttonSecondary">
            Regresar al carrito
          </button>
          <button type="submit" className="buttonPrimary">
            Ir al envío
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
