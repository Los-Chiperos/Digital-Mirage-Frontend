import React, { useEffect, useState } from "react";
import ProductList from "../Fragments/ProductList";
import Buscador from "../Fragments/Buscador";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Inicio() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const endpoint = "https://back.digital-mirage.ar/productos";

    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("No se encontraron artículos");
        setLoading(false);
      });
  }, [navigate]);

console.log(products)
  return (
    <>
      <Buscador />
      {loading ? (
        <h2>Cargando</h2>
      ) : (
        <ProductList products={products} />
      )}
    </>
  );
}

export default Inicio;
