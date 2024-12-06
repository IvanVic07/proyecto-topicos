import React, { useState, useEffect } from "react";
import "./ShippingForm.css"; // Import the CSS file for styles
import municipiosData from "./src/Municipios.json"; // Import the municipios JSON file

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

  const [states, setStates] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);

  useEffect(() => {
    // Load states dynamically from municipios.json
    const statesFromData = Object.keys(municipiosData);
    setStates(statesFromData);
  }, []);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setFormData({ ...formData, region: selectedState, municipality: "" });

    // Load municipalities dynamically based on the selected state
    const municipalitiesForState = municipiosData[selectedState] || [];
    setMunicipalities(municipalitiesForState);
  };

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
            <label>Estado</label>
            <select
              name="region"
              value={formData.region}
              onChange={handleStateChange}
              className="input"
            >
              <option value="">Seleccione un estado</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="inputGroup">
            <label>Municipio</label>
            <select
              name="municipality"
              value={formData.municipality}
              onChange={handleChange}
              className="input"
              disabled={!municipalities.length}
            >
              <option value="">Seleccione un municipio</option>
              {municipalities.map((municipio) => (
                <option key={municipio} value={municipio}>
                  {municipio}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="row">
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
