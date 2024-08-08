import React from 'react';
import deliveryImage from '../assets/delivery2.jpg'; // Asegúrate de tener esta imagen en tu carpeta de assets

const Delivery = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-6 mt-10">
          Conocé Nuestro Servicio de Delivery
        </h1>
        <div className="flex flex-col items-center text-center">
          <p className="text-lg text-gray-600 mb-4">
            ¡Disfruta de nuestros productos desde la comodidad de tu hogar!
            Nuestro servicio de delivery está diseñado para ofrecerte la mejor
            experiencia de compra con la comodidad que mereces. Hacemos entregas
            rápidas y seguras para que puedas disfrutar de nuestros productos
            frescos y deliciosos sin salir de casa.
          </p>
          <p className="text-lg text-gray-600">
            Para más información o para realizar un pedido, no dudes en
            contactarnos al número:
            <span className="font-semibold text-red-600"> (123) 456-7890</span>
          </p>
          <img
            src={deliveryImage}
            alt="Delivery Service"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
