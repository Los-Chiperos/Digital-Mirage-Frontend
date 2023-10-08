// Importar los componentes necesarios desde sus respectivos archivos.
import React from "react";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Banner2 from "./components/Fragments/Banner2.jsx";
import Banner from "./components/Fragments/Banner.jsx";

import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import ProductList from "./components/Fragments/ProductList.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Banner />
      <ProductList />
      <Banner2 />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
