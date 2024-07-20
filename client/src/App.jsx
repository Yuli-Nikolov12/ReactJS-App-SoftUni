import { Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Header from './components/Header'
import NotFoundPage from "./components/NotFoundPage";
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';

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
        </Routes>
      </div>
  )
}