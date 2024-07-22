import Home from "../home/Home";
import Header from '../header/Header'
import NotFoundPage from "../NotFoundPage";
import Login from '../login/Login';
import Register from '../register/Register';
import AboutUs from '../aboutPage/AboutUs';
import ProductList from '../products/ProductList';
import ProductDetails from '../products/ProductDetails';
import ProductCreate from "../product-create/ProductCreate";
import { ThemeModeContext } from '../../contexts/ThemeContext';

import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

export default function ThemeWrapper()
{
    const [mode, setMode] = useContext(ThemeModeContext);
    return(
        <div className={`bg-${mode ? "white" : "black"}`}>
            <Header />
            
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/all-products" element={<ProductList />} />
                <Route path="/all-products/:productId/details" element={<ProductDetails />} />
                <Route path="/product-create" element={<ProductCreate />} />
            </Routes>
        </div>
    );
}