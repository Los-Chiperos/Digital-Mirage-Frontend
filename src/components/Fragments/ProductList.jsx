import React from 'react';
import ProductCard from "./ProductCard";

function ProductList({ products, onProductClick }) {
  return (
    <>
      <div className="flex flex-col items-center gap-6 mb-5">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-black">Productos destacados</h2>
        <div className="flex justify-center flex-wrap gap-4">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              onProductClick={() => onProductClick(product._id)}
              {...product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
