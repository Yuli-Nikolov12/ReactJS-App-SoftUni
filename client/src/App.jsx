import { Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home";
import Header from './components/header/Header'
import NotFoundPage from "./components/NotFoundPage";
import Login from './components/login/Login';
import Register from './components/register/Register';
import AboutUs from './components/aboutPage/AboutUs';
import ProductList from './components/products/ProductList';
import ProductItem from './components/products/ProductItem';

export default function App() {

  return (
    <div className="bg-black">
        <Header />
        
        <Routes>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/all-products" element={<ProductList />} />
          <Route path="/all-products/details" element={<ProductItem />} />
        </Routes>
      </div>
  )
}