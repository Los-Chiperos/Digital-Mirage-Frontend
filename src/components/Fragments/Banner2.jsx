import React from 'react';

function Banner2() {
  return (
    <div className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill px-5" style={{ backgroundImage: 'url(https://www.cycelectronica.com/media/banner_audifonos1-1000.jpg?id=1657951003)' }}>
      <div className="md:w-1/2">
        <p className="font-bold text-sm uppercase">Serivicios</p>
        <p className="text-3xl font-bold">Conoce nuestros nuevos productos</p>
        <p className="text-2xl mb-10 leading-none">Garantias de 60 dias para cada producto</p>
        <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contactanos</a>
      </div>
    </div>
  );
}

export default Banner2;
