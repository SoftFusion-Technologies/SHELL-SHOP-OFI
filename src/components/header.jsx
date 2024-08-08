import React, { useState, useEffect } from 'react'
// import coffe from '../assets/header/image_1.png'
import '../styles/header.css'

const Header = () => {

  const [texto, setTexto] = useState('');
  const [indice, setIndice] = useState(0);
  const fullText = 'SHELL SHOP MONTEROS';
  const typingSpeed = 110;

  useEffect(() => {
    if (indice < fullText.length) {
      const timeout = setTimeout(() => {
        setTexto(fullText.slice(0, indice + 1));
        setIndice(indice + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      // Reiniciar después de una pausa
      const resetTimeout = setTimeout(() => {
        setTexto('');
        setIndice(0);
      }, 2500);

      return () => clearTimeout(resetTimeout);
    }
  }, [indice, fullText]);

  // Separar el texto en dos partes para aplicar diferentes estilos
  const part1Length = 'SHELL SHOP'.length;

  return (
    <div className="h-screen w-full header">
      <div className="pt-20 flex flex-col items-center justify-center lg:pt-0 lg:flex-row">
        <div className="w-full text-center text-white pt-10 lg:pt-32">
          <h1 className="pt-4 text-3xl font-bold sm:text-8xl font-bignoodle">
            <span
              className={
                texto.length <= part1Length ? 'text-yellow' : 'text-yellow'
              }
            >
              {texto.slice(0, part1Length)}
            </span>
            <span
              className={
                texto.length > part1Length ? 'text-white' : 'text-white'
              }
            >
              {texto.slice(part1Length)}
            </span>
          </h1>
          <div className="flex justify-center items-center">
            <p className="pt-5 w-[290px] sm:w-[450px] sm:text-xl font-messina mt-5">
              ¡Descubre la combinación perfecta de café, comodidad y servicio en
              Shell Shop!
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 pt-5 text-white sm:flex-row">
            <div className="w-[200px]">
              <button
                onClick={() => {
                  const section = document.getElementById('productos');
                  section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-yellow px-10 py-2 rounded-lg  font-bignoodle sm:text-3xl mt-5 "
              >
                PRODUCTOS
              </button>
            </div>
          </div>
          {/* <div className="flex justify-center items-center">
           <button className="bg-yellow px-10 py-2 rounded-lg  font-bignoodle sm:text-2xl mt-5 ">
              DELIVERY
            </button>            
          </div>             */}
        </div>
      </div>
    </div>
  );
}

export default Header