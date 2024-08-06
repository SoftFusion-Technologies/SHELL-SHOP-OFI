import React from 'react'
// import coffe from '../assets/header/image_1.png'
import '../styles/header.css'

const Header = () => {
  return (
    <div className="h-screen w-full header">
      <div className="pt-20 flex flex-col items-center justify-center lg:pt-0 lg:flex-row">
        <div className="w-full text-center text-white pt-10 lg:pt-32">
          <h1 className="pt-4 text-3xl font-bold sm:text-6xl font-bignoodle">
            SHELL SHOP MONTEROS
          </h1>
          <div className="flex justify-center items-center">
            <p className="pt-5 w-[290px] sm:w-[450px] sm:text-xl font-messina mt-5">
              ¡Descubre la combinación perfecta de café, comodidad y servicio en
              Shell Shop!
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 pt-5 text-white sm:flex-row">
            <div className='w-[200px]'>
              <button className="bg-red px-10 py-2 rounded-lg  font-bignoodle sm:text-2xl mt-5">
                NOSOTROS
              </button>
              <button className="bg-red px-10 py-2 rounded-lg  font-bignoodle sm:text-2xl mt-5 ">
                PRODUCTOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header