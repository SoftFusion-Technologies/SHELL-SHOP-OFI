import React from 'react';

const Contacto = () => {
  return (
    <div className='h-auto py-10 bg-gray-100'>
      <div className='flex justify-center items-center gap-5 flex-col p-5'>
        <h1 className='text-center text-4xl font-bold'>Contacto</h1>
        <p className='text-center w-[300px]'>
          Para consultas, reservas o cualquier otra información, no dudes en contactarnos:
        </p>
        <p className='text-center w-[300px]'>
          Teléfono: +54 123 456 7890<br />
          Correo: contacto@shellshopmonteros.com<br />
          Dirección: Calle Falsa 123, Monteros
        </p>
        <button className='bg-yellow px-10 py-3 rounded'>Envíanos un mensaje</button>
      </div>
    </div>
  );
};

export default Contacto;