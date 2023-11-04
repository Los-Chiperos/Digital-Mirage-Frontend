import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Registro from '../Fragments/Registro.jsx';
import Login from '../Fragments/Login.jsx';
import { Switch } from '@headlessui/react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        // Agrega aquí la lógica para cambiar el tema de tu aplicación a modo oscuro o claro.
    };

    return (
        <div>
            <nav className={`bg-white ${darkMode ? 'dark:bg-gray-900' : 'dark:bg-gray-50'} fixed w-full z-20 top-0 left-0 border-b ${darkMode ? 'dark:border-gray-600' : 'border-gray-200'}`}>
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                    <div className="flex items-center">
                        <Link to="http://digital-mirage.ar/" className="mr-4">
                            <img
                                src="https://i.postimg.cc/jdZqGQx2/logo-ecommerce-removebg-preview.png"
                                className="h-12"
                                alt="Digital Mirage Logo"
                            />
                        </Link>

                        <div className="flex items-center">
                            <Switch
                                checked={darkMode}
                                onChange={toggleDarkMode}
                                className={`${
                                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                                } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700`}
                            >
                                <span className="sr-only">Modo oscuro</span>
                                <span
                                    className={`${
                                        darkMode ? 'translate-x-6' : 'translate-x-1'
                                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                                />
                            </Switch>
                        </div>
                    </div>

                    <div className="flex md:order-2">
                        <Login />
                        <Registro />
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className={`${
                                darkMode
                                    ? 'text-gray-400 dark:text-gray-400'
                                    : 'text-gray-500 dark:text-gray-400'
                            } inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                            menuOpen ? 'block' : 'hidden'
                        }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-white dark:bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">

                            <li>
                                <Link
                                    to="/"
                                    className={`block py-2 pl-3 pr-4 ${
                                        darkMode ? 'text-blue-500 dark:text-white' : 'text-white'
                                    } ${
                                        darkMode
                                            ? 'bg-gray-700 dark:bg-gray-800'
                                            : 'bg-blue-700'
                                    } rounded md:bg-transparent md:text-blue-700 md:p-0`}
                                    aria-current="page"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/acercade"
                                    className={`block py-2 pl-3 pr-4 ${
                                        darkMode ? 'text-blue-500 dark:text-white' : 'text-gray-900'
                                    } ${
                                        darkMode
                                            ? 'hover:bg-gray-800 dark:hover:bg-gray-700'
                                            : 'hover:bg-gray-100'
                                    } md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/servicios"
                                    className={`block py-2 pl-3 pr-4 ${
                                        darkMode ? 'text-blue-500 dark:text-white' : 'text-gray-900'
                                    } ${
                                        darkMode
                                            ? 'hover:bg-gray-800 dark:hover:bg-gray-700'
                                            : 'hover:bg-gray-100'
                                    } md:hover:text-blue-700 md:p-0`}
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contacto"
                                    className={`block py-2 pl-3 pr-4 ${
                                        darkMode ? 'text-blue-500 dark:text-white' : 'text-gray-900'
                                    } ${
                                        darkMode
                                            ? 'hover-bg-gray-800 dark:hover-bg-gray-700'
                                            : 'hover-bg-gray-100'
                                    } md:hover-text-blue-700 md:p-0`}
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
