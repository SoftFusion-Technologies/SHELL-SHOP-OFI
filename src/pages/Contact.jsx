import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contáctanos</h1>
        <p>Estamos aquí para ayudarte. Completa el formulario a continuación o usa nuestros detalles de contacto.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Formulario de Contacto</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Información de Contacto</h2>
          <p><strong>Dirección:</strong> Estación de Servicio Shell, Localidad de Monteros, Calle Ejemplo 123</p>
          <p><strong>Teléfono:</strong> +54 123 456 789</p>
          <p><strong>Correo Electrónico:</strong> contacto@shellshopmonteros.com</p>
        </div>

        <div className="contact-map">
          <h2>Encuéntranos en el Mapa</h2>
          {/* Reemplaza el enlace con el enlace de tu propio mapa */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.527274214256!2d-58.71030618497357!3d-27.264551682803747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457f3e3e6f8db15%3A0x1cbe15d07a440f7!2sShell%20Monteros!5e0!3m2!1ses-419!2sar!4v1687422617416!5m2!1ses-419!2sar" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
