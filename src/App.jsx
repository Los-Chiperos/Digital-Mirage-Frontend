// Importar los componentes necesarios desde sus respectivos archivos.
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

// Definir el componente principal de la aplicación.
function App() {
  return (
    // Usar BrowserRouter para habilitar el enrutamiento en React Router.
    <BrowserRouter>
      {/* Mostrar el componente Header en la parte superior de la aplicación. */}
      <Header />

      {/* El contenido principal de la página se renderizará aquí. */}
      <main>
        {/* El componente Router se encargará de cargar los componentes asociados a las rutas. */}
        <Router />
      </main>

      {/* Mostrar el componente Footer en la parte inferior de la aplicación. */}
      <Footer />
    </BrowserRouter>
  );
}

// Exportar el componente App para su uso en otros lugares de la aplicación.
export default App;
