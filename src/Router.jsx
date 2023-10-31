import react from "react";
import { Route, Routes } from "react-router-dom";
import Inicio from "./components/Home/Inicio";
import AcercaDe from "./components/Pages/AcercaDe";
import Categorias from "./components/Pages/Categorias";
import Contacto from "./components/Pages/Contacto";
import Servicios from "./components/Pages/Servicios";
import Nosotros from "./components/Pages/Nosotros";
import Faq from "./components/Pages/SubPages/Faq";
import ProductDetail from "./components/Fragments/ProductDetail.jsx";
import Checkout from "./components/Fragments/Checkout.jsx";
import WishList from "./components/Fragments/Wishlist.jsx";


const Router = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/acercade" element={<AcercaDe />} />
                <Route exact path="/categorias" element={<Categorias />} />
                <Route exact path="/servicios" element={<Servicios />} />
                <Route exact path="/contacto" element={<Contacto />} />
                <Route exact path="/nosotros" element={<Nosotros />} />
                <Route exact path="/faq" element={<Faq />} />
                <Route exact path="/productdetail" element={<ProductDetail />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route exact path="/wishlist" element={<WishList />} />



            </Routes>
        </div>
    )
}

export default Router;
