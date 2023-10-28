import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard"; // Asegúrate de importar tu componente ProductCard

function Buscador({ products }) {
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const keyword = ev.currentTarget.keyword.value.trim();
        if (keyword.length !== 0) {
            ev.currentTarget.keyword.value = "";
            // Realizar la búsqueda en la lista de productos y almacenar los resultados
            const results = products.filter((product) =>
                product.modelo.toLowerCase().includes(keyword.toLowerCase())
            );
            setSearchResults(results);
        }
    };

    return (
        <div>
            <form className="px-6 py-2" onSubmit={handleSubmit}>
                {/* ... Código del formulario de búsqueda ... */}
            </form>
            <div className="flex flex-col items-center gap-6">
                {searchResults.length > 0 ? (
                    searchResults.map((product, idx) => (
                        <ProductCard key={idx} product={product} />
                    ))
                ) : products.map((product, idx) => (
                    <ProductCard key={idx} product={product} />
                ))}
                {searchResults.length === 0 && (
                    <p>No se encontraron resultados.</p>
                )}
            </div>
        </div>
    );
}

export default Buscador;
