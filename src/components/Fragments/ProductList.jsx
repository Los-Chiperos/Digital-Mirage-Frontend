
import React from 'react';
import Banner2 from '../Fragments/Banner2.jsx';


function ProductCard({ imageSrc, productName, category, rating, price }) {
  return (
    

    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
      <a href="#">
     
        <img className="p-8 rounded-t-lg" src={imageSrc} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productName}</h5>
        </a>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{category}</p>
        <div className="flex items-center mt-2.5 mb-5">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-4 h-4 ${star <= rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'} mr-1`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  const products = [
    {
      id: 1,
      imageSrc: '/docs/images/products/speaker.png',
      productName: 'Bluetooth Speaker X1',
      category: 'Parlante',
      rating: 4.5,
      price: '$79.99',
    },
    {
      id: 2,
      imageSrc: '/docs/images/products/charger.png',
      productName: 'Fast Charger Pro',
      category: 'Cargador',
      rating: 4.0,
      price: '$29.99',
    },
    {
      id: 3,
      imageSrc: '/docs/images/products/headphones.png',
      productName: 'Wireless Headphones H2',
      category: 'Auriculares',
      rating: 5.0,
      price: '$129.99',
    },
    {
      id: 4,
      imageSrc: '/docs/images/products/phone-case.png',
      productName: 'Phone Case Armor',
      category: 'Accesorios para teléfono',
      rating: 4.2,
      price: '$19.99',
    },
    {
      id: 5,
      imageSrc: '/docs/images/products/power-bank.png',
      productName: 'Power Bank 1500mAh',
      category: 'Cargador portátil',
      rating: 4.7,
      price: '$39.99',
    },
    {
        id: 6,
        imageSrc: '/docs/images/products/power-bank.png',
        productName: 'Power Bank 10000mAh',
        category: 'Cargador portátil',
        rating: 4.7,
        price: '$39.99',
      },
      {
        id: 7,
        imageSrc: '/docs/images/products/power-bank.png',
        productName: 'Power Bank 10000mAh',
        category: 'Cargador portátil',
        rating: 4.7,
        price: '$39.99',
      },
      {
        id: 8,
        imageSrc: '/docs/images/products/power-bank.png',
        productName: 'Power Bank 10000mAh',
        category: 'Cargador portátil',
        rating: 4.7,
        price: '$39.99',
      },
      {
        id: 9,
        imageSrc: '/docs/images/products/power-bank.png',
        productName: 'Power Bank 10000mAh',
        category: 'Cargador portátil',
        rating: 4.7,
        price: '$39.99',
      },
      {
        id: 10,
        imageSrc: '/docs/images/products/power-bank.png',
        productName: 'Power Bank 10000mAh',
        category: 'Cargador portátil',
        rating: 4.7,
        price: '$39.99',
      },
      {
        id: 11,
        imageSrc: '/docs/images/products/power-bank.png',
        productName: 'Power Bank 10000mAh',
        category: 'Cargador portátil',
        rating: 4.7,
        price: '$39.99',
      },
      {
        id: 12,
        imageSrc: '/docs/images/products/power-bank.png',
        productName: 'Power Bank 10000mAh',
        category: 'Cargador portátil',
        rating: 4.7,
        price: '$392.99',
        
      },
      

  
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Productos destacados</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            productName={product.productName}
            category={product.category}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
        <p></p>
    </div>
    
    );

}


export default ProductList;
