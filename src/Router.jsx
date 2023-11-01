import react from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./components/Home/Inicio";
import AcercaDe from "./components/Pages/AcercaDe";
import Categorias from "./components/Pages/Categorias";
import Contacto from "./components/Pages/Contacto";
import Servicios from "./components/Pages/Servicios";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/acercade" element={<AcercaDe />} />
                <Route exact path="/categorias" element={<Categorias />} />
                <Route exact path="/servicios" element={<Servicios />} />
                <Route exact path="/contacto" element={<Contacto />} />
            </Routes>
        </div>
    )
}

export default Router;
