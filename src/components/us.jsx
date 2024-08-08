import React from 'react'
import bg from '../assets/bg.jpg'

const Us = () => {
  return (
    <div className="bg-gray-dark py-16">
      <div className="max-w-5xl mx-auto text-center px-8">
        <h1 className="text-5xl font-messina font-extrabold text-black mb-6">
          SOMOS <span className="text-gray-800">SHELL SHOP</span>
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed mb-8">
          Somos más que una simple cafetería, somos el punto de encuentro ideal
          para aquellos que buscan calidad, calidez y un toque especial en cada
          visita. Ofrecemos una experiencia única que combina la excelencia de
          nuestros productos con el confort de un ambiente acogedor.
          <br />
          <br />
          Desde nuestro inicio, hemos tenido como objetivo proporcionar a
          nuestros clientes un espacio donde puedan relajarse y disfrutar de un
          buen momento y mejor aun con un buen café recién hecho. Nos
          enorgullece ofrecer productos de alta calidad, siempre con un servicio
          amable y profesional.
          <br />
          <br />
          En <strong>Shell Shop Monteros</strong>, cada detalle cuenta. Desde el
          aroma del café hasta la frescura de nuestros ingredientes, trabajamos
          cada día para superar tus expectativas y hacer de cada visita un
          momento especial. Ya sea que estés de paso o te tomes un momento para
          ti, estamos aquí para ofrecerte lo mejor.
          <br />
          <br />
          <strong className='text-xl'>
            ¡Te invitamos a conocernos y a disfrutar de una experiencia
            inigualable en cada taza!
          </strong>
        </p>
        {/* <img src={bg} alt="Imagen representativa" className='rounded-lg shadow-lg w-full max-w-md mx-auto mb-8' /> */}
        {/* <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 px-8 py-3 rounded-full text-gray-900 font-semibold">
          Más información
        </button> */}
      </div>
    </div>
  );
}

export default Us;
