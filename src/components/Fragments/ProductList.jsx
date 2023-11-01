import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";

function ProductList({ products }) {

  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Productos destacados</h2>
        <div className="flex justify-center flex-wrap gap-4">

          {
            products.map((product, idx) => {
              return (
                <ProductCard key={idx} products={product} />
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default ProductList;