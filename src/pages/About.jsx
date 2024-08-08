import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="pt-4 text-3xl text-center font-bold sm:text-7xl font-bignoodle">
        QUIÉNES SOMOS
      </h1>
      <section className="about-content">
        <h2>Sobre Nosotros</h2>
        <p>
          Bienvenidos a Shell Shop Monteros, una cafetería ubicada en la
          estación de servicio Shell. En Shell Shop, nos enorgullece ofrecer a
          nuestros clientes una experiencia única con una amplia gama de
          productos frescos y deliciosos, acompañados de un servicio amable y
          profesional. Nuestro compromiso es proporcionar un lugar acogedor
          donde nuestros clientes puedan relajarse, disfrutar de un buen café y
          conocer a otras personas.
        </p>
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra misión es ser el lugar preferido para tomar un café y
          disfrutar de productos de alta calidad en Monteros. Nos esforzamos por
          ofrecer un ambiente agradable, con productos que cumplan con los más
          altos estándares de frescura y sabor.
        </p>
        <h2>Nuestra Visión</h2>
        <p>
          Aspiramos a expandir nuestra presencia y seguir siendo un punto de
          referencia en la comunidad, proporcionando productos excepcionales y
          un servicio de excelencia. Queremos ser parte de cada momento especial
          en la vida de nuestros clientes y continuar creciendo con ellos.
        </p>
      </section>
      <section className="about-cta">
        <button className="cta-button">
          ¡Visítanos Hoy!
        </button>
      </section>
    </div>
  );
};

export default About;
