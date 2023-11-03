import React, { useContext, useState } from "react";
import { CartContext } from "../Context/ShoppingCartContext";

function checkout() {
  const [cart, setCart] = useContext(CartContext);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.precio;
  }, 0);

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

  return (
    <div className="mb-5">
      <br></br>
      <br></br>
      {/* Header Section */}
      <br></br>
      <br></br>

      <div className="flex flex-col items-center border-b bg-white py-9 sm:py-12 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="#" className="text-2xl font-bold text-gray-800">
          Pedido
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              {/* Navigation Links */}
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </a>
                <span className="font-semibold text-gray-900">Productos</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >

                </a>
                <span className="font-semibold text-gray-600">Finalizar</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
              </svg>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Resumen del pedido</p>
          <p className="text-gray-400">
            Revisa tus artículos. Y seleccione un método de envío adecuado.
          </p>

          {/* Product Cards */}
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {/* Product 1 */}
            {
              cart.map(producto => {
                return (
                  <>
                    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                      <img
                        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src={producto.url_image}
                        alt={`imagen del producto ${producto.marca} ${producto.modelo}`} />
                      <div className="flex w-full flex-col px-4 py-4">
                        <span className="font-semibold">{producto.marca} {producto.modelo}</span>
                        <p className="text-lg font-bold">{producto.precio}</p>
                        <button
                          className="is-flex is-flex-direction-row is-justify-content-flex-end"
                          onClick={() => removeItem(producto._id)}>❌</button>
                      </div>
                    </div>
                  </>
                )
              })
            }

            {/**
              <img
              className="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src="https://www.lg.com/ar/images/televisores/md07540656/gallery/Z-01.jpg"
              alt=""
            />
            <div className="flex w-full flex-col px-4 py-4">
              <span className="font-semibold">LG UHD LED AI ThinQ 4K 65'</span>
              <p className="text-lg font-bold">$699.999</p>
            </div>
          </div>
             */}


            {/* Product 2 */}
            {/**
             * <div className="flex flex-col rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                src="https://http2.mlstatic.com/D_NQ_NP_825955-MLU71687252597_092023-V.webp"
                alt=""
              />
              <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">Moto G32</span>
                <p className="mt-auto text-lg font-bold">$139.999</p>
              </div>
            </div>
          </div>

             */}

          </div>

          <p className="mt-8 text-lg font-medium">Métodos de Envios</p>

          {/* Shipping Options */}
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                <img className="w-14 object-contain" src="https://upload.wikimedia.org/wikipedia/commons/1/14/Correo_Argentino_Logo.png" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Correo Argentino</span>
                  <p className="text-slate-500 text-sm leading-6">Envio: 2-4 Días | $2500</p>
                </div>
              </label>
            </div>

            <div className="relative">
              <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                <img className="w-14 object-contain" src="http://www.cabb.org.ar/wp-content/uploads/2020/11/Andreani.png" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Andreani</span>
                  <p className="text-slate-500 text-sm leading-6">Envio: 2-3 Días | $3.500</p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input className="peer hidden" id="radio_3" type="radio" name="radio" checked />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_3">
                <img className="w-14 object-contain" src="https://img.freepik.com/iconos-gratis/marcador-posicion_318-154768.jpg?w=2000" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Retiro en la sucursal</span>
                  <p className="text-slate-500 text-sm leading-6">Retirar dentro de las 48hs  | $0</p>
                </div>
              </label>
            </div>
          </form>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Detalles del pago
          </p>
          <p className="text-gray-400">Complete su pedido proporcionando sus datos de pago.</p>

          {/* Payment Form */}
          <div>
            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo Electronico</label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="tucorreo@gmail.com"
              />

            </div>


            {/* Other input fields go here... */}

            {/* Total Section */}
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">$ {totalPrice}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Envio</p>
                <p className="font-semibold text-gray-900">$3.500</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">$ {totalPrice + 3500}</p>
            </div>
          </div>

          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            REALIZAR PEDIDO
          </button>

        </div>
      </div>
    </div >
  );
}

export default checkout;
