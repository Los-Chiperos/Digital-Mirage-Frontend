import React, { useState, useEffect } from 'react';
import LoadingScreen from "./components/Fragments/LoadingScreen.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Banner2 from "./components/Fragments/Banner2.jsx";
import Banner from "./components/Fragments/Banner.jsx";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Oculta la pantalla de carga después de 2.5 segundos
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
            <Router />
          </main>
          <Banner2 />
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
