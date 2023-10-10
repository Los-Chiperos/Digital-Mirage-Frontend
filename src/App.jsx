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
