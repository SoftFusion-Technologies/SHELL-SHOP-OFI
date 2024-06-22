import React from 'react';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full bg-white border-b-2 border-gray-200 px-2 sm:px-4 lg:px-20 py-3">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-6 sm:h-9" alt="Logo" />
          {/* <span className="pl-5 self-center text-xl font-semibold whitespace-nowrap">Shell Shop</span> */}
        </a>
        <div className="flex md:hidden">
          <button 
            type="button" 
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            aria-controls="navbar-default" 
            aria-expanded="false" 
            onClick={() => document.getElementById('navbar-default').classList.toggle('hidden')}>
            <span className="sr-only">Open main menu</span>
            <img className='h-6 w-6' src={menu} alt="" />
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 pr-5 md:flex-row md:gap-20 md:mt-0 md:text-sm md:font-medium lg:text-base">
            <li>
              <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 transition hover:text-red">
              Home
              </a>
            </li>
            <li>
              <a href="/nosotros" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 transition hover:text-red">
              Nosotros
              </a>
            </li>
            <li>
              <a href="/contacto" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0 transition hover:text-red">
              Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;