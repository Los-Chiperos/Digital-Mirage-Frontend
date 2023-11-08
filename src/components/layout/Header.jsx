import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Registro from '../Fragments/Registro.jsx';
import Login from '../Fragments/Login.jsx';
import { LoginContext } from '../Context/LoginContext.jsx';
import "../Css/filter.css"

const Header = () => {
    const [login, setLogin] = useContext(LoginContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        setLogin('');
    }

    return (
        <div>
<<<<<<< HEAD
            <nav className={`bg-stone-950 fixed w-full z-20 top-0 left-0 border-b 'border-gray-200'}`}>
=======
            <nav className="bg-black fixed w-full z-20 top-0 left-0 border-b">
>>>>>>> e2aee4b2406c7c16f89bd2bc55f2bf08c58d0826
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="http://digital-mirage.ar/" className="flex items-center">
                        <img
                            src="https://i.postimg.cc/jdZqGQx2/logo-ecommerce-removebg-preview.png"
                            className="h-10"
                            alt="Digital Mirage Logo"
                        />
                    </Link>

<<<<<<< HEAD
                    {/* Agregar el interruptor de modo oscuro aquí */}
                   

=======
>>>>>>> e2aee4b2406c7c16f89bd2bc55f2bf08c58d0826
                    <div className="flex md:order-2">
                        {login ? (
                            <>
                                <h3 className='is-size-6 has-text-centered has-text-justified mt-2 mr-3 has-text-weight-semibold text-white'>Bienvenido: {login} </h3>
                                <button
                                    className='button is-danger'
                                    onClick={handleLogout}>Salir</button>
                            </>
                        ) : (
                            <>
                                <Login />
                                <Registro />
                            </>
                        )}
                        <button
                            onClick={toggleMenu}
<<<<<<< HEAD
                            type=""
                            className={`${darkMode
                                ? 'text-gray-400'
                                : 'text-gray-400'
                                } inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 `}
=======
                            type="button"
                            className="text-gray-500 inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
>>>>>>> e2aee4b2406c7c16f89bd2bc55f2bf08c58d0826
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
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-1 md:bg-white  ">
                            <li>
                                <Link
                                    to="/"
<<<<<<< HEAD
                                    className={`block py-2 pl-3 pr-4  hover:text-blue-500 ${darkMode ? 'text-blue-500 ' : 'text-white'
                                        } ${darkMode
                                            ? 'bg-gray-700 '
                                            : 'bg-gray-800'
                                        } rounded md:bg-transparent md:text-blue-700 md:p-0`}
=======
                                    className="block py-2 pl-3 pr-4  hover:text-blue-500 text-white bg-gray-800 rounded md:bg-transparent md:text-blue-700 md:p-0"
>>>>>>> e2aee4b2406c7c16f89bd2bc55f2bf08c58d0826
                                    aria-current="page"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/nosotros"
<<<<<<< HEAD
                                    className={`block hover:text-blue-500 py-2 pl-3 pr-4 ${darkMode ? 'text-blue-500 ' : 'text-white'
                                        } ${darkMode
                                            ? 'bg-white '
                                            : 'bg-gray-800'
                                        } rounded md:bg-transparent md:text-blue-700 md:p-0`}
=======
                                    className="block hover:text-blue-500 py-2 pl-3 pr-4 text-white bg-gray-800 rounded md:bg-transparent md:text-blue-700 md:p-0"
>>>>>>> e2aee4b2406c7c16f89bd2bc55f2bf08c58d0826
                                    aria-current="page"
                                >
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
<<<<<<< HEAD
                                    className={`block py-2 pl-3 pr-4  hover:text-blue-500 ${darkMode ? 'text-blue-500' : 'text-white'
                                        } ${darkMode
                                            ? 'bg-white '
                                            : 'bg-gray-800'
                                        } rounded md:bg-transparent md:text-blue-700 md:p-0`}
=======
                                    className="block py-2 pl-3 pr-4  hover:text-blue-500 text-white bg-gray-800 rounded md:bg-transparent md:text-blue-700 md:p-0"
>>>>>>> e2aee4b2406c7c16f89bd2bc55f2bf08c58d0826
                                    aria-current="page"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contacto"
<<<<<<< HEAD
                                    className={`block py-2 pl-3 pr-4  hover:text-blue-500 ${darkMode ? '' : 'text-white'
                                        } ${darkMode
                                            ? 'bg-white-700 '
                                            : 'bg-gray-800'
                                        } rounded md:bg-transparent md:text-blue-700 md:p-0`}
=======
                                    className="block py-2 pl-3 pr-4  hover:text-blue-500 text-white bg-white-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
>>>>>>> e2aee4b2406c7c16f89bd2bc55f2bf08c58d0826
                                    aria-current="page"
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
