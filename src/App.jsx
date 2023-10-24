import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/Fragments/LoadingScreen.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Banner2 from './components/Fragments/Banner2.jsx';
import Banner from './components/Fragments/Banner.jsx';
import Nosotros from './components/Pages/Nosotros.jsx';
import Router from './Router';

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
          <Banner />
          <main>
            <Routes>
              <Route path="/nosotros" element={<Nosotros />} />
              {/* Otras rutas pueden ser definidas aquí */}
            </Routes>
          </main>
          <Banner2 />
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;

