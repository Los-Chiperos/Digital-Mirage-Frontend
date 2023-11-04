import React, { useContext, useState } from "react";
import { CartContext } from "../Context/ShoppingCartContext";

function formatPrice(price) {
  return price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS"
  });
}

function Checkout() {
  const shippingOptions = [
    {
      id: 1,
      name: "Correo Argentino",
      cost: 2500,
      deliveryTime: "2-4 Días",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Correo_Argentino_Logo.png",
    },
    {
      id: 2,
      name: "Andreani",
      cost: 3500,
      deliveryTime: "2-3 Días",
      imageUrl: "http://www.cabb.org.ar/wp-content/uploads/2020/11/Andreani.png",
    },
    {
      id: 3,
      name: "Retiro en la sucursal",
      cost: 0,
      deliveryTime: "Retirar dentro de las 48hs",
      imageUrl: "https://img.freepik.com/iconos-gratis/marcador-posicion_318-154768.jpg?w=2000",
    },
  ];
  const [cart, setCart] = useContext(CartContext);
  const [selectedShippingOption, setSelectedShippingOption] = useState(shippingOptions[0]);

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
  };

  const handleShippingOptionChange = (option) => {
    setSelectedShippingOption(option);
  };

  return (
    <div className="mb-5">
      {/* ... Otro contenido del encabezado ... */}

      {/* Main Content Section */}
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Resumen del pedido</p>
          <p className="text-gray-400">
            Revisa tus artículos. Y selecciona un método de envío adecuado.
          </p>

          {/* Product Cards */}
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {cart.map((producto) => (
              <div className="flex flex-col rounded-lg bg-white sm:flex-row" key={producto._id}>
                <img
                  className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                  src={producto.url_image}
                  alt={`imagen del producto ${producto.marca} ${producto.modelo}`}
                />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{producto.marca} {producto.modelo}</span>
                  <p className="text-lg font-bold">{formatPrice(producto.precio)}</p>
                  <div className="flex items-center">
                    <button onClick={() => removeItem(producto._id)}>❌</button>
                    <span className="ml-2">Cantidad: {producto.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">Métodos de Envios</p>

          {/* Shipping Options */}
          <form className="mt-5 grid gap-6">
            {shippingOptions.map((option) => (
              <div key={option.id} className="relative">
                <input
                  className="peer hidden"
                  id={`radio_${option.id}`}
                  type="radio"
                  name="radio"
                  checked={option === selectedShippingOption}
                  onChange={() => handleShippingOptionChange(option)}
                />
                <span
                  className={`peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white ${
                    option === selectedShippingOption ? 'bg-blue-500' : ''
                  }`}
                ></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor={`radio_${option.id}`}
                >
                  <img className="w-14 object-contain" src={option.imageUrl} alt={option.name} />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">{option.name}</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Envío: {option.deliveryTime} | {formatPrice(option.cost)}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </form>
        </div>

        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Detalles del pago</p>
          <p className="text-gray-400">Complete su pedido proporcionando sus datos de pago.</p>

          {/* Payment Form */}
          <div>
            <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Correo Electrónico</label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus-border-blue-500 focus-ring-blue-500"
                placeholder="tucorreo@gmail.com"
              />
            </div>

            {/* Other input fields go here... */}

            {/* Total Section */}
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900"> {formatPrice(totalPrice)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Envío</p>
                <p className="font-semibold text-gray-900">
                  {formatPrice(selectedShippingOption.cost)}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatPrice(totalPrice + selectedShippingOption.cost)}
              </p>
            </div>
          </div>

          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            REALIZAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
