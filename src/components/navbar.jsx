import React from 'react';
import { useLocation } from 'react-router-dom'; // Importa useLocation
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation(); // Obtén la ubicación actual

  // Verifica si la ruta actual es la principal
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 w-full bg-opacity-70 backdrop-blur-md ${
        isHomePage ? 'bg-black-400' : 'bg-gray-800'
      } border-b border-shellgrayDark px-2 sm:px-4 lg:px-20 py-3`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-6 sm:h-9" alt="Logo" />
        </a>
        <div className="flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() =>
              document
                .getElementById('navbar-default')
                .classList.toggle('hidden')
            }
          >
            <span className="sr-only">Open main menu</span>
            <img className="h-6 w-6" src={menu} alt="" />
          </button>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 pr-1 md:flex-row md:gap-10 md:mt-0 md:text-sm md:font-medium lg:text-base">
            <li>
              <a
                href="/"
                className="nav-link block py-2 pr-4 pl-3 text-red rounded md:bg-transparent md:p-0 transition hover:text-red"
              >
                INICIO
              </a>
            </li>
            <li>
              <a
                href="/nosotros"
                className="nav-link block py-2 pr-4 pl-3 text-red rounded md:bg-transparent md:p-0 transition hover:text-red"
              >
                NOSOTROS
              </a>
            </li>
            <li>
              <a
                href="/delivery"
                className="nav-link block py-2 pr-4 pl-3 text-red rounded md:bg-transparent md:p-0 transition hover:text-red"
              >
                DELIVERY
              </a>
            </li>
            <li>
              <a
                href="/contacto"
                className="nav-link block py-2 pr-4 pl-3 text-red rounded md:bg-transparent md:p-0 transition hover:text-red"
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
