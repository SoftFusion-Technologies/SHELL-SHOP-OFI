import React from 'react'
import bg from '../assets/bg.jpg'

const Us = () => {
  return (
    <div className='h-auto py-10 bg-gray-dark'>
      <div className='flex justify-center items-center gap-5 flex-col p-5'>
        <h1 className='text-center text-4xl font-bold'>Quiénes somos</h1>
        <p className='text-center w-[1000px]'>
          En <strong>Shell Shop Monteros</strong>, somos más que una simple cafetería; somos el punto de encuentro ideal para aquellos que buscan calidad, calidez y un toque especial en cada visita. Ubicados en la estación de servicio Shell, en la localidad de Monteros, ofrecemos una experiencia única que combina la excelencia de nuestros productos con el confort de un ambiente acogedor.
          <br /><br />
          Desde nuestro inicio, hemos tenido como objetivo proporcionar a nuestros clientes un espacio donde puedan relajarse y disfrutar de un café recién hecho, pasteles y bocadillos preparados con esmero. Nos enorgullece ofrecer productos de alta calidad, siempre con un servicio amable y profesional.
          <br /><br />
          En <strong>Shell Shop Monteros</strong>, cada detalle cuenta. Desde el aroma del café hasta la frescura de nuestros ingredientes, trabajamos cada día para superar tus expectativas y hacer de cada visita un momento especial. Ya sea que estés de paso o te tomes un momento para ti, estamos aquí para ofrecerte lo mejor.
          <br /><br />
          <strong>¡Te invitamos a conocernos y a disfrutar de una experiencia inigualable en cada taza!</strong>
        </p>
        {/* <img src={bg} alt="Imagen representativa" className='rounded w-[600px]' /> */}
        <button className='bg-yellow px-10 py-3 rounded text-gray-900'>Más información</button>
      </div>
    </div>
  )
}

export default Us;
