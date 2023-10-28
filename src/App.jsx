import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LoadingScreen from './components/Fragments/LoadingScreen.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Banner2 from './components/Fragments/Banner2.jsx';
import Banner from './components/Fragments/Banner.jsx';
import Router from './Router';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const shouldShowBanners = location.pathname === '/' || !['/faq', '/contacto', '/nosotros'].includes(location.pathname);

  return (
    <BrowserRouter>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Header />
          {shouldShowBanners && <Banner />}
          <main>
            <Router />
          </main>
          {shouldShowBanners && <Banner2 />}
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;

