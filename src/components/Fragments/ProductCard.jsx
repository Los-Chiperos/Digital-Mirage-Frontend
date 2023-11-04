import React, { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";
import { Switch } from '@headlessui/react';

function formatPrice(price) {
    return price.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS"
    });
}

function ProductCard({ _id, modelo, marca, descripcion, precio, url_image, onProductClick, darkMode }) {
    const [cart, setCart] = useContext(CartContext);

    const randomRating = (Math.random() * (5 - 2.5) + 2.5).toFixed(1);
    const rating = Math.round(randomRating);

    const starColor = (starIndex) => {
        return starIndex <= rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600';
    };

    const addToCart = () => {
        setCart((currItems) => {
            const isItemFound = currItems.find((item) => item._id === _id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item._id === _id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { _id, modelo, marca, descripcion, url_image, quantity: 1, precio }];
            }
        });
    };

    const removeItem = (id) => {
        setCart((currItems) => {
            if (currItems.find((item) => item._id === id)?.quantity === 1) {
                return currItems.filter((item) => item._id !== id);
            } else {
                return currItems.map((item) => {
                    if (item._id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item._id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(_id);

    const imgEstilo = {
        width: '25rem',
        height: '19rem'
    };

    return (
        <div className={`w-full h-full max-w-sm ${darkMode ? 'bg-gray-800' : 'bg-white'} border border-gray-200 rounded-lg shadow ${darkMode ? 'dark:border-gray-700' : 'dark:border-gray-200'}`}>
            <a href={`/productdetail/${_id}`} onClick={onProductClick}>
                <img className="p-8 rounded-t-lg object-contain" src={url_image} alt="product image" style={imgEstilo} />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className={`text-xl font-semibold tracking-tight ${darkMode ? 'text-gray-900' : 'dark:text-white'}`}>
                        {modelo}
                    </h5>
                </a>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'} mb-2`}>{marca}</p>
                <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'} mb-2`}>{descripcion}</p>
                <div className="mt-2.5 mb-5">
                    <span className={`text-3xl font-bold ${darkMode ? 'text-gray-900' : 'dark:text-white'}`}>
                        {formatPrice(precio)}
                    </span>
                    <div className="mt-2">
                        {quantityPerItem === 0 ? (
                            <button
                                className={`text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${darkMode ? 'dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800' : 'bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800'}`}
                                onClick={() => addToCart()}
                            >
                                Agregar
                            </button>
                        ) : (
                            <div className="flex justify-between">
                                <button
                                    className={`text-white bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${darkMode ? 'dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800' : 'bg-blue-700 hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800'}`}
                                    onClick={() => addToCart()}
                                >
                                    Agregar
                                </button>
                                <button
                                    className={`text-white bg-red-700 hover-bg-red-700 focus-ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${darkMode ? 'dark:bg-red-600 dark:hover-bg-red-700 dark:focus-ring-red-900' : 'bg-red-700 hover-bg-red-700 focus-ring-4 focus:outline-none focus:ring-red-400 dark:bg-red-600 dark:hover-bg-red-700 dark:focus-ring-red-900'}`}
                                    onClick={() => removeItem(_id)}
                                >
                                    Quitar
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;