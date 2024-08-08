import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import delivery from '../assets/benefits/delivery.png';
import cocinero from '../assets/benefits/cocinero.png';
import cliente from '../assets/benefits/cliente.png';
import '../styles/benefits.css'
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
      <div className="back-ground-bo h-[360px] w-full flex items-center md:hidden">
        <Slider className="w-full" {...settings}>
          <div className="w-full flex justify-center items-center">
            <h3 className="font-bold text-2xl font-roboto text-center bg-gradient-to-r text-yellow bg-clip-text text-transparent from">
              Delivery
            </h3>
            <div className="flex justify-center">
              <p className="pt-2 text-center w-[250px] font-montserrat text-white">
                Entrega rápida y segura a tu puerta
              </p>
            </div>
            <img
              src={delivery}
              alt=""
              className="w-[200px] mx-auto img-hover-zoom"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <h3 className="font-bold text-2xl font-roboto text-center bg-gradient-to-r text-yellow bg-clip-text text-transparent">
              Mejores Cocineros
            </h3>
            <div className="flex justify-center">
              <p className="pt-2 text-center w-[250px] font-montserrat text-white">
                Nuestros cocineros hacen la diferencia
              </p>
            </div>
            <img
              src={cocinero}
              alt=""
              className="w-[200px] mx-auto img-hover-zoom"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <h3 className="font-bold text-2xl font-roboto text-center bg-gradient-to-r text-yellow bg-clip-text text-transparent">
              Nuestros Clientes
            </h3>
            <div className="flex justify-center">
              <p className="pt-2 text-center w-[250px] font-montserrat text-white">
                La preferencia de nuestros clientes nos respalda
              </p>
            </div>
            <img
              src={cliente}
              alt=""
              className="w-[200px] mx-auto img-hover-zoom "
            />
          </div>
        </Slider>
      </div>
      <div className="back-ground-bo hidden justify-around items-center h-[400px] bg-gray-200 md:flex">
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="font-bold text-3xl font-roboto text-center bg-gradient-to-r text-yellow bg-clip-text text-transparent">
            Delivery
          </h3>
          <div className="flex justify-center">
            <p className="pt-2 text-center w-[250px]  text-xl font-montserrat text-white">
              Entrega rápida y segura a tu puerta
            </p>
          </div>
          <img
            src={delivery}
            alt=""
            className="w-[200px] mx-auto img-hover-zoom"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-gradient-to-r text-yellow bg-clip-text text-transparent">
          <h3 className="font-bold text-3xl font-roboto text-center">
            Mejores Cocineros
          </h3>
          <div className="flex justify-center">
            <p className="pt-2 text-center w-[250px]  text-xl font-montserrat text-white">
              Nuestros cocineros hacen la diferencia
            </p>
          </div>
          <img
            src={cocinero}
            alt=""
            className="w-[200px] mx-auto img-hover-zoom"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="font-bold text-3xl font-roboto text-center bg-gradient-to-r text-yellow bg-clip-text text-transparent">
            Nuestros Clientes
          </h3>
          <div className="flex justify-center">
            <p className="pt-2 text-center w-[250px]  text-xl font-montserrat text-white">
              La preferencia de nuestros clientes nos respalda
            </p>
          </div>
          <img
            src={cliente}
            alt=""
            className="w-[200px] mx-auto img-hover-zoom"
          />
        </div>
      </div>
    </>
  );
}

export default Benefits;