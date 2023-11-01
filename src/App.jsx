<<<<<<< HEAD
// Importar los componentes necesarios desde sus respectivos archivos.
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Banner2 from "./components/Fragments/Banner2.jsx";
import Banner from "./components/Fragments/Banner.jsx";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

// Definir el componente principal de la aplicación.
function App() {
  return (
    // Usar BrowserRouter para habilitar el enrutamiento en React Router.
    <BrowserRouter>

      {/* Mostrar el componente Header en la parte superior de la aplicación. */}
      <Header />

      <Banner />
      {/* El contenido principal de la página se renderizará aquí. */}
      <main>
      <Router />
        {/* El componente Router se encargará de cargar los componentes asociados a las rutas. */}
      </main>

      <Banner2 />

      {/* Mostrar el componente Footer en la parte inferior de la aplicación. */}
      <Footer />

    </BrowserRouter>
  );
}

// Exportar el componente App para su uso en otros lugares de la aplicación.
export default App;
=======
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/Fragments/LoadingScreen.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Banner2 from './components/Fragments/Banner2.jsx';
import Banner from './components/Fragments/Banner.jsx';
import Router from './Router.jsx';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Oculta la pantalla de carga después de 1.5 segundos
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen /> // Muestra la pantalla de carga mientras isLoading sea true
      ) : (
        <div>
          <Header />
          {/* Condicional para mostrar o no el Banner en función de la ruta */}
          {window.location.pathname !== '/faq' && window.location.pathname !== '/checkout' &&  window.location.pathname !== '/contacto' && window.location.pathname !== '/nosotros'&& window.location.pathname !== '/wishlist' && window.location.pathname !== '/productdetail' &&  <Banner />}
          <main>
            <Router />
          </main>
          {/* Condicional para mostrar o no el Banner2 en función de la ruta */}
          {window.location.pathname !== '/faq' && window.location.pathname !== '/checkout' && window.location.pathname !== '/wishlist' &&   window.location.pathname !== '/contacto' && window.location.pathname !== '/nosotros' && window.location.pathname !== '/productdetail' && <Banner2 />}
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
>>>>>>> 4e4f8973a8cf21cfd2b0a1e6def6d60b4464cc4b
