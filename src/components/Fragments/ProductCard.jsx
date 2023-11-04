import React, { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";


function ProductCard({ _id, modelo, marca, descripcion, precio, url_image }) {
  const [cart, setCart] = useContext(CartContext);

 // Genera una valoración aleatoria en el rango de 2.5 a 5
 const randomRating = (Math.random() * (5 - 2.5) + 2.5).toFixed(1);
// Redondea la valoración a la cantidad de estrellas enteras
const rating = Math.round(randomRating);

// Función para determinar el color de la estrella (dorada o gris)
const starColor = (starIndex) => {
  return starIndex <= rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600';
};

  const addToCart = () => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item._id === _id);
      if (isItemFound) {
        return currItems.map((item) => {
          if (item._id === _id) {
            return { ...item, quantity: item.quantity + 1 }
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
  }

  const getQuantityById = (id) => {
    return cart.find((item) => item._id === id)?.quantity || 0
  }

  const quantityPerItem = getQuantityById(_id);

  const imgEstilo = {
    width: '25rem', 
    height: '19rem'
  };

  return (
    <div className="w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <a href="#">
      <img className="p-8 rounded-t-lg object-contain" src={url_image} alt="product image" style={imgEstilo} />

      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {modelo}
          </h5>
        </a>
        <p className="is-size-6 text-gray-500 dark:text-gray-400 mb-2">{marca}</p>
        <p className="is-size-7 text-gray-500 dark:text-gray-400 mb-2">{descripcion}</p>
        <div className="flex items-center mt-2.5 mb-5">

        
        <div style={{ display: 'flex' }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-4 h-4 ${starColor(star)}`} // Aplica el color de la estrella
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          {rating}
        </span>
      </div>


        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{precio}</span>
          {
            quantityPerItem === 0 ? (
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => addToCart()}
              >
                Agregar
              </button>
            ) : (
              <>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => addToCart()}
                >
                  Agregar
                </button>
                <button
                  className="text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover-bg-red-700 dark:focus:ring-red-900"
                  onClick={() => removeItem(_id)}
                >
                  Quitar
                </button>
              </>
            )}
        </div>
      </div>
    </div >
  );
}

export default ProductCard;