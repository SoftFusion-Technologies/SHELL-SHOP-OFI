import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import delivery from '../assets/benefits/delivery.png';
import cocinero from '../assets/benefits/cocinero.png';
import cliente from '../assets/benefits/cliente.png';

const Benefits = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="h-[360px] w-full flex items-center md:hidden">
        <Slider className="w-full" {...settings}>
          <div className='w-full flex justify-center items-center'>
            <h3 className='font-bold text-2xl font-roboto text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
              Delivery
            </h3>
            <div className='flex justify-center'>
              <p className='pt-2 text-center w-[250px] font-montserrat text-gray-700'>
                Entrega rápida y segura a tu puerta
              </p>
            </div>
            <img src={delivery} alt="" className='w-[200px] mx-auto' />
          </div>
          <div className='w-full flex justify-center items-center'>
            <h3 className='font-bold text-2xl font-roboto text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
              Mejores cocineros
            </h3>
            <div className='flex justify-center'>
              <p className='pt-2 text-center w-[250px] font-montserrat text-gray-700'>
                Nuestros cocineros hacen la diferencia
              </p>
            </div>
            <img src={cocinero} alt="" className='w-[200px] mx-auto' />
          </div>
          <div className='w-full flex justify-center items-center'>
            <h3 className='font-bold text-2xl font-roboto text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
              Nuestros clientes
            </h3>
            <div className='flex justify-center'>
              <p className='pt-2 text-center w-[250px] font-montserrat text-gray-700'>
                La preferencia de nuestros clientes nos respalda
              </p>
            </div>
            <img src={cliente} alt="" className='w-[200px] mx-auto' />
          </div>
        </Slider>
      </div>
      <div className='hidden justify-around items-center h-[400px] bg-gray-200 md:flex'>
        <div className='w-full flex flex-col justify-center items-center'>
            <h3 className='font-bold text-xl font-roboto text-center bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent'>
              Delivery
            </h3>
            <div className='flex justify-center'>
              <p className='pt-2 text-center w-[250px] font-montserrat text-gray-700'>
                Entrega rápida y segura a tu puerta
              </p>
            </div>
            <img src={delivery} alt="" className='w-[200px] mx-auto' />
        </div>
        <div className='w-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent'>
            <h3 className='font-bold text-xl font-roboto text-center'>
              Mejores cocineros
            </h3>
            <div className='flex justify-center'>
              <p className='pt-2 text-center w-[250px] font-montserrat text-gray-700'>
                Nuestros cocineros hacen la diferencia
              </p>
            </div>
            <img src={cocinero} alt="" className='w-[200px] mx-auto' />
          </div>
        <div className='w-full flex flex-col justify-center items-center'>
            <h3 className='font-bold text-xl font-roboto text-center bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent'>
              Nuestros clientes
            </h3>
            <div className='flex justify-center'>
              <p className='pt-2 text-center w-[250px] font-montserrat text-gray-700'>
                La preferencia de nuestros clientes nos respalda
              </p>
            </div>
            <img src={cliente} alt="" className='w-[200px] mx-auto' />
        </div>
      </div>
    </>
  );
}

export default Benefits;