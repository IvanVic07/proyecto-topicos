
export default function Contact() {
    return (
      <div className="contact-container">
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar-logo">
            <img src="/logo.png" alt="DifuAura" />
          </div>
        </header>
  
        {/* Progreso */}
        <nav className="breadcrumb">
          <a href="/cart">Carrito</a> {'>'} 
          <span>Detalles</span> {'>'}
          <span>Envío</span> {'>'}
          <span>Pago</span>
        </nav>
  
        {/* Formulario de contacto */}
        <form className="contact-form">
          <h2>Contacto</h2>
          <input
            type="email"
            placeholder="Email o número celular"
            className="input-field"
          />
  
          <h2>Dirección de envío</h2>
          <div className="input-group">
            <input type="text" placeholder="Nombre" className="input-field" />
            <input type="text" placeholder="Apellidos" className="input-field" />
          </div>
          <input type="text" placeholder="Dirección" className="input-field" />
          <input
            type="text"
            placeholder="Número Exterior"
            className="input-field"
          />
          <div className="input-group">
            <input type="text" placeholder="Ciudad" className="input-field" />
            <input type="text" placeholder="Código Postal" className="input-field" />
            <select className="input-field">
              <option>Municipio</option>
              <option>Municipio 1</option>
              <option>Municipio 2</option>
            </select>
          </div>
          <select className="input-field">
            <option>Región</option>
            <option>Región 1</option>
            <option>Región 2</option>
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
  