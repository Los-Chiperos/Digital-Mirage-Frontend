import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `https://back.digital-mirage.ar/productos/byid/${productId}`;

    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("No se encontró el artículo");
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  if (!product) {
    return null; // o un mensaje de error personalizado
  }

  return (
    <div>
      <h1>{product.modelo}</h1>
      <p>Marca: {product.marca}</p>
      <p>Descripción: {product.descripcion}</p>
      <p>Stock: {product.stock}</p>
      <p>Precio: {product.precio}</p>
      <img src={product.url_image} alt={product.modelo} />

      {/* Agrega más detalles del producto según tu estructura de datos */}
    </div>
  );
}

export default ProductDetail;
